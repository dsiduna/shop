'use client'

import { useMediaQuery } from 'react-responsive'
import MobileMainPage from './MobileMainPage'
import DesktopMainPage from './DesktopMainPage'

export default function MainPageView() {
    const isMobile: boolean = useMediaQuery({ query: '(max-width: 800px)' })
    return (
        <main className="min-h-[80vh]">
            {isMobile ? (
                <MobileMainPage />
            ) : (
                <DesktopMainPage />
            )}
        </main>
    )
}