// @ts-nocheck
'use client'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    arrayUnion,
    collection,
    doc,
    updateDoc,
    deleteDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import db from '../../firebase/firestore/config';

export const productsService = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            async queryFn(product) {
                const productData = {
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    specs: product.specs,
                    images: []
                };
                try {
                    const productRef = doc(collection(db, "products"));
                    const storage = getStorage();
                    const storageRef = ref(storage);

                    for (let i = 0; i < product.images.length; i++) {
                        const image = product.images[i];
                        const imageRef = ref(storageRef, `productImages/${productRef.id}/${image.name}`);
                        await uploadBytes(imageRef, image);
                        const imageUrl = await getDownloadURL(imageRef);
                        productData.images.push(imageUrl);
                    }

                    await setDoc(productRef, productData);
                    console.log('Product added successfully!');
                } catch (error) {
                    console.error('Error adding product:', error);
                }
            }
        }),
        deleteProduct: builder.mutation({
            async queryFn(id) {
                const productRef = doc(db, 'products', id)
                try {
                    await deleteDoc(productRef)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        editProduct: builder.mutation({
            async queryFn(product) {

            }
        }),
        getProducts: builder.mutation({

        })
    })
})

export const {
    useAddProductMutation,
    useDeleteProductMutation,
    useEditProductMutation,
    useGetProductsMutation,
} = productsService; 