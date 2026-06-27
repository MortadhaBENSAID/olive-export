import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "Olive Export Website",
    to: process.env.EMAIL_USER,
    subject: "New Export Request",
    text: `
Company: ${body.company}
Country: ${body.country}
Email: ${body.email}
Volume: ${body.volume}
Message: ${body.message}
    `,
  });

  return Response.json({ ok: true });
}