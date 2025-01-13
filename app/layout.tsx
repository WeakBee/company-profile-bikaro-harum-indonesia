import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { M_PLUS_1 } from "next/font/google";

// Import font M PLUS 1
const mPlus1 = M_PLUS_1({
  subsets: ["latin"], // Gunakan subset Latin
  weight: ["400", "500", "700"], // Sesuaikan dengan bobot yang diinginkan
});

export const metadata: Metadata = {
  title: "CV Bikaro Harum Indonesia",
  description: "Company Profile CV Bikaro Harum Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Terapkan font kelas untuk seluruh halaman */}
      <body className={`${mPlus1.className} antialiased`}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
