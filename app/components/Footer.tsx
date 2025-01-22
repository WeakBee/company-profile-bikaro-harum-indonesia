'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div id='footer' className='relative top-0 left-0 w-full flex justify-center overflow-hidden'>
        <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#06246C] rounded-t-3xl '></div>
        <div className="container mx-auto px-5 xl:px-20 text-white">
          <div className='w-full flex items-center justify-center pt-10'>
            <div className="logo">
              <Image
                src="/assets/logo-bikaro-harum-indonesia-icon-transparent.png" // Path ke gambar di folder public
                alt="Logo Bikaro Harum Indonesia"
                width={80} // Lebar gambar
                height={80} // Tinggi gambar
                priority
                className="w-12 mr-4"
              />
            </div>
            <h1 className='text-2xl md:text-4xl md:leading-[4.5rem] font-medium text-center'>BIKARO HARUM INDONESIA</h1>
          </div>
          <div className='w-full pt-14 flex justify-center items-start gap-4 text-sm font-medium leading-[2rem]'>
            <div className='w-1/5 flex'>
              <Image
                src="/assets/mdi_location.png" // Path ke gambar di folder public
                alt="Logo Bikaro Harum Indonesia"
                width={200} // Lebar gambar
                height={80} // Tinggi gambar
                priority
                className="w-3 h-5 mr-1 mt-1"
              />
              <p><Link target='_blank' href="https://maps.app.goo.gl/d8ad1nS2BrCpLcYa6">Jl. HR Rasuna Said, Karet Kuningan, Setiabudi Jakarta Selatan, DKI Jakarta, 12940</Link></p>
            </div>
            <div className='w-3/5 px-14'>
              <p>Temukan Kami</p>
              <div className="grid grid-cols-3 gap-2 leading-[1.5rem]">
                <Link href="/">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/shopee_icon.png" // Path ke gambar di folder public
                      alt="Logo Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Shopee</p>
                  </div>
                </Link>
                <Link href="/">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/instagram_icon.png" // Path ke gambar di folder public
                      alt="Logo Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Instagram</p>
                  </div>
                </Link>
                <Link href="/">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/email_icon.png" // Path ke gambar di folder public
                      alt="Logo Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Email</p>
                  </div>
                </Link>
                <Link href="/">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/tiktok_icon.png" // Path ke gambar di folder public
                      alt="Logo Bikaro Harum Indonesia"
                      width={200} // Lebar gambar
                      height={80} // Tinggi gambar
                      priority
                      className="w-4 h-4 mr-2"
                    />
                    <p>Tiktok</p>
                  </div>
                </Link>
                <Link href="/">
                  <div className='flex items-center'>
                    <Image
                      src="/assets/whatsapp_icon.png" // Path ke gambar di folder public
                      alt="Logo Bikaro Harum Indonesia"
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
            <div className='w-1/5'>
              <p><Link href="/">Produk Kami</Link></p>
              <p><Link href="/">Tentang Kami</Link></p>
              <p><Link href="/">Daftar Distributor</Link></p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center pt-16 pb-3'>
            <p className='text-xs font-medium text-center'>Copyright © 2025 CV Bikaro Harum Indonesia. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
