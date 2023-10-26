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

export const servicesService = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        addService: builder.mutation({
            async queryFn(service) {
                const serviceData = {
                    name: service.make,
                    description: service.description,
                    price: service.price,
                    images: [],
                };
                try {
                    const serviceRef = doc(collection(db, 'services'));
                    const storage = getStorage();
                    const storageRef = ref(storage);

                    for (let i = 0; i < service.pictures.length; i++) {
                        const image = service.pictures[i];
                        const imageRef = ref(storageRef, `serviceImages/${serviceRef.id}/${image.name}`);
                        await uploadBytes(imageRef, image);
                        const imageUrl = await getDownloadURL(imageRef);
                        serviceData.images.push(imageUrl);
                    }
                    await setDoc(serviceRef, serviceData);
                    console.log('service added successfully!');
                } catch (error) {
                    console.error('Error adding service:', error);
                }
            }
        }),
        deleteService: builder.mutation({
            async queryFn(id) {
                const serviceRef = doc(db, 'services', id)
                console.log('service deleted successfully!');
                try {
                    await deleteDoc(serviceRef)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        getServices: builder.query({
            async queryFn() {
                const servicesRef = collection(db, 'services');
                try {
                    const snapshot = await getDocs(servicesRef);
                    const services = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    return { data: services };
                } catch (error) {
                    console.log(error);
                    throw new Error(error.message);
                }
            },
        }),
        getSingleService: builder.mutation({
            async queryFn(id) {
                const serviceRef = doc(db, 'services', id)
                try {
                    await getDoc(serviceRef)
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        updateService: builder.mutation({
            async queryFn(service) {
                const imagesToBeUploaded = service?.pictures?.filter((item) => typeof item !== 'string');
                const unDeletedImages = service.pictures?.filter((item) => typeof item === 'string');
                const serviceData = {
                    name: service.name,
                    description: service.description,
                    price: service.price,
                    images: unDeletedImages,
                };

                try {
                    const serviceRef = doc(db, 'services', service.id);
                    const storage = getStorage();
                    const storageRef = ref(storage, 'serviceImages');
                    for (let i = 0; i < imagesToBeUploaded.length; i++) {
                        const image = imagesToBeUploaded[i];
                        const imageRef = ref(storageRef, `${service.id}/${image.name}`);
                        await uploadBytes(imageRef, image);
                        const imageUrl = await getDownloadURL(imageRef);
                        serviceData.images.push(imageUrl);
                    }
                    await updateDoc(serviceRef, serviceData);
                    console.log('service updated successfully!');
                } catch (error) {
                    console.error('Error updating service:', error);
                }
            }
        })
    })
})

export const {
    useAddServiceMutation,
    useDeleteServiceMutation,
    useGetServicesQuery,
    useGetSingleServiceMutation,
    useUpdateServiceMutation,
} = servicesService;
