import './globals.css'
import { Roboto } from 'next/font/google'
import LayoutProvider from './components/LayoutProvider/Index'
import { Provider } from 'react-redux'
import configureAppStore from './Redux/store/configureStore'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})
export const metadata = {
  title: 'Internet Solutions',
  description: 'We sell quality and brand new mobile phones, tablets, laptops and routers',
}

const { store, persistor } = configureAppStore();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider store={store}>
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </Provider>
      </body>
    </html>
  )
}
