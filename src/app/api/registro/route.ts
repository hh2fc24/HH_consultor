// src/app/api/registro/route.ts
// v2.0 - Apuntando a la nueva función 'enviar-correo-final' para evitar caché.

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// ¡IMPORTANTE! Este código se ejecuta en el servidor.
// Usa las variables de entorno SIN 'NEXT_PUBLIC_'.
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Inicializamos un cliente de Supabase especial para el backend (con permisos de admin)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    // 1. Obtenemos los datos que nos envía el formulario desde el frontend
    const body = await request.json();
    const { nombre, profesion, email, acepta } = body;

    // 2. Insertamos los datos en la tabla usando la clave de administrador
    // Esto se salta todas las políticas de RLS y es la forma más robusta.
    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('curso_inscripciones')
      .insert({ nombre, profesion, email, acepta })
      .select()
      .single(); // .single() es importante para obtener el objeto insertado

    if (insertError) {
      console.error('Error de Supabase en API Route (Paso de Inserción):', insertError);
      // Lanzamos el error para que lo capture el bloque catch
      throw insertError;
    }

    // 3. Invocamos la NUEVA Edge Function desde aquí, pasándole los datos del registro
    // Es más seguro y fiable hacerlo desde el backend.
    const { error: invokeError } = await supabaseAdmin.functions.invoke('enviar-correo-final', { // <-- ¡AQUÍ ESTÁ EL CAMBIO!
      body: { record: insertData }
    });

    if (invokeError) {
        console.error('Error de Supabase en API Route (Paso de Invocación):', invokeError);
        // Lanzamos el error para que lo capture el bloque catch
        throw invokeError;
    }

    // 4. Si todo ha ido bien, devolvemos una respuesta de éxito al formulario
    return NextResponse.json({ message: 'Registro y envío de correo iniciados con éxito.' });

  } catch (error: any) {
    // Si algo falla en cualquiera de los pasos, devolvemos un error claro al frontend
    return NextResponse.json(
      { error: `Error en el servidor: ${error.message}` },
      { status: 500 }
    );
  }
}
