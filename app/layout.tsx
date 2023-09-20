import './globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './Redux/provider'
import LayoutProvider from './components/LayoutProvider/Index'
import { IsClientCtxProvider } from './components/LayoutProvider/IsClientProvider'


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
        <IsClientCtxProvider>
          <Providers>
            <LayoutProvider>
              {children}
            </LayoutProvider>
          </Providers>
        </IsClientCtxProvider>
      </body>
    </html>
  )
}
