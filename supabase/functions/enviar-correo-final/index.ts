// supabase/functions/enviar-correo-final/index.ts
// v1.3 - Corrección final del enlace de calendario

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { Resend } from 'npm:resend';

const resend = new Resend(Deno.env.get('RESEND_API_KEY' )!);

interface Inscripcion {
  id: string;
  nombre: string;
  profesion: string;
  email: string;
  acepta: boolean;
  creado_en: string;
}

serve(async (req) => {
  // Manejo de la solicitud OPTIONS (pre-flight) para CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' } });
  }

  console.log("Función 'enviar-correo-final' v1.3 iniciada.");

  try {
    const { record } = await req.json();
    const inscripcion: Inscripcion = record;
    const { nombre, email } = inscripcion;

    console.log(`Procesando inscripción para: ${nombre} (${email})`);

    // ¡ENLACE DE CALENDARIO CORREGIDO Y FUNCIONAL!
    const calendarLink = "https://calndr.link/d/event?start=2025-08-01T20:00&end=2025-08-01T20:45&title=Taller%20de%20IA%20Pr%C3%A1ctica&description=Taller%20pr%C3%A1ctico%20para%20dominar%20herramientas%20de%20IA.%20El%20enlace%20de%20Zoom%20se%20enviar%C3%A1%20antes%20del%20evento.&location=Zoom%20(Enlace%20se%20enviar%C3%A1%20por%20correo )&timezone=America/La_Paz";

    const { data, error } = await resend.emails.send({
      from: 'Curso IA <onboarding@resend.dev>',
      to: [email],
      subject: '🚀 ¡Cupo pre-reservado! Estás a un paso de unirte al curso de IA',
      html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; background-color: #f8f9fa; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e9ecef; }
          .header { padding: 40px; text-align: center; background-image: url('https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1170&auto=format&fit=crop' ); background-size: cover; background-position: center; }
          .header h1 { margin: 0; color: #ffffff; font-size: 32px; font-weight: 900; text-shadow: 2px 2px 8px rgba(0,0,0,0.6); }
          .header h1 span { background: linear-gradient(45deg, #06b6d4, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent; }
          .header p { color: #e5e7eb; font-size: 18px; margin-top: 10px; }
          .content { padding: 30px; color: #495057; line-height: 1.6; }
          .content h2 { color: #212529; font-size: 24px; margin-bottom: 15px; }
          .details-box { background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 25px 0; }
          .details-box p { margin: 10px 0; font-size: 16px; }
          .details-box strong { color: #343a40; }
          .payment-box { background-color: #fffbeb; border: 1px solid #fde68a; border-left: 5px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 25px 0; }
          .footer { text-align: center; padding: 30px; font-size: 14px; color: #6c757d; background-color: #f1f3f5; }
          .button-container { text-align: center; margin: 30px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>¡Tu cupo está <span>pre-reservado!</span></h1>
            <p>Hola ${nombre}, ¡qué emoción tenerte a bordo!</p>
          </div>
          <div class="content">
            <h2>Estás a un solo paso de dominar la IA Práctica</h2>
            <p>Has dado el paso más importante para transformar tu forma de trabajar. Revisa los detalles de tu pre-reserva y el siguiente paso para confirmar tu asistencia.</p>
            
            <div class="details-box">
              <h3 style="margin-top:0; color:#06b6d4;">DETALLES DEL TALLER</h3>
              <p><strong>🗓️ Fecha:</strong> Viernes 01 Agosto</p>
              <p><strong>⏰ Horario:</strong> 20:00 - 20:45 (Hora Bolivia)</p>
              <p><strong>💻 Modalidad:</strong> Zoom en Vivo</p>
            </div>

            <div class="payment-box">
              <h3 style="margin-top:0; color:#d97706;">Siguiente Paso: Confirmar tu Pago</h3>
              <p>Para asegurar tu lugar definitivamente, nuestro <strong>equipo comercial se contactará contigo</strong> en las próximas horas para coordinar el pago de los <strong>79 BOB</strong>.</p>
            </div>

            <p>Mientras tanto... ¡añade la fecha a tu calendario para que no se te pase!</p>
            
            <div class="button-container">
              <a href="${calendarLink}"
                 style="background-color: #06b6d4; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px;"
                 target="_blank">
                🗓️ Añadir a mi Calendario
              </a>
            </div>
          </div>
          <div class="footer">
            <p>Si tienes alguna pregunta, no dudes en escribir a <a href="mailto:ayuda@altiusignite.com" style="color:#06b6d4;">ayuda@altiusignite.com</a>.</p>
            <p>&copy; ${new Date().getFullYear()} Hugo Consultor. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
      `,
    });

    if (error) {
      console.error('Error al enviar email con Resend:', error);
      throw new Error(error.message);
    }

    console.log(`Correo enviado exitosamente a ${email}. ID de Resend: ${data?.id}`);
    
    return new Response(
      JSON.stringify({ message: `Correo enviado a ${email}` }),
      { headers: { 'Content-Type': 'application/json' }, status: 200 }
    );

  } catch (error) {
    console.error('Error fatal en la Edge Function:', error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
