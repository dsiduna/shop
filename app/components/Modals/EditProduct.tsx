//@ts-nocheck

'use client'

import React, { useState, useRef, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import addIcon from '@/app/assets/add.svg';
import loader from '@/app/assets/loader.gif';
import { useUpdateProductMutation } from '@/app/Redux/services/productsService'
import { updateModal } from '@/app/Redux/actions/modals'
import Image from 'next/image'

import AlertAtom from '../AlertAtom'
import ProductInput from '../ProductInput'
import { PictureItem } from './AddProduct';

const EditProduct = () => {
  const dispatch = useDispatch()
  const {
    id = '',
    condition = '',
    description = '',
    model = '',
    colour = '',
    price = '',
    make = '',
    images = [],
    category= '',
  } = useSelector((state: any) => state.modal.product)
  const initialState = {
    id,
    condition,
    description,
    model,
    colour,
    price,
    make,
    category,
    pictures: images,
  }
  const [updateProduct, { isLoading: isUpdateProductLoading }] = useUpdateProductMutation();

  const [productData, setProductData] = useState(initialState);
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({
    make: '',
    model: '',
    price: '',
    pictures: '',
  });

  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPictureClick = () => {
    fileInputRef.current?.click();
  };

  const handlePictureUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + productData.pictures.length > 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pictures: 'Cannot upload more than 10 pictures',
      }));
      return;
    }

    const pictureFiles: any = files.map((file) => file);
    setProductData((prevState) => ({
      ...prevState,
      pictures: prevState.pictures.concat(pictureFiles),
    }));

    // Reset the file input value after uploading
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      pictures: '', // Clear the error message after successful upload
    }));
  };

  const handleRemovePicture = (index: number) => {
    setProductData((prevState) => {
      const updatedPictures = [...prevState.pictures];
      updatedPictures.splice(index, 1);
      return {
        ...prevState,
        pictures: updatedPictures,
      };
    });
  };

  const validateInputs = () => {
    const newErrors = {
      make: '',
      model: '',
      price: '',
      pictures: '',
    };
    let isValid = true;

    if (productData.make === '') {
      newErrors.make = 'Make is required';
      isValid = false;
    }
    if (productData.model === '') {
      newErrors.model = 'Model is required';
      isValid = false;
    }

    if (productData.price === 0) {
      newErrors.price = 'Price is required';
      isValid = false;
    }

    if (productData.pictures.length < 1) {
      newErrors.pictures = 'Attach Pictures';
      isValid = false;
    }
    setErrors(newErrors);
    setIsValid(isValid);

    return isValid;
  };

  const handleClearErrors = () => {
    setIsValid(true);
    setErrors({
      make: '',
      model: '',
      price: '',
      pictures: '',
    });
  };

  const handleUpdateProduct = async () => {
    try {
      if (!validateInputs()) {
        return;
      }

      await updateProduct(productData).then(() => {
        setProductData(initialState)
        dispatch(updateModal("Congratulations"));
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto overflow-hidden">

      {!isValid && <AlertAtom
        msg='Plese fill in ALL required fields and retry'
        buttonLabel='Ok'
        action={handleClearErrors}
      />
      }
      <div className="flex flex-col justify-center items-center w-full h-[400px] overflow-y-auto">
        <ProductInput
          productData={productData}
          isValid={isValid}
          errors={errors}
          setProductData={setProductData}
          setErrors={setErrors}
          setIsValid={setIsValid}
        />
        <div className="p-2 w-full">
          <label htmlFor="pictures" className="text-md font-medium">
            Pictures:
          </label>
          <div className='grid grid-cols-4 gap-2 mt-2'>
            <div className="flex justify-center items-center h-20 w-20 ">
              <label htmlFor="pictures" className="text-lg font-medium cursor-pointer">
                <Image
                  src={addIcon}
                  alt=""
                  className="w-8 h-8 mr-2"
                  onClick={() => handleAddPictureClick()}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePictureUpload}
                ref={fileInputRef}
                className="hidden"
              />
            </div>
            {productData.pictures.map((pictureUrl: any, index: number) => (
              <PictureItem

                key={index}
                pictureUrl={typeof pictureUrl === 'string' ? pictureUrl : URL.createObjectURL(pictureUrl)}
                alt={`product Picture ${index + 1}`}
                onRemove={() => handleRemovePicture(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col'>
        {isUpdateProductLoading ? (
          <Image
            src={loader}
            alt=''
            width={48}
            height={48}
          />
        ) : (
          <button
            onClick={handleUpdateProduct}
            className="bg-blue-500 hover:bg-blue-600 text-white  font-medium py-2 px-4 rounded-md"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default EditProduct