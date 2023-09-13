'use client'

import { useSelector } from "react-redux"
import { productState } from "@/app/Redux/features/actions/productsSlice"

export const metadata = {
    title: 'Here we go Agin'
}

export default function Products() {
    const baba: productState[] = useSelector((state: any) => state.products);
    console.log(baba)
    return (
        <div>
            Products, Son
        </div>
    )
}