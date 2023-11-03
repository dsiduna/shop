import React from "react";
import { useSelector } from "react-redux";
import Modal from './Modal'
import PublicCongratulations from "./PublicCongratulations";
import MakeOrder from "./MakeOrder";


interface AdminModalHOCProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicModalHOC: React.FC<AdminModalHOCProps> = ({ open, setOpen }) => {
    const { data: menu } = useSelector((state: any) => state?.modal);

    switch (menu) {
        case 'Make Order':
            return (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    size='w-[548px] h-[648px]'
                    content={<MakeOrder />}
                    title='Your Order'
                />
            );

        case 'Congratulations':
            return (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    size='w-[380px] h-[260px]'
                    content={<PublicCongratulations closeModal={() => setOpen(false)} />}
                    title=''
                />
            );
        default:
            return null;
    }
}

export default PublicModalHOC;