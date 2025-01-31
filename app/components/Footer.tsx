'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div id='footer' className='relative top-0 left-0 w-full flex justify-center overflow-hidden'>
        <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#06246C] rounded-t-3xl '></div>
        <div className="container mx-auto px-5 xl:px-20 text-white">
          <div className='w-full flex flex-col md:flex-row items-center justify-center pt-10'>
            <div className="logo">
              <Image
                src="/assets/logo-bikaro-harum-indonesia-icon-transparent.png" // Path ke gambar di folder public
                alt="Logo Bikaro Harum Indonesia"
                width={80} // Lebar gambar
                height={80} // Tinggi gambar
                priority
                className="w-12 md:mr-4"
              />
            </div>
            <h1 className='text-2xl md:text-4xl md:leading-[4.5rem] font-medium text-center'>BIKARO HARUM INDONESIA</h1>
          </div>
          <div className='w-full pt-4 md:pt-14 flex flex-col md:flex-row items-center md:justify-center md:items-start gap-4 text-sm font-medium leading-[2rem] text-center md:text-left'>
            <div className='md:w-1/5 flex flex-col md:flex-row items-center md:items-start'>
              <Image
                src="/assets/mdi_location.png" // Path ke gambar di folder public
                alt="Google Maps Location Bikaro Harum Indonesia"
                width={200} // Lebar gambar
                height={80} // Tinggi gambar
                priority
                className="w-3 h-5 md:mr-1 mt-1"
              />
              <p><Link className="hover:underline" target='_blank' href="https://maps.app.goo.gl/5LHQSdCBbfZ24ZQ77">KP. Jalan Bojong, RT.11/RW.5, Kampung Bojong, Klapa Nunggal (Kelapa Nunggal)</Link></p>
            </div>
            <div className='md:w-3/5 px-14'>
              <p>Temukan Kami</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 leading-[1.5rem]">
                <Link target='_blank' href="https://id.shp.ee/WXuyDSC" className="hover:underline">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/shopee_icon.png" // Path ke gambar di folder public
                      alt="Shopee Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Shopee</p>
                  </div>
                </Link>
                <Link target='_blank' href="https://www.instagram.com/bikaro.official" className="hover:underline">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/instagram_icon.png" // Path ke gambar di folder public
                      alt="Instagram Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Instagram</p>
                  </div>
                </Link>
                <Link target='_blank' href="mailto:bikaroindonesia@gmail.com" className="hover:underline">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/email_icon.png" // Path ke gambar di folder public
                      alt="Email Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Email</p>
                  </div>
                </Link>
                <Link target='_blank' href="https://www.tiktok.com/@bikaro.indonesia" className="hover:underline">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/tiktok_icon.png" // Path ke gambar di folder public
                      alt="Tiktok Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Tiktok</p>
                  </div>
                </Link>
                <Link target='_blank' href="https://api.whatsapp.com/send?phone=628568790783" className="hover:underline">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/whatsapp_icon.png" // Path ke gambar di folder public
                      alt="Whatsapp Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Whatsapp</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className='md:w-1/5'>
              <p><Link className="hover:underline" href="/product">Produk Kami</Link></p>
              <p><Link className="hover:underline" href="/tentang-kami">Tentang Kami</Link></p>
              <p><Link className="hover:underline" href="/daftar-distributor">Daftar Distributor</Link></p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center pt-4 md:pt-16 pb-3'>
            <p className='text-xs font-medium text-center'>Copyright © 2025 CV Bikaro Harum Indonesia. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
