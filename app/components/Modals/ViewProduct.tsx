'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { updateModal } from '../../Redux/actions/modals';
import { formatCurrency } from '../../utils/formatCurrency';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { ProductCardProps } from '../Cards/ProductCard';

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
}

const ViewProduct: React.FC = () => {
  const product = useSelector((state: any) => state.modal.product);
  const dispatch = useDispatch();

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(product);

  return (
    <div className="pt-4 flex flex-col justify-center items-center">
      <div>
        <div className="text-center text-xl font-semibold">
          {product.make} {product.model}
        </div>
        <div className="pt-4 max-w-[300px]">
          <Carousel showThumbs={true} infiniteLoop={true}>
            {product.images.map((image: string, index: number) => (
              <div key={index} className="flex flex-col justify-center items-center w-full h-[200px]">
                <Image
                  src={image}
                  alt=""
                  height={200}
                  width={300}
                  className="h-[200px] rounded-xl flex flex-col justify-center items-center"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='pt-12'>
          <span className='font-semibold text-lg'>Price:</span>
          <span className='italic text-green-700'> {formatCurrency(product.price)}</span>
        </div>
        <div>
          <span className='font-semibold text-lg'>Color:</span> {product.colour}
        </div>
      </div>
      <div className="flex justify-around items-center pt-8 gap-4">
        <div className="rounded-xl bg-[#201c78] hover:bg-[#464686] text-white text-center w-[108px] py-1 w-1/2 cursor-pointer"
          onClick={() => dispatch(updateModal('Edit Product'))}
        >
          Edit
        </div>
        <div className="rounded-xl bg-[#ff0000] hover:bg-[#ff000090] text-white text-center w-[108px] py-1 w-1/2 cursor-pointer"
          onClick={() => dispatch(updateModal('Delete Record'))}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default ViewProduct