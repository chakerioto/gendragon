"use client"
import React, { useState } from 'react'
import Wallet from '../UI/Wallet'
import Wallet1 from '../UI/Wallet1'

const Address = () => {
    const [active, setActive] = useState(0)

    return (
        <div onMouseEnter={() => setActive(1)} onMouseLeave={() => setActive(0)} className='cursor-pointer'>
            {
                active === 1 ? <Wallet1 />
                    : <Wallet />
            }
        </div>
    )
}

export default Address