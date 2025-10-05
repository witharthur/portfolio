import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  const { firstName, lastName, email, message } = req.body ?? {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const to = process.env.CONTACT_TO;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const text = `New contact submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

  // If SMTP config is missing, accept but do not send email.
  if (!to || !host || !port || !user || !pass) {
    console.warn("CONTACT: SMTP env not fully configured. Logging submission only.", { firstName, lastName, email });
    return res.status(202).json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      to,
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: email,
      text,
    });

    return res.status(200).json({ ok: true, delivered: true });
  } catch (err) {
    console.error("CONTACT: failed to send email", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
