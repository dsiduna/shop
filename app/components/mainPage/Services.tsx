'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useGetServicesQuery } from '@/app/Redux/services/servicesService';

interface ServiceProps {
    service: {
        name: string;
        description: string;
        price: number;
        images: any;
        id: string;
    }
}

const Services = () => {
    const { data: services, isLoading: isGetServicesLoading, refetch: refetchServices } = useGetServicesQuery();
    return (
        <div className='bg-gray-100 h-full'>
            <div className='text-3xl p-4 font-semibold text-left'>
                Our Services
            </div>
            <div className='p-4 pt-12 flex flex-col justify-center gap-12'>
                {isGetServicesLoading ? (
                    <LoadingSkeleton />
                ) : (
                    <React.Fragment>
                        {services?.map((service) => (
                            <PublicServiceCard
                                service={service}
                                key={service.id}
                            />
                        ))}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default Services



const PublicServiceCard: React.FC<ServiceProps> = ({ service }) => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border m-4">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <Image
                    src={service.images[0]}
                    alt="img-blur-shadow"
                    layout="fill"
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {service.name}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {service.description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link
                    className="select-none rounded-lg bg-gray-900 hover:bg-gray-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href={`/${service.id}`}
                    target='_blank'
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};


const LoadingSkeleton = () => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border m-4">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden bg-blue-gray-500 bg-clip-border animate-pulse" />
            <div className="p-6">
                <div className="block mb-2 bg-gray-300 h-6 rounded-lg animate-pulse" />
                <div className="block mt-3 bg-gray-300 h-4 rounded-lg animate-pulse" />
                <div className="block mt-3 bg-gray-300 h-4 rounded-lg animate-pulse" />
                <div className="block mt-3 bg-gray-300 h-4 rounded-lg animate-pulse" />
                <div className="block mt-3 bg-gray-300 h-4 rounded-lg animate-pulse" />
            </div>
            <div className="p-6 pt-0">
                <button
                    className="select-none rounded-lg bg-gray-900 hover:bg-gray-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none animate-pulse"
                    type="button"
                >
                    Loading...
                </button>
            </div>
        </div>
    );
};
