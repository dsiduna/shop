"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export default function Header(props: any) {
    const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
    return (
        <header className='sticky top-0 '>
            <nav
                className={
                    (props.transparent
                        ? 'top-0 absolute z-50 w-full'
                        : 'relative shadow-lg bg-white shadow-lg') +
                    ' flex flex-wrap items-center justify-between px-2 py-3 '
                }
            >
                <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt="internet services"
                                width='90'
                                height='90'
                                className=' pl-12   hover:opacity-75'
                            />
                        </Link>
                        <button
                            className='cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-cart"
                                viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
                        </button>
                        <button
                            className='cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                className='w-16 h-16 fill-gray-800 '
                                viewBox='0 0 32 32'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
                        }
                        id='example-navbar-warning'
                    >
                        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                            <li className='flex items-center'>
                                <Link href='/'>
                                    <button
                                        className='active:text-gray-600 hover:text-[#005b60] text-sm font-bold  text-gray-800  px-4  rounded  outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                        type='button'
                                        style={{ transition: 'all .15s ease' }}
                                        onClick={() => setNavbarOpen(!navbarOpen)}
                                    >
                                        <i className='fas fa-arrow-alt-circle-down'></i>{' '}
                                        Home
                                    </button>
                                </Link>
                            </li>
                            <li className='flex items-center'>
                                <Link href='/about'>
                                    <button
                                        className='active:text-gray-600 hover:text-[#005b60] text-sm font-bold  text-gray-800  px-4  rounded  outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                        type='button'
                                        style={{ transition: 'all .15s ease' }}
                                        onClick={() => setNavbarOpen(!navbarOpen)}
                                    >
                                        <i className='fas fa-arrow-alt-circle-down'></i>{' '}
                                        About Us
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}


