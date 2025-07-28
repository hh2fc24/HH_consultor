// src/app/api/registro/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Inicializamos el cliente de Supabase para el servidor
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Inicializamos el cliente de Resend
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, profesion, email, acepta } = body;

    // 1. Insertar en la base de datos
    const { error: insertError } = await supabaseAdmin
      .from('curso_inscripciones')
      .insert([{ nombre, profesion, email, acepta }]);

    if (insertError) {
      console.error('Error en Supabase (API Route):', insertError);
      throw new Error('Error al guardar en la base de datos.');
    }

    // 2. Enviar el correo de confirmación
    const calendarLink = "https://calndr.link/d/event?start=2025-08-01T20:00&end=2025-08-01T20:45&title=Taller%20IA%20Pr%C3%A1ctica&description=Taller%20en%20vivo%20para%20aprender%20a%20automatizar%20tu%20trabajo%20con%20IA.&location=Zoom";

    const { error: emailError } = await resend.emails.send({
      from: 'Curso IA de Altius Ignite <hola@altiusignite.com>',
      to: [email],
      subject: '🚀 ¡Cupo pre-reservado! Estás a un paso de unirte al curso de IA',
      html: `<!DOCTYPE html>
<html>
<head><title>Confirmación</title></head>
<body style="font-family: sans-serif; margin: 0; padding: 40px; background-color: #f4f4f4; color: #333;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr><td align="center">
      <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
        <tr><td><img src="https://xlwvzzwgtexpnosmqpjy.supabase.co/storage/v1/object/public/imagenes-curso//HH_mail.png" alt="Banner" style="width: 100%; display: block;"></td></tr>
        <tr><td style="padding: 40px;">
          <h1 style="font-size: 24px; margin-top: 0;">¡Tu cupo está pre-reservado!</h1>
          <p style="font-size: 16px; line-height: 1.5;">Hola ${nombre}, ¡qué emoción tenerte a bordo!</p>
          <p style="font-size: 16px; line-height: 1.5;">Has dado el paso más importante. Revisa los detalles de tu pre-reserva.</p>
          <h2 style="font-size: 20px; border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 30px;">Detalles del Taller</h2>
          <p><strong>📅 Fecha:</strong> Viernes 01 Agosto</p>
          <p><strong>⏰ Horario:</strong> 20:00 - 20:45 (Hora Bolivia )</p>
          <p><strong>💻 Modalidad:</strong> Zoom en Vivo</p>
          <h2 style="font-size: 20px; border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 30px;">Siguiente Paso: Pago</h2>
          <p>Nuestro equipo comercial se contactará contigo para coordinar el pago de los 79 BOB.</p>
          <p>Mientras tanto, ¡añade la fecha a tu calendario!</p>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 20px; margin-bottom: 20px;">
            <tr><td align="center"><a href="${calendarLink}" style="background-color: #007bff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; display: inline-block;" target="_blank">🗓️ Añadir a Calendario</a></td></tr>
          </table>
          <p style="font-size: 14px; color: #555;">💡 <strong>Diagnóstico IA:</strong> Te enviaremos el acceso en un correo separado.</p>
        </td></tr>
        <tr><td style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888;">
          <p>¿Preguntas? <a href="mailto:ayuda@altiusignite.com" style="color: #007bff;">ayuda@altiusignite.com</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`,
    });

    if (emailError) {
      console.error('Error en Resend (API Route):', emailError);
      throw new Error('Error al enviar el correo de confirmación.');
    }

    // 3. Si todo va bien, devolvemos una respuesta de éxito
    return NextResponse.json({ message: 'Registro y correo enviados con éxito' });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
