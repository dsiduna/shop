import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  getDocs,
} from 'firebase/firestore'; 

import {db} from '../../firebase/firestore/config';

export const productsService = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Product'],
    endpoints: (builder)=> ({
        addProduct : builder.mutation ({
            async queryFn() {
                try{
                  //code in here
                } catch {

                }
            }
        })
    })
})