import React, { ChangeEvent } from 'react';
import InputField from '../InputField';

interface ProductInputProps {
  serviceData: {
    id: string,
    name: string,
    description: string,
    price: any,
    pictures: any
  };
  errors: {
    name: string,
    description: string,
    price: string,
    pictures: string,
  };
  setServiceData: React.Dispatch<React.SetStateAction<{
    id: string,
    name: string,
    description: string,
    price: any,
    pictures: any
  }>>;
  setErrors: React.Dispatch<React.SetStateAction<{
    name: string,
    description: string,
    price: string,
    pictures: string,
  }>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;

  isValid: boolean;
}

const ServiceInput: React.FC<ProductInputProps> = ({
  serviceData,
  errors,
  setServiceData = () => { },
  setErrors = () => { },
  setIsValid = () => { },
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setServiceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    handleClearErrors();
  };
  const handleClearErrors = () => {
    setIsValid(true);
    setErrors({
      name: '',
      description: '',
      price: '',
      pictures: '',
    });
  };
  return (
    <div>
      <div className='flex justify-center items-center gap-2 w-full p-2 pt-36'>
        <InputField
          label="Name"
          id="name"
          name="name"
          value={serviceData.name}
          onChange={handleChange}
          error={errors.name}
        />
      </div>
      <div className='flex justify-center items-center gap-2 w-full p-2'>
        <InputField
          label="Price"
          id="price"
          name="price"
          value={serviceData.price}
          onChange={handleChange}
          error={errors.price}
          type='number'
        />
      </div>
      <div className="p-2 w-full">
        <label htmlFor="description" className="text-md font-medium">
          Product Specs:
        </label>
        <textarea
          id="description"
          name="description"
          value={serviceData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>
    </div>
  );
}

export default ServiceInput;