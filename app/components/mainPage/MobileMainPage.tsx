'use client'
import React, { useState } from 'react'
import Products from './Products';
import Services from './Services';


interface Props {
    view: string;
}

const MobileMainPage = () => {
    const [view, setView] = useState<string>('products');
    return (
        <div>
            <div className='flex items-center justify-evenly'>
                <div className={`rounded-2xl text-white px-8 py-1 cursor-pointer ${view === 'products' ? 'bg-[#355E3B]' : 'bg-slate-800'}`}

                    onClick={() => setView('products')}
                >
                    Products
                </div>
                <div className={`rounded-2xl text-white px-8 py-1 cursor-pointer ${view === 'services' ? 'bg-[#355E3B]' : 'bg-slate-800'}`}
                    onClick={() => setView('services')}
                >
                    Services
                </div>
            </div>
            <RenderedView
                view={view}
            />
        </div>
    )
}

export default MobileMainPage

const RenderedView: React.FC<Props> = ({ view }) => {
    switch (view) {
        case 'products':
            return <Products />;
        case 'services':
            return <Services />;
        default:
            return null;
    }
};