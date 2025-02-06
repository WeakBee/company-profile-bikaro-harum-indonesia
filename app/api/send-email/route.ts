import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nama, email, telepon, pesan } = await req.json();

    // Konfigurasi transport SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ichwanulmuslim9h@gmail.com", // Ganti dengan Gmail kamu
        pass: "cszw jgyk bhpz vthe", // Masukkan App Password dari Google
      },
    });

    // Kirim email
    const mailOptions = {
      from: "ichwanulmuslim9h@gmail.com", // Pengirim
      to: "projectichwan@gmail.com", // Ganti dengan penerima yang sesuai
      subject: `[Kirim Pesan] Website CV Bikaro Harum Indonesia - ${nama}`,
      text: `Nama: ${nama}\nEmail: ${email}\nTelepon: ${telepon}\nPesan: ${pesan}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: unknown) {  // Menentukan tipe error
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ success: false, error: "Unknown error occurred" }, { status: 500 });
    }
  }
}
