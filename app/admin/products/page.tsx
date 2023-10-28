'use client'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from '../../components/SearchBar'
import FilterDropdown from "../../components/FilterDropDown";
import AdminModalHOC from '../../components/Modals/AdminModalHOC';
import { updateModal } from "../../Redux/actions/modals";
import { useGetProductsQuery } from "@/app/Redux/services/productsService";
import ProductCard from "@/app/components/Cards/ProductCard";
import ProductCardLoading from "@/app/components/Cards/ProductCardLoading";

const Products = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal.data);

  const { data: products, isLoading: isGetProductsLoading, refetch: refetchProducts } = useGetProductsQuery();


  const onAddCarClick = () => {
    dispatch(updateModal('Add Product'));
    setOpen(true);
  }

  const skeletonPulses = Array.from({ length: 2 })

  useEffect(() => {
    if (modal === 'Congratulations') {
      refetchProducts()
    }
  }, [modal])
  return (
    <>
      <AdminModalHOC
        open={open}
        setOpen={setOpen}
      />
      <div className="w-full min-h-screen">
        <div className='p-8 text-[32px] text-center font-semibold'>
          Products
        </div>
        <div className='grid grid-cols-3 gap-4 pt-[20px]'>
          <div className='col-span-2 w-full'>
            <SearchBar
              onSearch={() => { }}
            />
          </div>
          <div>
            <FilterDropdown
              options={options}
              onSelect={() => { }}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12 gap-2 items-center justify-center'>
          <div className="h-300px bg-white shadow-xl rounded-xl flex flex-col items-center justify-center  max-w-[300px] p-8 h-48"
            onClick={onAddCarClick}
          >
            <svg
              className="w-12 h-12 text-gray-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <div className='text-green-500 font-medium text-xl cursor-pointer' >
              Add New Product
            </div>
          </div>
          {isGetProductsLoading ? (
            <React.Fragment>
              {skeletonPulses.map((_, index) => (
                <ProductCardLoading key={index} />
              ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  setOpen={setOpen}
                  product={product}
                />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  )
}

export default Products


