import React from "react";
import { useSelector } from "react-redux";
import Modal from './Modal'
import AddProduct from "./AddProduct";
import AddService from "./AddService";
import EditProduct from "./EditProduct";
import EditService from "./EditService";
import DeleteRecord from "./DeleteRecord";
import Congratulations from "./Congratulations";


interface AdminModalHOCProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminModalHOC: React.FC<AdminModalHOCProps> = ({ open, setOpen }) => {
  const { data: menu } = useSelector((state: any) => state?.modal);

  switch (menu) {
    case 'Add Product':
      return (
        <Modal
          open={open}
          setOpen={setOpen}
          size='w-[600px] h-[548px]'
          content={<AddProduct />}
          title="Add Product"
        />
      );
    case 'Add Service':
      return (
        <Modal
          open={open}
          setOpen={setOpen}
          size='w-[600px] h-[548px]'
          content={<AddService />}
          title="Add Service"
        />
      );
    case 'Edit Product':
      return (
        <Modal
          open={open}
          setOpen={setOpen}
          size='w-[600px] h-[548px]'
          content={<EditProduct />}
          title="Edit Product"
        />
      );
    case 'Edit Service':
      return (
        <Modal
          open={open}
          setOpen={setOpen}
          size='w-[600px] h-[548px]'
          content={<EditService />}
          title="Edit Service"
        />
      );
    case 'Delete Record':
      return (
        <Modal
          open={open}
          setOpen={setOpen}
          size='w-[600px] h-[548px]'
          content={<DeleteRecord />}
          title="Delete"
        />
      );
    case 'Congratulations':
      return (
        <Modal
          open={open}
          setOpen={setOpen}
          size='w-[600px] h-[548px]'
          content={<Congratulations />}
          title="Add Product"
        />
      );
    default:
      return null;
  }
}

export default AdminModalHOC;