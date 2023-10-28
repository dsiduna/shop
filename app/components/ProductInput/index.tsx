

import React, { ChangeEvent } from 'react';
import InputField from '../InputField';
import CategoryPicker from '../CategoryPicker';
import { productCategories, conditions } from '@/app/utils/productCategories';

interface ProductInputProps {
  productData: {
    id: string;
    make: string;
    model: string;
    price: any;
    colour: string;
    category: string;
    description: string;
    condition: string,
  };
  errors: {
    make: string,
    model: string,
    price: string,
    pictures: string,
  };
  setProductData: React.Dispatch<React.SetStateAction<{
    make: string;
    model: string;
    price: number;
    colour: string;
    category: string;
    description: string;
    pictures: any,
    condition: string,
  }>>;
  setErrors: React.Dispatch<React.SetStateAction<{
    make: string,
    model: string,
    price: string,
    pictures: string,
  }>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;

  isValid: boolean;
}

const AccessoriesInput: React.FC<ProductInputProps> = ({
  productData,
  errors,
  setProductData = () => { },
  setErrors = () => { },
  setIsValid = () => { },
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    handleClearErrors();
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductData((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  const handleConditionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductData((prevState) => ({
      ...prevState,
      condition: e.target.value,
    }));
  };

  const handlePhoneChange = (phone: string) => {
    setProductData((prevState) => ({
      ...prevState,
      phone: phone,
    }));
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

  return (
    <div>
      <div className='flex justify-center items-center gap-2 w-full p-2 pt-52'>
        <InputField
          label="Brand"
          id="make"
          name="make"
          value={productData.make}
          onChange={handleChange}
          error={errors.make}
        />
        <InputField
          label="Model Name"
          id="model"
          name="model"
          value={productData.model}
          onChange={handleChange}
          error={errors.model}
        />
      </div>
      <div className='flex justify-center items-center gap-2 w-full p-2'>
        <InputField
          label="Colour"
          id="colour"
          name="colour"
          value={productData.colour}
          onChange={handleChange}
        />
        <InputField
          label="Price"
          id="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          error={errors.price}
          type='number'
        />
      </div>
      <div className='flex justify-center items-center gap-2 w-full p-2'>
        <CategoryPicker
          selectedCategory={productData.category}
          categories={productCategories}
          onChange={handleCategoryChange}
          isCondition={false}
        />
        <CategoryPicker
          selectedCategory={productData.condition}
          categories={conditions}
          onChange={handleConditionChange}
          isCondition={true}
        />

      </div>
      <div className="p-2 w-full">
        <label htmlFor="description" className="text-md font-medium">
          Product Specs:
        </label>
        <textarea
          id="description"
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>
    </div>
  );
}

export default AccessoriesInput;