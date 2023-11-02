import React from 'react';
import Image from 'next/image';
import { ProductCardProps } from './ProductCard';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

const PublicProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Carousel showThumbs={true} showStatus={true} infiniteLoop={true}>
                {product.images.map((image: string, index: number) => (
                    <div key={index} className="flex flex-col justify-center items-center w-full h-[200px]">
                        <Image
                            src={image}
                            alt=""
                            height={200}
                            width={300}
                            className="h-[200px] rounded-xl flex flex-col justify-center items-center"
                        />
                        <span className={`absolute top-0 left-0 m-2 rounded-full px-4 text-center text-sm font-medium text-white ${product.condition === 'New' ? 'bg-green-700' : 'bg-cyan-600'}`}>
                            {product.condition}
                        </span>
                    </div>
                ))}
            </Carousel>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-[16px] tracking-tight text-slate-900">{product.make + ' '} {product.model}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-md font-bold text-slate-900">${product.price}</span>
                    </p>
                </div>
                <Link href={`/${product.id}`} target='_blank' className="flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    View Product Details
                </Link>
            </div>
        </div>
    );
};

export default PublicProductCard;