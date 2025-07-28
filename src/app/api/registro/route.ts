// src/app/api/registro/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Inicializamos el cliente de Supabase para el servidor
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
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
    const calendarLink = "https://xlwvzzwgtexpnosmqpjy.supabase.co/storage/v1/object/public/imagenes-curso//taller-ia.ics";

    const { error: emailError } = await resend.emails.send({
      from: 'Curso IA de Altius Ignite <hola@altiusignite.com>',
      to: [email],
      subject: '🚀 ¡Cupo confirmado! Tu viaje a la IA Práctica comienza ahora.',
      html: `<!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>¡Cupo Confirmado!</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; margin: 0; padding: 0; background-color: #0a0a0a; }
          table { border-collapse: collapse; }
          a { color: #3b82f6; text-decoration: none; }
          p { line-height: 1.6; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; }
          .content { padding: 32px; }
          .button { background-color: #3b82f6; color: #ffffff; padding: 14px 28px; border-radius: 8px; display: inline-block; font-weight: bold; text-align: center; }
          .footer { padding: 24px; text-align: center; font-size: 12px; color: #9ca3af; }
        </style>
      </head>
      <body>
        <table class="container" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding: 24px 0;">
              <!-- Logo opcional -->
            </td>
          </tr>
          <tr>
            <td style="background-image: url('https://xlwvzzwgtexpnosmqpjy.supabase.co/storage/v1/object/public/imagenes-curso/HH_mail.png' ); background-size: cover; background-position: center; border-radius: 16px 16px 0 0;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 120px 32px 32px 32px;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: rgba(10, 10, 10, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                      <tr>
                        <td style="padding: 24px; color: #ffffff;">
                          <h1 style="margin: 0; font-size: 28px; font-weight: 800;">¡Tu cupo está confirmado!</h1>
                          <p style="margin: 8px 0 0; font-size: 16px; color: #d1d5db;">Hola ${nombre}, ¡qué emoción tenerte a bordo!</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="content" style="background-color: #111827; border-radius: 0 0 16px 16px; color: #d1d5db;">
              <p style="font-size: 16px;">Has dado el paso más importante para transformar tu forma de trabajar. Revisa los detalles de tu reserva y el siguiente paso para asegurar tu asistencia.</p>

              <h2 style="font-size: 20px; font-weight: 700; color: #ffffff; border-top: 1px solid #374151; padding-top: 24px; margin-top: 32px;">Detalles del Taller</h2>
              <p><strong>📅 Fecha:</strong> Viernes 01 Agosto</p>
              <p><strong>⏰ Horario:</strong> 20:00 - 20:45 (Hora Bolivia)</p>
              <p><strong>💻 Modalidad:</strong> Zoom en Vivo</p>

              <h2 style="font-size: 20px; font-weight: 700; color: #ffffff; border-top: 1px solid #374151; padding-top: 24px; margin-top: 32px;">Siguiente Paso: Pago</h2>
              <p style="font-size: 16px;">Nuestro equipo comercial se contactará contigo para coordinar el pago de los 79 BOB.</p>
              <p style="font-size: 16px;">Mientras tanto, ¡añade la fecha a tu calendario para que no se te pase!</p>

              <table width="100%" style="margin: 24px 0;">
                <tr>
                  <td align="center">
                    <a href="${calendarLink}" class="button" target="_blank" download>🗓️ Añadir a mi Calendario</a>
                  </td>
                </tr>
              </table>

              <p style="font-size: 14px; color: #9ca3af; background-color: #1f2937; padding: 12px; border-radius: 8px;">
                💡 <strong>Diagnóstico IA Personalizado:</strong> Como siguiente paso, te enviaremos en un correo separado el acceso a tu diagnóstico. ¡No te lo pierdas!
              </p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>¿Preguntas? <a href="mailto:ayuda@altiusignite.com">ayuda@altiusignite.com</a></p>
              <p>Recibiste este correo porque reservaste tu cupo en nuestro curso.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>`,
    });

    if (emailError) {
      console.error('Error en Resend (API Route):', emailError);
      throw new Error('Error al enviar el correo de confirmación.');
    }

    return NextResponse.json({ message: 'Registro y correo enviados con éxito' });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}