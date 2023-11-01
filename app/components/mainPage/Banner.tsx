'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import techie from '@/app/assets/techie.png'
import { useGetProductsQuery } from '@/app/Redux/services/productsService';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProductCardProps } from '../Cards/ProductCard';
import Link from 'next/link';

const Banner = () => {
  const { data: products, isLoading: isProductsLoading } = useGetProductsQuery();
  const [productsArray, setProductsArray] = useState<ProductCardProps['product'][]>([]);

  useEffect(() => {
    if (!isProductsLoading && products) {
      if (products.length <= 5) {
        setProductsArray(products);
      } else {
        setProductsArray(products.splice(0, 5));
      }
    }

  }, [products, isProductsLoading])


  return (
    <div className='container mx-auto py-9 md:py-12 px-4 md:px-6'>
      <div className='flex items-stretch justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 '>
        <div className='flex flex-col md:flex-row items-stretch justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12'>
          <div className='flex flex-col justify-center md:w-1/2'>
            <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800'>Seamless Solutions for a Digital Future!</h1>
            <p className='text-base lg:text-xl text-gray-800 mt-2'>Upgrade your device today!</p>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 -my-12 flex justify-center md:justify-end'>
            <Image
              src={techie}
              alt=''
              width={250}
              height={300}
              className=''
            />
          </div>
        </div>
        <div className='md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative'>
          <Carousel showThumbs={true} showStatus={false} infiniteLoop={true} showArrows={false} interval={5000}>
            {productsArray.map((product) => (
              <div className='h-full flex'>
                <div className='flex flex-col justify-center text-left w-full'>
                  <h1 className='text-xl lg:text-2xl font-semibold text-gray-800'>{product.make} {product.model}</h1>
                  <p className='text-base lg:text-md text-gray-800'>For only <span className='font-bold'> $ {product.price}</span></p>
                  <Link href={`/${product.id}`} target='_blank'>
                    <div className='mt-2 bg-gray-900 text-white rounded-xl cursor-pointer w-[80px] text-center py-[2px]'>
                      Details
                    </div>
                  </Link>
                </div>
                <div className='flex justify-end w-full h-full px-2'>
                  <Image
                    src={product.images[0]}
                    alt=''
                    width={40}
                    height={40}
                    className=''
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Banner


