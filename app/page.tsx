import Image from 'next/image';

import { The_Nautigal } from "next/font/google";

// Import font The Nautigal
const theNautigal = The_Nautigal({
  subsets: ["latin"], // Gunakan subset Latin
  weight: ["700"], // Atur bobot font yang ingin digunakan
});

export default function Home() {
  return (
    <div>
      <div>
        <div className='relative top-0 left-0 w-full h-[39rem] flex justify-center'>
          <Image
            src="/assets/hero-bg.jpeg"
            alt="BG Hero"
            fill
            sizes="1000px, 1500px"
            style={{ objectFit: 'cover' }} 
            className='w-full h-full absolute top-0 left-0 -z-20 blur-[2px]'
          />
          <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#D3D3D3]/70 '></div>
          <div className="container mx-auto px-10 pt-20">
            <h1 className='text-4xl md:text-6xl md:leading-[4.5rem] font-medium text-center md:text-left md:w-3/4 mt-32'>Kesegaran, Kebersihan, dan Kualitas Terbaik dalam Satu <span className={`${theNautigal.className} text-5xl md:text-7xl`}> Genggaman</span></h1>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='relative top-0 left-0 w-full h-[39rem]'>
          <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#A8C7D9]'></div>
          <div className="container mx-auto flex justify-center items-center h-full">
            <h1 className='text-white w-1/2 text-center text-2xl px-4'>Kami hadir untuk memenuhi kebutuhan  kebersihan dan kesegaran keluarga Anda. Dengan produk-produk berkualitas kami berkomitmen memberikan solusi praktis dan terpercaya untuk rumah tangga modern.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
