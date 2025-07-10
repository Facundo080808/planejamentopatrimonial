import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, interest, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'contact@fhilaw.com',
      to: email, 
      subject: `Nova solicitação de consultoria: ${name}`,
      html: `
        <h3>Nova mensagem recebida via formulário</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || '-'}</p>
        <p><strong>Área de interesse:</strong> ${interest}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message || '(nenhuma)'}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
