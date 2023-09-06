import React from 'react'
import Products from './Products'
import Services from './Services'

const DesktopMainPage = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <Products />
            </div>
            <div>
                <Services />
            </div>
        </div>
    )
}

export default DesktopMainPage