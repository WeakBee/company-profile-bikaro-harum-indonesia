'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'pelicin', label: 'Pelicin Pakaian' },
  { id: 'detergent', label: 'Detergent Cair' },
  { id: 'softener', label: 'Softener Pakaian' },
  { id: 'sabun', label: 'Sabun Cuci Piring' },
];

const products = [
  { name: 'Sexy Red', category: 'pelicin', categoryname:'Pelicin', categorycolor: '#69DAFF', image: '/assets/product/sexy_red.webp' },
  { name: 'Sweet Secret', category: 'pelicin', categoryname:'Pelicin', categorycolor: '#69DAFF', image: '/assets/product/sweet_secret.webp' },
  { name: 'Blue Fantasy', category: 'pelicin', categoryname:'Pelicin', categorycolor: '#69DAFF', image: '/assets/product/blue_fantasy.webp' },
  { name: 'Sakura', category: 'pelicin', categoryname:'Pelicin', categorycolor: '#69DAFF', image: '/assets/product/sakura.webp' },
  { name: 'Soft Baby', category: 'pelicin', categoryname:'Pelicin', categorycolor: '#69DAFF', image: '/assets/product/soft_baby.webp' },
  { name: 'Aurora', category: 'pelicin', categoryname:'Pelicin', categorycolor: '#69DAFF', image: '/assets/product/aurora.webp' },
  { name: 'Philly', category: 'detergent', categoryname:'Detergent', categorycolor: '#5CF653', image: '/assets/product/philly.webp' },
  { name: 'Lovely', category: 'detergent', categoryname:'Detergent', categorycolor: '#5CF653', image: '/assets/product/lovely.webp' },
  { name: 'Silky', category: 'softener', categoryname:'Softener', categorycolor: '#E484FF', image: '/assets/product/silky.webp' },
  { name: 'Delicate Blue', category: 'softener', categoryname:'Softener', categorycolor: '#E484FF', image: '/assets/product/delicate_blue.webp' },
  { name: 'Fluffy Pink', category: 'softener', categoryname:'Softener', categorycolor: '#E484FF', image: '/assets/product/fluffy_pink.webp' },
  { name: 'Lemon Scent', category: 'sabun', categoryname:'Sabun Cuci Piring', categorycolor: '#F75858', image: '/assets/product/lemon_scent.webp' },
  { name: 'Lime Sans', category: 'sabun', categoryname:'Sabun Cuci Piring', categorycolor: '#F75858', image: '/assets/product/lime_sans.webp' },
];

export default function Product() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div>
            <div id='hero' className='relative top-0 left-0 w-full flex justify-center overflow-hidden'>
                <img
                    src="/assets/bg-produk-hero.png"
                    alt="BG Hero"
                    className="w-full h-full absolute -top-0 left-0 -z-20 parallax-hero"
                    style={{ objectFit: "cover" }}
                />
                <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[#0B0A4166]/10 '></div>
                <div className="container mx-auto px-5 xl:px-20 pt-36 pb-24 text-white">
                    <div>
                        <h1 className='text-3xl md:text-5xl md:leading-[4.5rem] font-medium text-center md:text-left'>Produk</h1>
                        <h1 className='text-lg md:text-xl text-center md:text-left'>Kami memiliki produk berkualitas yang sudah</h1>
                        <h1 className='text-lg md:text-xl text-center md:text-left'>digunakan di berbagai wilayah Indonesia dengan</h1>
                        <h1 className='text-lg md:text-xl text-center md:text-left'>harga terjangkau</h1>
                    </div>
                </div>
            </div>
    
            <div id='motto' className="relative min-h-[40rem] overflow-hidden">
                <Tabs value={activeTab} defaultValue="all">
                    <div className="container mx-auto px-5 xl:px-20 pt-16">
                        <TabsList className="grid grid-cols-5 gap-2">
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
                    <div className="container mx-auto px-5 xl:px-20 border-t pt-4 pb-10">
                        {categories.map(({ id }) => (
                            <TabsContent key={id} value={id} className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                {products.filter(product => id === 'all' || product.category === id).map(product => (
                                    <div key={product.name} className="border rounded-lg shadow-md overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full object-cover mb-2" />
                                        <div className='px-4 pb-3'>
                                            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                                            <div style={{ backgroundColor: product.categorycolor }} className="px-3 py-1 w-fit rounded-sm text-white text-sm"
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
        </div>
    );
}
