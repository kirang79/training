import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, name, mobile, notes } = await req.json();
    if (!email || !name || !mobile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure transporter (use your SMTP or a test account)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "g.srikiran@gmail.com",
      subject: "New Course Registration Interest",
      text: `New registration interest received:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSpecial Requests: ${notes || "-"}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 