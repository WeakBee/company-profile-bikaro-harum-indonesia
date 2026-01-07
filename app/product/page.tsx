'use client';

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { gsap } from "gsap";
import { products } from "@/lib/data";

const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'pelicin', label: 'Pelicin Pakaian' },
    { id: 'detergent', label: 'Detergent Cair' },
    { id: 'softener', label: 'Softener Pakaian' },
    { id: 'sabun', label: 'Sabun Cuci Piring' },
    { id: 'parfum', label: 'Parfum' },
];

type ProductType = {
    name: string;
    category: string;
    categoryname: string;
    categorycolor: string;
    image: string;
    star: number;
    selled: string;
    description: string;
};

const AllAnimation = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const ctx = gsap.from(".hero-text-animation", {
                opacity: 0,
                y: 200,
                duration: 1.3
            });

            return () => {
                ctx.revert(); // Bersihkan animasi saat komponen di-unmount
            };
        }
    }, []);

    return null;
};

export default function Product() {
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const tabParam = urlParams.get('tab');
            if (tabParam) {
                setActiveTab(tabParam); // Set tab berdasarkan query parameter
            }
        }
    }, []);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    return (
        <div>
            <div id='hero' className='relative top-0 left-0 w-full flex justify-center overflow-hidden'>
                <img
                    src="/assets/bg-produk-hero.png"
                    alt="BG Hero"
                    className="w-full h-full absolute -top-0 left-0 -z-20 parallax-hero"
                    style={{ objectFit: "cover" }}
                />
                <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#0B0A4166]/10'></div>
                <div className="container mx-auto px-5 xl:px-20 pt-36 pb-24 text-white">
                    <div>
                        <h1 className='hero-text-animation text-3xl mb-2 md:text-5xl md:leading-[4.5rem] font-medium text-center md:text-left'>Produk</h1>
                        <h1 className='hero-text-animation text-lg md:text-xl text-center md:text-left'>Kami memiliki produk berkualitas yang sudah<br className="hidden md:block" /> digunakan di berbagai wilayah Indonesia dengan<br className="hidden md:block" /> harga terjangkau</h1>
                    </div>
                </div>
            </div>

            <div id='motto' className="relative min-h-[40rem] overflow-hidden">
                <Tabs value={activeTab}>
                    <div className="container mx-auto px-5 xl:px-20 pt-16 overflow-y-auto md:overflow-auto">
                        <TabsList className="w-fit flex md:w-auto md:grid grid-cols-6 gap-2">
                            {categories.map(({ id, label }) => (
                                <TabsTrigger
                                    key={id}
                                    value={id}
                                    onClick={() => setActiveTab(id)}
                                    className="text-center py-2 px-4 rounded-t-lg"
                                >
                                    {label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    <div className="container mx-auto px-5 xl:px-20 border-t pt-5 md:pt-8 pb-10">
                        {categories.map(({ id }) => (
                            <TabsContent key={id} value={id} className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                {products.filter(product => id === 'all' || product.category === id).map(product => (
                                    <div
                                        key={product.name}
                                        className="border rounded-lg shadow-md overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        <img src={product.image} alt={product.name} className="w-full object-cover mb-2" />
                                        <div className='px-4 pb-3'>
                                            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                                            <div
                                                style={{ backgroundColor: product.categorycolor }}
                                                className="px-3 py-1 w-fit rounded-sm text-white text-sm"
                                            >
                                                {product.categoryname}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>

            {/* MODAL */}
            {selectedProduct && (
                <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
                    <DialogContent className="md:max-w-5xl">
                        <div className="flex flex-col md:flex-row">
                            <div className='order-2 md:order-1 md:w-1/2 md:p-5 relative'>
                                <DialogTitle className='mb-3'>{selectedProduct.name}</DialogTitle>
                                <div className="flex items-center mb-2">
                                    {Array.from({ length: Math.floor(selectedProduct.star) }).map((_, starIndex) => (
                                        <img key={starIndex} className="w-6" src="/assets/star_2.png" alt="Star" />
                                    ))}
                                    {selectedProduct.star % 1 !== 0 && (
                                        <img className="w-6" src="/assets/half_star_2.png" alt="Half Star" />
                                    )}
                                    <p className='ml-2 text-[#848484] text-sm'> ({selectedProduct.star}) {selectedProduct.selled}+ Terjual</p>
                                </div>
                                <div className="flex md:block items-center gap-2">
                                    <DialogDescription className="md:mb-3">
                                        <span
                                            style={{ backgroundColor: selectedProduct.categorycolor }}
                                            className="px-3 py-1 rounded-sm text-white text-xs"
                                        >
                                            {selectedProduct.categoryname}
                                        </span>
                                    </DialogDescription>
                                    <div className='flex gap-2 items-center md:mb-0' >
                                        <a target='_blank' href="https://id.shp.ee/WXuyDSC"><img className='w-6 hover:scale-110 transition' src="/assets/shopee_shop_icon.png" alt="Shopee Icon" /></a>
                                        <a target='_blank' href="https://www.tiktok.com/@freshmist.official"><img className='w-6 hover:scale-110 transition' src="/assets/tiktok_shop_icon.png" alt="Tiktok Shop Icon" /></a>
                                    </div>
                                </div>
                                <div className="h-52 md:h-[23rem] w-full relative">
                                    <div className="bg-gradient-to-t from-white from-30% absolute -bottom-[1px] left-0 w-[97%] h-8 z-20"></div>
                                    <div className="bg-gradient-to-b from-white from-30% absolute -top-[1px] left-0 w-[97%] h-8 z-20"></div>
                                    <div className='w-full h-full overflow-y-auto pr-5 py-5'>
                                        <p className="text-gray-600 text-justify" dangerouslySetInnerHTML={{ __html: selectedProduct.description }}></p>
                                    </div>
                                </div>
                            </div>
                            <div className='order-1 md:order-2 md:w-1/2 md:p-5 flex justify-center'>
                                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-3/4 md:w-full object-cover rounded-lg mb-3" />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
            <AllAnimation />
        </div>
    );
}
