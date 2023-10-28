import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { useDeleteProductMutation } from '@/app/Redux/services/productsService';
import { useDeleteServiceMutation } from '@/app/Redux/services/servicesService';
import { updateModal } from '@/app/Redux/actions/modals'
import loader from '@/app/assets/loader.gif';

const DeleteItem = ({ closeModal = () => { } }) => {
  const { id, name = '', make, model } = useSelector((state: any) => state.modal.product);
  const dispatch = useDispatch();
  const [deleteProduct, { isLoading: isDeleteProductLoading }] = useDeleteProductMutation();
  const [deleteService, { isLoading: isDeleteServiceLoading }] = useDeleteServiceMutation();
  console.log(name);
  const handleDeleteProduct = async () => {
    try {
      if (name === '') {
        await deleteProduct(id).then(() => {
          dispatch(updateModal("Congratulations"));
        })
      } else {
        await deleteService(id).then(() => {
          dispatch(updateModal("Congratulations"));
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  const carTitle = make + '' + model
  return (
    <div className='flex flex-col items-center'>
      <div className='text-lg font-semibold w-2/3 text-center pt-8'>
        Are you sure you want to delete {name !== '' ? name : carTitle} ?
      </div>
      <div>
        {(isDeleteProductLoading || isDeleteServiceLoading) ? (
          <Image
            src={loader}
            alt=''
            width={48}
            height={48}
          />
        ) : (
          <div className="flex justify-around items-center pt-8 gap-4">
            <div className="rounded-xl bg-[#ff0000] hover:bg-[#ff000090] text-white text-lg px-8 text-center py-2 cursor-pointer"
              onClick={handleDeleteProduct}
            >
              Yes, Delete
            </div>
            <div className="rounded-xl bg-[#201c78] hover:bg-[#464686] text-white text-center px-8 py-2 cursor-pointer"
              onClick={closeModal}
            >
              No, Cancel
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default DeleteItem