//@ts-nocheck

'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import FilterDropdown from '../FilterDropDown'
import { productCategories } from '@/app/utils/productCategories'
import PublicProductCard from '../Cards/PublicProductCard'
import ProductCardLoading from '../Cards/ProductCardLoading'
import { useGetProductsQuery } from '@/app/Redux/services/productsService'
import { ProductCardProps } from '../Cards/ProductCard'

const Products = () => {
    const { data, isLoading: isGetProductsLoading } = useGetProductsQuery();
    const [filteredProducts, setFilteredProducts] = useState<ProductCardProps['product'][]>([]);
    const [selectedOption, setSelectedOption] = useState<string>('All');

    useEffect(() => {
        if (data) {
            setFilteredProducts(data)
        }
    }, [data])

    useEffect(() => {
        if (data) {
            const filteredData = (selectedOption === 'All' || selectedOption === '')
                ? data
                : data.filter((product) => product.category === selectedOption);
            setFilteredProducts(filteredData);
        }
    }, [data, selectedOption]);



    const skeletonPulses = Array.from({ length: 2 })

    const handleSearch = (searchTerm: string) => {
        if (searchTerm === '') {
            setFilteredProducts(data);
        } else {
            const filtered = data?.filter(
                (item) =>
                    item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };
    return (
        <div className='p-4'>
            <div className='grid grid-cols-3 gap-4 pt-[20px] px-2'>
                <div className='col-span-2 w-full'>
                    <SearchBar
                        onSearch={handleSearch}
                    />
                </div>
                <div>
                    <FilterDropdown
                        options={productCategories}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 gap-2 items-center justify-center'>
                {isGetProductsLoading ? (
                    <React.Fragment>
                        {skeletonPulses.map((_, index) => (
                            <ProductCardLoading key={index} />
                        ))}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {filteredProducts.map((product) => (
                            <PublicProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default Products