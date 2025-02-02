'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import { useEffect } from "react";
import { gsap } from "gsap";

const AllAnimation = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {  
        const ctx = gsap.from(".hero-text-animation", {
          opacity:0,
          y:200,
          duration:1.3
        });

        return () => {
          ctx.revert(); // Bersihkan animasi saat komponen di-unmount
        };
    }
  }, []);

  return null;
};

export default function DaftarDistributor() {
    return (
        <div>
            <div id='hero' className='relative top-0 left-0 w-full h-screen md:h-[28rem] flex bg-[#E9ECFF] justify-center overflow-hidden'>
            <div className="container mx-auto px-5 xl:px-20 pt-10 text-black md:flex justify-center">
                <div className='md:w-1/2'>
                    <h1 className='hero-text-animation text-3xl md:text-5xl md:leading-[4rem] font-medium text-center md:text-left mt-32'>Daftar jadi <span className='text-[#06246C]'>Distributor</span> <br /> dan dapatkan <br /> penawaran <span className='text-[#06246C]'>khusus</span></h1>
                </div>
                <div className='min-h-96 md:w-1/2 relative'>
                    <img
                        src="/assets/daftar_distributor_hero_image.png"
                        alt="daftar distributor hero"
                        className="w-full h-full absolute left-0 top-5 scale-[115%] md:scale-[120%] rotate-[1deg]"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            </div>
            <div id='distributor' className='relative top-0 left-0 w-full overflow-hidden'>
                <div className="container mx-auto px-5 xl:px-20 pt-20 pb-5 text-center">
                    <p className='text-4xl font-bold'>Distributor Kami</p>
                </div>
                <div className="container mx-auto px-5 xl:px-20 py-10">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
                        <div className='border border-[#D9D9D9] rounded-xl px-4 py-5 text-black '>
                            <div className='h-[15rem] w-full overflow-hidden rounded-lg group shadow-lg'>
                                <img className='h-full w-full object-cover group-hover:scale-125 transition' src="/assets/sumatera-barat.png" alt="Peta Sumatera Barat" />
                            </div>
                            <p className='text-medium text-2xl'>Sumatera Barat</p>
                            <div className='md:h-14' >
                            </div>
                            <Link href="https://api.whatsapp.com/send?phone=6285278015851" className='bg-[#10BB00] flex gap-2 items-center justify-center text-white py-2 my-4 rounded-md transition-all hover:bg-white border border-[#10BB00] hover:text-[#10BB00]'>
                                <i className="bi bi-whatsapp font-bold ml-2"></i>  
                                <p>Hubungi via Whatsapp</p>
                            </Link>
                            <p className='text-sm text-justify'>Kampung Lalang jorong bukit Malintang Nagari alahan mati kecamatan Simpang alahan mati kabupaten pasaman provinsi Sumatera Barat</p>
                        </div>
                        <div className='border border-[#D9D9D9] rounded-xl px-4 py-5 text-black '>
                            <div className='h-[15rem] w-full overflow-hidden rounded-lg group shadow-lg'>
                                <img className='h-full w-full object-cover group-hover:scale-125 transition' src="/assets/kabupaten-tangerang.png" alt="Peta Sumatera Barat" />
                            </div>
                            <p className='text-medium text-2xl mb-2'>Kabupaten Tangerang</p>
                            
                            <div className='' >
                                <a className='flex items-center text-sm' target='_blank' href="https://id.shp.ee/WXuyDSC"><img className='w-6 hover:scale-110 transition mr-2' src="/assets/shopee_shop_icon.png" alt="Shopee Icon" /> Toko Khanza17</a>
                                <a className='flex items-center text-sm' target='_blank' href="https://www.tiktok.com/@freshmist.official"><img className='w-6 hover:scale-110 transition mr-2' src="/assets/tiktok_shop_icon.png" alt="Tiktok Shop Icon" /> Toko.Khanza17</a>
                            </div>
                            <Link href="https://api.whatsapp.com/send?phone=628888372371" className='bg-[#10BB00] flex gap-2 items-center justify-center text-white py-2 my-4 rounded-md transition-all hover:bg-white border border-[#10BB00] hover:text-[#10BB00]'>
                                <i className="bi bi-whatsapp font-bold ml-2"></i>    
                                <p>Hubungi via Whatsapp</p>
                            </Link>
                            <p className='text-sm text-justify'>Perum Taman Laguna Blok LC 06 RT 010 / RW 002 Desa Sukaharja Kec. Sindang Jaya Kab. Tangerang. 15560</p>
                        </div>
                        <div className='border border-[#D9D9D9] rounded-xl px-4 py-5 text-black '>
                            <div className='h-[15rem] w-full overflow-hidden rounded-lg group shadow-lg'>
                                <img className='h-full w-full object-cover group-hover:scale-125 transition' src="/assets/jakarta-barat.png" alt="Peta Sumatera Barat" />
                            </div>
                            <p className='text-medium text-2xl mb-2'>Jakarta Barat</p>
                            <div className='' >
                                <a className='flex items-center text-sm' target='_blank' href="https://id.shp.ee/WXuyDSC"><img className='w-6 hover:scale-110 transition mr-2' src="/assets/shopee_shop_icon.png" alt="Shopee Icon" /> zaima store </a>
                                <a className='flex items-center text-sm' target='_blank' href="https://www.tiktok.com/@freshmist.official"><img className='w-6 hover:scale-110 transition mr-2' src="/assets/lazada_shop_icon.png" alt="Lazada Shop Icon" /> zaima store</a>
                            </div>
                            <Link href="https://api.whatsapp.com/send?phone=6287885405383" className='bg-[#10BB00] flex gap-2 items-center justify-center text-white py-2 my-4 rounded-md transition-all hover:bg-white border border-[#10BB00] hover:text-[#10BB00]'>
                                <i className="bi bi-whatsapp font-bold ml-2"></i>    
                                <p>Hubungi via Whatsapp</p>
                            </Link>
                            <p className='text-sm text-justify'>Kp. Baru Simpang 3 No.120 RT.005 RW.08 Kel. Pegadungan Kec. Kalideres, Jakarta Barat Kode Pos : 11830</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='bergabung-distributor' className='relative w-full md:h-[32rem] overflow-hidden'>
                <img src="/assets/bg-daftar-distributor.png" className='absolute left-0 top-0 z-1 w-full h-full object-cover' alt="Background" />
                <div className="container mx-auto px-5 xl:px-20 pt-8 md:pt-20 pb-8 text-center relative">
                    <div className='md:flex'>
                        <div className='md:w-1/2 mb-10 md:mb-0 px-10 flex justify-center items-center'>
                            <img src="/assets/image-daftar-distributor.png" className='md:h-96 object-containS' alt="Daftar Distributor" />
                        </div>
                        <div className='md:w-1/2 flex flex-col justify-center items-center md:items-start md:text-start font-bold'>
                            <p className='text-4xl mb-4'>Ingin Bergabung Menjadi Distributor ?</p>
                            <a href='https://api.whatsapp.com/send?phone=628568790783'>
                                <div className='bg-[#06246C] text-center text-white w-auto px-5 py-2 rounded-md shadow-lg border-2 border-[#06246C] hover:text-[#06246C] hover:bg-transparent'>
                                    Hubungi Kami
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='gallery' className='relative w-full overflow-hidden'>
                <div className="container mx-auto px-5 xl:px-20 pt-8 md:pt-20 pb-20 text-center relative">
                    <p className='text-3xl font-bold md:text-start mb-10'>Gallery</p>
                    <div className='flex gap-5'>
                        <div className='w-1/2 md:w-1/3'>
                            <Link href="/assets/gallery/1.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/1.jpg" alt="" /></Link>
                            <Link href="/assets/gallery/4.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/4.jpg" alt="" /></Link>
                            <Link href="/assets/gallery/3.jpg" target='_blank'><img className='w-full rounded-lg mb-5 block md:hidden' src="/assets/gallery/3.jpg" alt="" /></Link>
                        </div>
                        <div className='w-1/2 md:w-1/3'>
                            <Link href="/assets/gallery/2.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/2.jpg" alt="" /></Link>
                            <Link href="/assets/gallery/5.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/5.jpg" alt="" /></Link>
                            <Link href="/assets/gallery/7.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/7.jpg" alt="" /></Link>
                            <Link href="/assets/gallery/6.jpg" target='_blank'><img className='w-full rounded-lg mb-5 block md:hidden' src="/assets/gallery/6.jpg" alt="" /></Link>   
                        </div>
                        <div className='hidden md:block md:w-1/3'>
                            <Link href="/assets/gallery/3.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/3.jpg" alt="" /></Link>
                            <Link href="/assets/gallery/6.jpg" target='_blank'><img className='w-full rounded-lg mb-5' src="/assets/gallery/6.jpg" alt="" /></Link>                        
                        </div>
                    </div>
                </div>
            </div>
            <AllAnimation />
        </div>
    );
}
