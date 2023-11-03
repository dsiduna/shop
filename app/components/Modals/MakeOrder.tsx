'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2'
import InputField from '../InputField';
import 'react-phone-input-2/lib/style.css'

interface ReservationData {
    name: string;
    phone: string;
    product: string;
}

const MakeOrder = () => {

    const {
        condition = '',
        name = '',
        model = '',
        price = '',
        make = '',
        images = [],
    } = useSelector((state: any) => state.modal.publicProduct)
    const product: string = name === '' ? make + ' ' + model : name;
    const [data, setData] = useState<ReservationData>({
        name: '',
        phone: '',
        product: name === '' ? make + '' + model : name
    })
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handlePhoneChange = (phone: string) => {
        setData((prevState) => ({
            ...prevState,
            phone: phone,
        }))
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const message: string = `Hi, ${data.name} has made an order of ${data.product}. Their number is ${data.phone}`
    /*const sendMessage = () => {
        setIsLoading(true);
        fetch(`https://graph.facebook.com/v17.0/${process.env.NEXT_PUBLIC_WHATSAPP_ACCOUNT_ID}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_WHATSAPP_BEARER_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": "263774502000",
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": message
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false)
                console.log(data);
            })
            .catch(error => {
                setIsLoading(false)
                console.error(error);
            });
    };*/
    const sendMessage = async () => {
        const url = `https://graph.facebook.com/v17.0/${process.env.NEXT_PUBLIC_WHATSAPP_ACCOUNT_ID}/messages`;
        const accessToken = process.env.NEXT_PUBLIC_WHATSAPP_BEARER_TOKEN;
        const phoneNumber = '263774502000';
        setIsLoading(true);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to: phoneNumber,
                    type: 'text',
                    text: {
                        preview_url: false,
                        body: message,
                    },
                }),
            })
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false)
                    console.log(data);
                })
                .catch(error => {
                    setIsLoading(false)
                    console.error(error);
                });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onSubmit = () => {
        sendMessage();
    }
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <div className="flex flex-col justify-center items-center w-full h-[200px]">
                    <Image
                        src={images[0]}
                        alt=""
                        height={200}
                        width={300}
                        className="h-[200px] rounded-xl flex flex-col justify-center items-center"
                    />
                    <span className={`absolute top-0 left-0 m-2 rounded-full px-4 text-center text-sm font-medium text-white ${condition === 'New' ? 'bg-green-700' : 'bg-cyan-600'}`}>
                        {condition}
                    </span>
                </div>

                <div className="mt-4 px-5 text-center">
                    <h5 className="text-[16px] tracking-tight text-slate-900">{product}</h5>
                    <div className="mt-2">
                        <p>
                            <span className="text-md font-bold text-slate-900">${price}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 w-full p-2'>
                <div className='flex justify-center items-center gap-2 w-full p-2'>
                    <InputField
                        label="Your Name"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='p-2 w-full gap-2'>
                    <label htmlFor="phone" className="text-sm font-medium">
                        Your Contact No:
                    </label>

                    <PhoneInput
                        inputStyle={{ width: '100%', marginBlock: '2px' }}
                        country={'zw'}
                        value={data.phone}
                        onChange={phone => handlePhoneChange(phone)}
                    />
                </div>
                <div className='bg-gray-900 hover:bg-gray-700 text-white rounded-xl px-4 py-2 cursor-pointer'
                    onClick={onSubmit}
                >
                    Submit
                </div>
            </div>
        </div>
    )
}

export default MakeOrder