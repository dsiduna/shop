import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { updateProduct, updateModal } from '../../Redux/actions/modals';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ServiceProps {
    service: {
        id: string,
        name: string,
        description: string,
        price: number,
        images: any
    },
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, setOpen = () => { } }) => {
    const dispatch = useDispatch();
    const onView = () => {
        dispatch(updateProduct(service));
        dispatch(updateModal('Congratulations'));
        setOpen(true);
        console.log('we here')
    };

    return (
        <div key={service.id}>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='container mx-auto'>
                    <div className='relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg'>
                        <div className='px-6 flex flex-col'></div>
                        <div className='pb-12'>
                            <Carousel showThumbs={true} infiniteLoop={true}>
                                {service.images.map((image: string, index: number) => (
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
                        <div className='text-center text-[#7f2d00] font-semibold text-[18px]'>
                            {service.name}
                        </div>
                        <div className='text-center text-[#7f2d00] text-[14px]'>
                            $ {service.price}
                        </div>
                        <div className='flex justify-center items-center pb-4'>
                            <div
                                className='rounded-xl bg-[#201c78] hover:bg-[#464686] text-white text-center px-4 py-1 w-1/2 cursor-pointer'
                                onClick={()=>onView()}
                            >
                                Details
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;