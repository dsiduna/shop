'use client'

import './globals.css'
import { Roboto } from 'next/font/google'
import LayoutProvider from './components/LayoutProvider/Index'
import { Provider } from 'react-redux'
import configureAppStore from './Redux/store/configureStore'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

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
