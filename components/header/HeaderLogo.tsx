import Image from 'next/image'
import React from 'react'

const HeaderLogo = () => {
    return (
        <Image
            src="/images/HeaderLogo.png"
            alt="logo"
            width={270}
            height={48}
        />
    )
}

export default HeaderLogo