import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
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
      <body className={lato.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
