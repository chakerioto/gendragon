import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import HeaderRight from './HeaderRight'

const Header = () => {
    return (
        <div className='flex items-center justify-center border-b-[0.5px] border-white'>
            <div className='max-w-[1280px]  w-screen flex items-center h-[88px] justify-between'>
                <HeaderLogo />
                <HeaderMenu />
                <HeaderRight />
            </div>
        </div>
    )
}

export default Header