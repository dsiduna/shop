'use client'

import { useSelector } from "react-redux"
import { productState } from "@/app/Redux/features/actions/productsSlice"

export default function Products() {
    const baba: productState[] = useSelector((state: any) => state);
    console.log(baba)
    return (
        <div>
            Products, Son
        </div>
    )
}