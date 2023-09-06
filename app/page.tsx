'use client'

import Image from 'next/image'
import Banner from './components/mainPage/Banner'
import { useMediaQuery } from 'react-responsive'
import MobileMainPage from './components/mainPage/MobileMainPage'
import DesktopMainPage from './components/mainPage/DesktopMainPage'

export default function Home() {
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <main className="min-h-[80vh]">
      <Banner />
      {isMobile ? (
        <MobileMainPage />
      ) : (
        <DesktopMainPage />
      )}
    </main>
  )
}
