//@ts-nocheck

import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import Product from './Product';

export type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id
    // fetch data
    let productData;
    const productRef = doc(db, 'products', id);
    const serviceRef = doc(db, 'services', id);

    const productSnapshot = await getDoc(productRef);
    const serviceSnapshot = await getDoc(serviceRef);

    if (productSnapshot.exists()) {
        productData = productSnapshot.data();
    } else {
        productData = serviceSnapshot.data();
    }


    const previousImages = (await parent).openGraph?.images || []

    const {
        name = '',
        make = '',
        model = '',
        description = '',
        images = [],
    } = productData || {};
    return {
        title: name === '' ? (make + ' ' + model) : name,
        description: description.slice(0, 95) + '...',
        openGraph: {
            images: [images[0], ...previousImages],
        },
    }
}

export async function generateStaticParams() {
    const productRef = collection(db, 'products');
    const serviceRef = collection(db, 'services');

    const productSnapshot = await getDocs(productRef);
    const serviceSnapshot = await getDocs(serviceRef);
    const products = productSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const services = serviceSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const Arr = [...products, ...services]

    return Arr.map((item) => ({
        id: item.id,
    }))
}

export default function Page({ params }: Props) {
    return (
        <div>
            <Product params={params} />
        </div>
    )
}
