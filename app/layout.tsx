import './globals.css'
import { Roboto } from 'next/font/google'
import LayoutProvider from './components/LayoutProvider/Index'


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})
export const metadata = {
  title: 'Internet Solutions',
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
