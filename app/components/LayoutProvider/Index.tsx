'use client'

import { usePathname } from "next/navigation";
import Header from "../header";
import Footer from "../footer";


const LayoutProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    return (

        <>
            {(pathname !== "/admin" &&
                pathname !== "/admin/products" &&
                pathname !== "/admin/services" &&
                pathname !== "/admin/logout")
                ? (
                    <>
                        <Header />
                        <main className='container'>
                            {children}
                        </main>
                        <Footer />
                    </>
                ) : (
                    <>
                        {children}
                    </>
                )}
        </>
    )
};

export default LayoutProvider

