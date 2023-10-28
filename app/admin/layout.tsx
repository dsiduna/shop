//@ts-nocheck
'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import logo from '../assets/logo.png'
import Image from 'next/image';
import { UserAuth } from '../components/context/AuthContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router= useRouter();
    const pathname = usePathname();
    const { user } = UserAuth();

    useEffect(() => {
        if (!user) {
            router.push('/admin');
        }
    }, [user]);
    return (
        <>
            {(pathname === '/admin' || pathname === '/admin/logout') ? (
                <React.Fragment>
                    {children}
                </React.Fragment>
            ) : (
                <section className="flex h-full">
                    {/* Sidebar */}
                    <aside className="bg-gray-200 w-1/5">
                        <Image
                            src={logo}
                            alt="internet services"
                            width={150}
                            height={150}
                            className=' pl-12 py-6 hover:opacity-75'
                        />
                        <nav className="flex flex-col p-4">
                            <Link href="/admin/products">
                                <div className={`rounded-2xl py-2 px-4 xs:px-0 ${pathname === '/admin/products' ? 'bg-gray-900 text-white' : 'hover:bg-gray-300'}`}>
                                    Products
                                </div>
                            </Link>
                            <Link href="/admin/services">
                                <div className={`rounded-2xl py-2 px-4 xs:px-0 ${pathname === '/admin/services' ? 'bg-gray-900 text-white' : 'hover:bg-gray-300'}`}>
                                    Services
                                </div>
                            </Link>
                            <Link href="/admin/logout">
                                <div className={`rounded-2xl py-2 px-4 xs:px-0 hover:bg-gray-300`}>
                                    Logout
                                </div>
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="w-3/4 p-4">{children}</main>
                </section>
            )}
        </>
    );
}
