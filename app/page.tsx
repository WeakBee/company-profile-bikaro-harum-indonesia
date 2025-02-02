"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { The_Nautigal } from "next/font/google";
import Link from "next/link";

// Import font The Nautigal
const theNautigal = The_Nautigal({
  subsets: ["latin"], // Gunakan subset Latin
  weight: ["700"], // Atur bobot font yang ingin digunakan
});

const AllAnimation = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Reset ScrollTrigger sebelum membuat animasi baru
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.registerPlugin(ScrollTrigger, Draggable);
        gsap.registerEffect({
          name: "counter",
          extendTimeline: true,
          defaults: {
            end: 0,
            duration: 0.5,
            ease: "power1",
            increment: 1,
            scrollTrigger: null, // Default to null
          },
          effect: (targets: gsap.TweenTarget, config: { duration: number; end: number; increment: number; ease: string; scrollTrigger?: ScrollTrigger }) => {
            const tl = gsap.timeline({
              scrollTrigger: config.scrollTrigger || undefined, // Attach ScrollTrigger if provided
            });

            const element = targets as HTMLElement;

            // Parse the initial number from the element's innerText
            const num = element.innerText;
            element.innerText = num;

            tl.to(
              targets,
              {
                duration: config.duration,
                innerText: config.end,
                modifiers: {
                  innerText: (innerText: string) => {
                    return gsap.utils.snap(config.increment, parseFloat(innerText))
                      .toFixed(0) // Ensure it's an integer
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format with commas
                  },
                },
                ease: config.ease,
              },
              0
            );

            return tl;
          },
        });
        
        gsap.from(".hero-text-animation ", {
          opacity:0,
          y:200,
          duration:1.3
        });
        gsap.to(".parallax-hero", {
          scale: 1.1, 
          y: 300, 
          delay:5, 
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
        
        gsap.from(".motto-text-animation", {
          opacity:0,
          y:200,
          duration:1.3,
          scrollTrigger: {
            trigger: "#motto",
            start: "20% 80%",
            end: "20% 80%",
            toggleActions: "restart none reset reset"
          }
        });
        gsap.from(".parallax-motto-1", {
          x: -250, 
          opacity:0, 
          rotate: 180,
          yoyo: true,
          duration:1.1,
          scrollTrigger: {
            trigger: "#motto",
            start: "70% bottom",
            end: "70% bottom",
            toggleActions: "restart none reset reset"
          }
        });
        gsap.from(".parallax-motto-2", {
          x: 250, 
          opacity:0, 
          rotate: 180,
          yoyo: true,
          duration:1.1,
          scrollTrigger: {
            trigger: "#motto",
            start: "20% 80%",
            end: "20% 80%",
            toggleActions: "restart none reset reset"
          }
        });
        gsap.from(".image-scale-animation-1", {
          scale:1.5,
          duration:1.3,
          scrollTrigger: {
            trigger: ".image-scale-animation-1",
            start: "20% bottom",
            end: "20% bottom",
            toggleActions: "restart none reset reset"
          }
        });
        gsap.from(".text-aos-animation-1", {
          y:100,
          opacity:0, 
          duration:1.3,
          scrollTrigger: {
            trigger: ".text-aos-animation-1",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "restart none reset reset",
          }
        });
        gsap.from(".image-scale-animation-2", {
          scale:1.5,
          duration:1.3,
          scrollTrigger: {
            trigger: ".image-scale-animation-2",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "restart none reset reset",
          }
        });
        gsap.from(".image-scale-animation-3", {
          scale:1.5,
          duration:1.3,
          scrollTrigger: {
            trigger: ".image-scale-animation-3",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "restart none reset reset",
          }
        });
        gsap.from(".image-scale-animation-4", {
          scale:1.5,
          duration:1.3,
          scrollTrigger: {
            trigger: ".image-scale-animation-4",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "restart none reset reset",
          }
        });
        gsap.from(".text-aos-animation-2", {
          y:100,
          opacity:0, 
          duration:1.3,
          scrollTrigger: {
            trigger: ".text-aos-animation-2",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "restart none reset reset",
          }
        });
        gsap.from(".text-aos-animation-3", {
          y:100,
          opacity:0, 
          duration:1.3,
          scrollTrigger: {
            trigger: ".text-aos-animation-3",
            start: "top 70%",
            end: "top 70%",
            toggleActions: "restart none reset reset",
          }
        });        
        gsap.effects.counter(".moving-number", {
          end: 400000,
          duration: 2,
          increment: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#produk-terjual",
            start: "top 70%",
            end: "top 70%",
            toggleActions: "restart none reset reset",
          }
        });          
        gsap.from(".group-gelembung-1", {
          y: 200, 
          scrollTrigger: {
            trigger: "#produk-kami",
            start: "30% bottom",
            end: "110% bottom",
            scrub: true
          }
        });       
        gsap.from(".group-gelembung-2", {
          y: 200, 
          scrollTrigger: {
            trigger: "#produk-kami",
            start: "65% bottom",
            end: "140% bottom",
            scrub: true
          }
        });       
        gsap.from(".group-gelembung-3", {
          y: 200, 
          scrollTrigger: {
            trigger: "#produk-kami",
            start: "65% bottom",
            end: "140% bottom",
            scrub: true
          }
        });
        gsap.from(".parallax-peta", {
          scale: 1.4,
          y: -50, 
          rotate:-10,
          duration:1.4,
          scrollTrigger: {
            trigger: "#produk-terjual",
            start: "top bottom",
            end: "top bottom",
            toggleActions: "restart none reset reset",
          }
        });
        Draggable.create(".draggable-slide", {
          type: "x",
          bounds: ".draggable-container"
        });

        // Refresh ScrollTrigger setelah membuat animasi baru
        ScrollTrigger.refresh();
      });

      return () => {
        ctx.revert(); // Bersihkan animasi saat komponen di-unmount
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Hapus semua ScrollTrigger
      };
    }
  }, []);

  return null;
};

const cards = [
  {
    name: "A**a",
    time: "9.00 AM - Jan, 2025",
    stars: 5,
    testimonial: "Paket pengharumnya sangat wangi bener - bener wangi serasa ditempat laundry, disemprotin ke lemari juga biar wangi, makasih ya, next order lg yg varian lain",
  },
  {
    name: "L**y",
    time: "10.00 AM - Feb, 2025",
    stars: 5,
    testimonial: "Wangi segar,pengemasannya baik, pengirimannya cepat sekali pesan kemarin, hari ini sudah tiba.",
  },
  {
    name: "M**a",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Wanginya enak banget pengiriman cepat aman tidak ada yg bocor harga murah.",
  },
  {
    name: "D**e",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Wanginya enak banget, rekomendasi seller dan produk sukses selalu.",
  },
  {
    name: "A**u",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Wangi ok ya smg lembut bantu biar baju g kusut hahaha.",
  },
  {
    name: "c**a",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Paket pewangi udh sampai wanginya enak, blum sy coba buat gosok mudhan tahan lama kayak di londri, toko nya amanah, bang kurir baik sopan udh langganan.",
  },
  {
    name: "R**S",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Alhamdulillah bagus, wanginya kalem, lumayan buat stock slma suka nyetrika, jd semanga buat nyetrika.",
  },
];

const TestimonialCards = () => {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="card-space px-5">
          <div className="card w-96 h-44 bg-gradient-to-b from-[#EEF4FE] to-[#FFFFFF] shadow-lg rounded-xl px-5 py-3 border-4 border-[#CED4DC]">
            <div className="flex items-center mb-3">
              <div className="w-1/5 pr-5">
                <img className="rounded-full w-full" src="/assets/reviewer-invert.png" alt={card.name} />
              </div>
              <div className="w-3/5">
                <p className="font-bold text-md">{card.name}</p>
                <p className="text-sm">{card.time}</p>
              </div>
              <div className="flex justify-end items-start w-1/5">
                {Array.from({ length: card.stars }).map((_, starIndex) => (
                  <img key={starIndex} className="w-3" src="/assets/star.png" alt="Star" />
                ))}
              </div>
            </div>
            <div>
              <p className="line-clamp-4 text-sm">&quot;{card.testimonial}&quot;</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const cards2 = [
  {
    name: "F**a",
    time: "9.00 AM - Jan, 2025",
    stars: 5,
    testimonial: "Aromanya soft, elegan dan tidak eneg kayak bau minyak wangi ntah itu merk lain",
  },
  {
    name: "u**7 N**l**h",
    time: "10.00 AM - Feb, 2025",
    stars: 5,
    testimonial: "YaAllah wanginya lembut, sy suka apa lg yg sakura, wanginya lembut bgt.",
  },
  {
    name: "G**g K**s K**i",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Trimaksih paket nya sudah sampai, Wangi segerr saya syka. Pengiriman cepet bangtz. pesen kemarin hari ini sampai.",
  },
  {
    name: "m**",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Asli, pas unboxing lgs harum bgt ga ngerti deg mw ngomong apa & ni pertama x beli next bli aroma lainnya krn kepo kek mna harumnya mna murah bgt tapi ga murahan wanginya, sukses selalu ya seller & kurir.",
  },
  {
    name: "L**y",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Wangi segar, pengemasannya baik, pengirimannya cepat sekali pesan kemarin, hari ini sudah tiba.",
  },
  {
    name: "M**a",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Wanginya enak banget pengiriman cepat aman tidak ada yg bocor harga murah.",
  },
  {
    name: "D**e",
    time: "8.30 AM - Mar, 2025",
    stars: 5,
    testimonial: "Wanginya enak banget, rekomendasi seller dan produk sukses selalu Tuhan Yesis Kristus memberkati berlimpah.",
  },
];

const TestimonialCards2 = () => {
  return (
    <>
      {cards2.map((card, index) => (
        <div key={index} className="card-space px-5">
          <div className="card w-96 h-44 bg-gradient-to-b from-[#EEF4FE] to-[#FFFFFF] shadow-lg rounded-xl px-5 py-3 border-4 border-[#CED4DC]">
            <div className="flex items-center mb-3">
              <div className="w-1/5 pr-5">
                <img className="rounded-full w-full" src="/assets/reviewer-invert.png" alt={card.name} />
              </div>
              <div className="w-3/5">
                <p className="font-bold text-md">{card.name}</p>
                <p className="text-sm">{card.time}</p>
              </div>
              <div className="flex justify-end items-start w-1/5">
                {Array.from({ length: card.stars }).map((_, starIndex) => (
                  <img key={starIndex} className="w-3" src="/assets/star.png" alt="Star" />
                ))}
              </div>
            </div>
            <div>
              <p className="line-clamp-4 text-sm">&quot;{card.testimonial}&quot;</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default function Home() {
  return (
    <div>
      <div id='hero' className='relative top-0 left-0 w-full h-screen md:h-[41rem] flex justify-center overflow-hidden'>
        <img
          src="/assets/bg-hero.png"
          alt="BG Hero"
          className="w-full h-full absolute -top-0 left-0 -z-20 blur-[2px] parallax-hero"
          style={{ objectFit: "cover" }}
        />
        <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#D3D3D3]/70 '></div>
        <div className="container mx-auto px-5 xl:px-20 pt-20">
          <h1 className='hero-text-animation text-4xl md:text-6xl leading-[3rem] md:leading-[4.5rem] font-medium text-center md:text-left mt-32'>Kesegaran, Kebersihan,<br className="hidden md:block"/> dan Kualitas Terbaik<br className="hidden md:block" /> dalam Satu <span className={`${theNautigal.className} text-5xl md:text-7xl`}> Genggaman</span></h1>
        </div>
      </div>

      <div id='motto' className="relative h-screen md:h-auto bg-[#A8C7D9] overflow-hidden">
        <img
          src="/assets/ranting.png"
          alt="Ranting Pohon Melingkar"
          className="w-40 h-40 md:w-80 md:h-80 absolute bottom-10 left-0 parallax-motto-1"
          style={{ objectFit: "cover" }}
        />
        <img
          src="/assets/ranting.png"
          alt="Ranting Pohon Melingkar"
          className="w-40 h-40 md:w-80 md:h-80 absolute top-16 right-0 parallax-motto-2"
          style={{ objectFit: "cover" }}
        />
        <div className='relative top-0 left-0 w-full h-[41rem]'>
          <div className="container mx-auto flex justify-center items-center h-full">
            <h1 className='motto-text-animation text-white md:w-2/3 md:leading-[2.6rem] text-center text-xl md:text-3xl px-4'>Kami hadir untuk memenuhi kebutuhan kebersihan dan kesegaran keluarga Anda. Dengan produk-produk berkualitas kami berkomitmen memberikan solusi praktis dan terpercaya untuk rumah tangga modern.</h1>
          </div>
        </div>
      </div>
      
      <div id='special' className="relative bg-white overflow-hidden">
        <div className='relative top-0 left-0 w-full'>
          <div className="container relative mx-auto h-full px-0 xl:px-20 pt-10 pb-[7rem]">
            <h1 className='ml-2 text-2xl md:text-6xl md:leading-[5.5rem] font-semibold'>Apa yang spesial dari</h1>
            <h1 className='ml-2 text-2xl md:text-6xl md:leading-[5.5rem] font-semibold'>produk kami?</h1>
            
            <div className="relative mt-10">
              <div className="w-2/3 md:w-[37rem] md:h-[37rem] overflow-hidden">
                <img
                  src="/assets/special-1.png"
                  alt="Baju Putih"
                  className="w-full h-full image-scale-animation-1"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="absolute -top-[15rem] md:top-[8rem] right-0 md:right-10 z-10 w-full flex justify-end pt-96 text-aos-animation-1">
                <div className="bg-white shadow-[0_0_35px_rgba(0,0,0,0.25)] p-7 md:p-10 w-2/3 md:w-1/2">
                  <p className="text-lg md:text-xl">Cegah kotoran menempel kembali ke serat pakaian, anti bacterial, menghilangkan noda membandel, menjadikan pakaian bersih dan wangi</p>
                </div>
              </div>
            </div>
            
            <div className="relative mt-[15rem] md:mt-[10rem]">
              <div className="flex justify-end w-full">
                <div className="w-2/3 md:w-[42rem] md:h-[42rem] overflow-hidden">
                  <img
                    src="/assets/special-2.png"
                    alt="Setrika"
                    className="w-full h-full image-scale-animation-2"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="absolute -top-[15rem] md:top-[0.5rem] left-0 md:left-[7rem] z-10 w-full pt-96 text-aos-animation-2">
                <div className="bg-white shadow-[0_0_35px_rgba(0,0,0,0.25)] px-7 md:px-10 py-10 md:py-20 w-2/3 md:w-1/3">
                  <p className="text-xl">Dengan pelicin tanpa kandungan alkohol</p>
                </div>
              </div>
            </div>
            
            <div className="relative mt-[10rem]">
              <div className="flex justify-end w-full">
                <div className="w-2/3 md:w-[38rem] md:h-[38rem] overflow-hidden">
                  <img
                    src="/assets/special-3.png"
                    alt="Setrika"
                    className="w-full h-full image-scale-animation-3"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="flex w-full mt-10">
                <div className="w-2/3 md:w-[38rem] md:h-[38rem] overflow-hidden">
                  <img
                    src="/assets/special-4.png"
                    alt="Setrika"
                    className="w-full h-full image-scale-animation-4"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="absolute left-0 -top-[14rem] md:top-32 flex justify-center z-10 w-full pt-96 text-aos-animation-3">
                <div className="bg-white shadow-[0_0_35px_rgba(0,0,0,0.25)] px-7 md:px-10 py-14 md:py-20 w-3/4 md:w-[22rem]">
                  <p className="text-xl">Ketahanan wangi yang lama membuat anda percaya diri untuk menjalani hari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='produk-kami' className='w-full overflow-hidden'>
        <div className="container mx-auto md:px-5 xl:px-20">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <h1 className='text-3xl md:text-5xl md:leading-[4.5rem] font-bold text-center md:text-left'>Produk Kami</h1>
            <Link href="/product" className="text-gray-500 underline md:ml-auto">Lihat Semua Produk</Link>
          </div>
        </div>
        
        <div className="w-full overflow-hidden relative pb-20"> 
            <img
              src="/assets/group-gelembung-1.png"
              alt="Gelembung"
              className="w-full h-full absolute -bottom-10 left-0 group-gelembung-1"
              style={{ objectFit: "contain" }}
            />
            <img
              src="/assets/group-gelembung-2.png"
              alt="Gelembung"
              className="w-full h-full absolute -bottom-24 left-0 group-gelembung-2"
              style={{ objectFit: "contain" }}
            />
            <img
              src="/assets/group-gelembung-3.png"
              alt="Gelembung"
              className="w-full h-full absolute -bottom-24 left-0 group-gelembung-3"
              style={{ objectFit: "contain" }}
            />
            <div className="draggable-container cursor-grab w-max pl-[45rem] -left-[43rem] md:pl-[20rem] md:-left-[10rem] 2xl:pl-[3rem] 2xl:-left-[1rem] pb-14 relative ">
              <div className="draggable-slide w-fit flex gap-5">
                <Link href="/product?tab=pelicin" className="group cursor-grab w-[15rem] md:w-80 overflow-hidden rounded-lg shadow-xl">
                  <div className="w-full h-[20rem] md:h-[27rem] overflow-hidden">
                    <img
                      src="/assets/pelicin-pakaian.png"
                      alt="Pelicin pakaian"
                      className="w-full h-full group-hover:scale-125 transition duration-300"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bg-[#06246C] h-[7rem] flex items-center text-white py-3 px-4 text-3xl font-medium leading-[2.6rem]">
                    <p className="">PELICIN <br></br> PAKAIAN</p>
                  </div>
                </Link>
                <Link href="/product?tab=detergent" className="group cursor-grab w-[15rem] md:w-80 overflow-hidden rounded-lg shadow-xl">
                  <div className="w-full h-[20rem] md:h-[27rem] overflow-hidden">
                    <img
                      src="/assets/detergen.png"
                      alt="Detergen"
                      className="w-full h-full group-hover:scale-125 transition duration-300"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bg-[#06246C] h-[7rem] flex items-center text-white py-3 px-4 text-3xl font-medium leading-[2.6rem]">
                    <p className="">DETERGEN</p>
                  </div>
                </Link>
                <Link href="/product?tab=softener" className="group cursor-grab w-[15rem] md:w-80 overflow-hidden rounded-lg shadow-xl">
                  <div className="w-full h-[20rem] md:h-[27rem] overflow-hidden">
                    <img
                      src="/assets/softener.png"
                      alt="Softener"
                      className="w-full h-full group-hover:scale-125 transition duration-300"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bg-[#06246C] h-[7rem] flex items-center text-white py-3 px-4 text-3xl font-medium leading-[2.6rem]">
                    <p className="">SOFTENER</p>
                  </div>
                </Link>
                <Link href="/product?tab=sabun" className="group cursor-grab w-[15rem] md:w-80 overflow-hidden rounded-lg shadow-xl">
                  <div className="w-full h-[20rem] md:h-[27rem] overflow-hidden">
                    <img
                      src="/assets/sabun-cuci-piring.png"
                      alt="Sabun Cuci Piring"
                      className="w-full h-full group-hover:scale-125 transition duration-300"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bg-[#06246C] h-[7rem] flex items-center text-white py-3 px-4 text-3xl font-medium leading-[2.6rem]">
                    <p className="">SABUN CUCI PIRING</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
      </div>

      <div id='produk-terjual' className='relative top-0 left-0 w-full h-[26rem] md:h-[41rem] flex justify-center overflow-hidden'>
        <div className="container mx-auto px-5 xl:px-20">
          <h1 className='text-3xl md:text-5xl md:leading-[4.5rem] font-bold text-center md:text-left'>Produk Kami</h1>
          <h1 className='text-3xl md:text-5xl md:leading-[4.5rem] font-bold text-center md:text-left'>Sudah Terjual</h1>
          <div className="flex justify-center md:justify-start items-center">
            <h1 className='text-3xl md:text-5xl md:leading-[4.5rem] font-bold text-center md:text-left text-[#08A500] moving-number mr-2'>0</h1>
            <h1 className='text-3xl md:text-5xl md:leading-[4.5rem] font-bold text-center md:text-left text-[#08A500]'>+</h1>
          </div>
          <img
            src="/assets/peta-indonesia-2.png"
            alt="Peta Indonesia"
            className="w-full md:w-3/4 h-full absolute top-0 md:-right-10 -z-20 parallax-peta -rotate-[20deg]"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div id='ulasan-pelanggan' className='w-full flex justify-center overflow-hidden'>
        <div className="container mx-auto md:px-5 xl:px-20 relative">
          <h1 className='text-4xl md:text-5xl mb-3 font-bold text-center md:text-start'>Ulasan Pelanggan</h1>
          <h1 className='text-xl text-center md:text-start'>Kepuasan pelanggan adalah prioritas kami</h1>
          <div className="body__inner-wrapper pt-10 pb-20 relative">
            <div className="bg-gradient-to-r from-white hidden md:block absolute top-0 left-0 h-full w-5 md:w-10 z-20"></div>
            <div className="bg-gradient-to-l from-white hidden md:block absolute top-0 right-0 h-full w-5 md:w-10 z-20"></div>
            <div className="marquee pb-5">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner">
                  <TestimonialCards />
                  <TestimonialCards />
                </div>
              </div>
            </div>
            <div className="marquee pb-5">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner_2">
                  <TestimonialCards2 />
                  <TestimonialCards2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='bekerja-sama' className='relative top-0 left-0 w-full flex justify-center overflow-hidden'>
        <div className="container mx-auto md:px-5 xl:px-20 pb-20">
          <div className="w-full flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-5 text-center md:text-start md:mb-0 font-bold text-4xl leading-[2.7rem] md:text-7xl md:leading-[6rem]">
              <p>Ingin</p>
              <p>Bekerja</p>
              <p>Sama?</p>
            </div>
            <div className="md:w-3/5 px-4 md:px-10">
              <div className="bg-[#06246C] rounded-xl px-4 md:px-10 py-5">
                <p className="font-bold text-2xl mb-5 text-white">Kirim Kami Pesan</p>
                <form action="">
                  <input className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg" type="text" placeholder="Nama" />
                  <input className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg" type="text" placeholder="Email" />
                  <input className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg" type="text" placeholder="No Telepon" />
                  <textarea rows={4} className="w-full rounded-lg px-4 py-3 mb-3 shadow-lg" name="" id="" placeholder="Apa yang bisa kami bantu?"></textarea>

                  <button className="w-full rounded-lg px-4 py-3 mb-3 bg-white border border-white font-bold cursor-pointer flex items-center justify-center shadow-lg hover:bg-transparent hover:text-white"> 
                    Kirim
                    <i className="bi bi-send-fill font-bold ml-2"></i>          
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllAnimation />
    </div>
  );
}
