'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface productState {
    title: string,
    cost: number
}

const initialState: productState[] = [{ title: "Denis", cost: 123 }]

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state = action.payload
        }
    }
})

const { actions, reducer } = productsSlice

export const { setProducts } = actions

export default reducer