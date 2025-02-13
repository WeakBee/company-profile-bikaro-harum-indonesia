'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import { useState } from "react";

export default function TentangKami() {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        telepon: "",
        pesan: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null); // Reset message on new submission

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setMessage(data.success ? "Email terkirim!" : `Error: ${data.error}`);
            setFormData({ nama: "", email: "", telepon: "", pesan: "" });
        } catch (error) {
            console.log(error);
            setMessage("Terjadi kesalahan saat mengirim email.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <div id='hero' className='relative top-0 left-0 w-full flex justify-center overflow-hidden'>
                <img
                    src="/assets/bg-tentang-kami-hero.jpg"
                    alt="BG Hero"
                    className="w-full h-96"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div id='quotes' className='relative top-0 left-0 w-full flex justify-center items-center overflow-hidden'>
                <div className="container mx-auto px-5 xl:px-20 py-10 md:py-20 text-center md:text-start md:flex items-center gap-10">
                    <div className="md:w-1/2 mb-5 md:mb-0">
                        <p className="text-3xl md:text-4xl font-semibold">Pilihan terpercaya untuk keluarga anda</p>
                    </div>
                    <div className="md:w-1/2">
                        <p><b>CV Bikaro Harum Indonesia</b> adalah perusahaan yang  bergerak di bidang produk <b>pelembut pakaian, deterjen cair, pewangi pakaian, dan sabun cuci piring</b>, kami berkomitmen memberikan solusi praktis dan terpercaya untuk rumah tangga modern.</p>
                    </div>
                </div>
            </div>
            <div id='lokasi' className='relative top-0 left-0 w-full flex justify-center items-center'>
                <div className="container mx-auto px-5 xl:px-20 py-10 md:py-5 text-center md:text-start md:flex items-center gap-10">
                    <div className="md:w-1/2 mb-5 md:mb-0">
                        <p className="text-xl md:text-3xl font-semibold">Lokasi Perusahaan Kami</p>
                        <p className="text-xl md:text-2xl font-medium">Headquarters</p>
                        <p className="">KP. Jalan Bojong,</p>
                        <p className="">RT.11/RW.5,</p>
                        <p className="">Kampung Bojong,</p>
                        <p className="">Klapa Nunggal (Kelapa Nunggal)</p>
                        <br />
                        <p className="">Senin - Jumat (09.00 - 17.00)</p>
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=628568790783"><p className="">(+62) - 8568790783</p></a>
                        <a target='_blank' href="mailto:bikaroindonesia@gmail.com"><p>bikaroindonesia@gmail.com</p></a>

                    </div>
                    <div className="md:w-1/2 md:p-5">
                        <div className="map-container overflow-hidden rounded-xl shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1982.2886437441996!2d106.99720953818816!3d-6.448279533142318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjYnNTMuOCJTIDEwNsKwNTknNTQuNiJF!5e0!3m2!1sid!2sid!4v1739421361142!5m2!1sid!2sid"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id='hubungi-kami' className='relative top-0 left-0 w-full flex justify-center items-center mb-5'>
                <div className="container mx-auto px-5 xl:px-20 py-10 md:py-5 text-center md:text-start md:flex items-center gap-10">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <p className="text-xl md:text-3xl font-semibold mb-3">Hubungi Kami</p>
                        <p className="">Email, Whatsapp, atau Direct Message Social media
                        kami untuk informasi lebih lanjut.</p>
                        <br />
                        <div className='flex md:block justify-center'>
                            <div className='text-start'>
                                <a target='_blank' href="mailto:bikaroindonesia@gmail.com"><p>bikaroindonesia@gmail.com</p></a>
                                <a target='_blank' href="https://api.whatsapp.com/send?phone=628568790783">
                                    <div className='flex items-center'>
                                    <Image
                                        src="/assets/whatsapp_icon_blue.png" // Path ke gambar di folder public
                                        alt="Whatsapp Bikaro Harum Indonesia"
                                        width={80} // Lebar gambar
                                        height={80} // Tinggi gambar
                                        priority
                                        className="w-5 h-5 mr-2"
                                    />
                                    <p>(+62) - 8568790783</p>
                                    </div>
                                </a>
                                <a target='_blank' href="https://www.instagram.com/bikaro.official">
                                    <div className='flex items-center'>
                                    <Image
                                        src="/assets/instagram_icon_blue.png" // Path ke gambar di folder public
                                        alt="Instagram Bikaro Harum Indonesia"
                                        width={80} // Lebar gambar
                                        height={80} // Tinggi gambar
                                        priority
                                        className="w-5 h-5 mr-2"
                                    />
                                    <p>@bikaro.official</p>
                                    </div>
                                </a>
                                <a target='_blank' href="https://id.shp.ee/WXuyDSC">
                                    <div className='flex items-center'>
                                    <Image
                                        src="/assets/shopee_icon_blue.png" // Path ke gambar di folder public
                                        alt="Shopee Bikaro Harum Indonesia"
                                        width={80} // Lebar gambar
                                        height={80} // Tinggi gambar
                                        priority
                                        className="w-5 h-5 mr-2"
                                    />
                                    <p>Fresh Mist</p>
                                    </div>
                                </a>
                                <a target='_blank' href="https://www.tiktok.com/@bikaro.indonesia">
                                    <div className='flex items-center'>
                                    <Image
                                        src="/assets/tiktok_icon_blue.png" // Path ke gambar di folder public
                                        alt="Tiktok Bikaro Harum Indonesia"
                                        width={80} // Lebar gambar
                                        height={80} // Tinggi gambar
                                        priority
                                        className="w-5 h-5 mr-2"
                                    />
                                    <p>@bikaro.indonesia</p>
                                    </div>
                                </a>
                                <a target='_blank' href="https://www.tiktok.com/@freshmist.official">
                                    <div className='flex items-center'>
                                    <Image
                                        src="/assets/tiktok_icon_blue.png" // Path ke gambar di folder public
                                        alt="Tiktok Bikaro Harum Indonesia"
                                        width={80} // Lebar gambar
                                        height={80} // Tinggi gambar
                                        priority
                                        className="w-5 h-5 mr-2"
                                    />
                                    <p>@freshmist.official</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pr-5">
                        <div className="bg-[#06246C] rounded-xl px-4 md:px-10 py-5">
                            <p className="font-bold text-2xl mb-5 text-white">Kirim Kami Pesan</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg"
                                    type="text"
                                    placeholder="Nama"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg"
                                    type="text"
                                    placeholder="No Telepon"
                                    name="telepon"
                                    value={formData.telepon}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    rows={4}
                                    className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg"
                                    placeholder="Apa yang bisa kami bantu?"
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg px-4 py-3 mb-3 bg-white border border-white font-bold cursor-pointer flex items-center justify-center shadow-lg hover:bg-transparent hover:text-white"
                                    disabled={loading}
                                >
                                    {loading ? "Mengirim..." : "Kirim"}
                                    <i className="bi bi-send-fill font-bold ml-2"></i>
                                </button>
                            </form>
                            {message && <p className="text-white mt-3">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
