'use client'

import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Lato } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})
export const metadata = {
  title: 'Internet Services',
  description: 'We sell quality and brand new mobile phones, tablets, laptops and routers',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}

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

