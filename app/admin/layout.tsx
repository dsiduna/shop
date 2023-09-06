'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <>
            {(pathname === '/admin' || pathname === '/admin/logout') ? (
                <React.Fragment>
                    {children}
                </React.Fragment>
            ) : (
                <section className="flex h-[100vh]">
                    {/* Sidebar */}
                    <aside className="bg-gray-200 w-1/4">
                        <nav className="flex flex-col p-4">
                            <Link href="/admin/products">
                                <div className="py-2 px-4 hover:bg-gray-300">Products</div>
                            </Link>
                            <Link href="/admin/services">
                                <div className="py-2 px-4 hover:bg-gray-300">Services</div>
                            </Link>
                            <Link href="/logout">
                                <div className="py-2 px-4 hover:bg-gray-300">Logout</div>
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
