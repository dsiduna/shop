// @ts-nocheck

import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    collection,
    doc,
    deleteDoc,
    getDocs,
    setDoc,
    getDoc,
    updateDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { db } from "../../../firebase";
import { ProductCardProps } from "@/app/components/Cards/ProductCard";
export const productsService = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            async queryFn(product) {
                const productData = {
                    make: product.make,
                    model: product.model,
                    description: product.description,
                    price: product.price,
                    images: [],
                    colour: product.colour,
                    condition: product.condition,
                };
                try {
                    const productRef = doc(collection(db, 'products'));
                    const storage = getStorage();
                    const storageRef = ref(storage);

                    for (let i = 0; i < product.pictures.length; i++) {
                        const image = product.pictures[i];
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
                console.log('Product deleted successfully!');
                try {
                    await deleteDoc(productRef)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getProducts: builder.query<ProductCardProps.product[], void>({
            async queryFn() {
                const productsRef = collection(db, 'products');
                try {
                    const snapshot = await getDocs(productsRef);
                    const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    return { data: products };
                } catch (error) {
                    console.log(error);
                    throw new Error(error.message);
                }
            },
        }),
        getSingleProduct: builder.mutation({
            async queryFn(id) {
                const productRef = doc(db, 'products', id)
                try {
                    await getDoc(productRef)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        updateProduct: builder.mutation({
            async queryFn(product) {
                const imagesToBeUploaded = product?.pictures?.filter((item) => typeof item !== 'string');
                const unDeletedImages = product.pictures?.filter((item) => typeof item === 'string');
                const productData = {
                    make: product.make,
                    model: product.model,
                    description: product.description,
                    price: product.price,
                    images: unDeletedImages,
                    colour: product.colour,
                    condition: product.condition,
                };

                try {
                    const productRef = doc(db, 'products', product.id);
                    const storage = getStorage();
                    const storageRef = ref(storage, 'productImages');
                    for (let i = 0; i < imagesToBeUploaded.length; i++) {
                        const image = imagesToBeUploaded[i];
                        const imageRef = ref(storageRef, `${product.id}/${image.name}`);
                        await uploadBytes(imageRef, image);
                        const imageUrl = await getDownloadURL(imageRef);
                        productData.images.push(imageUrl);
                    }
                    await updateDoc(productRef, productData);
                    console.log('Product updated successfully!');
                } catch (error) {
                    console.error('Error updating product:', error);
                }
            }
        })
    })
})

export const {
    useAddProductMutation,
    useDeleteProductMutation,
    useGetProductsQuery,
    useGetSingleProductMutation,
    useUpdateProductMutation,
} = productsService;
