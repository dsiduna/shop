'use client'

import './globals.css'
import { Roboto } from 'next/font/google'
import LayoutProvider from './components/LayoutProvider/Index'
import { AuthContextProvider } from './components/context/AuthContext'
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
          <AuthContextProvider>
            <LayoutProvider>
              {children}
            </LayoutProvider>
          </AuthContextProvider>
        </Provider>
      </body>
    </html>
  )
}
