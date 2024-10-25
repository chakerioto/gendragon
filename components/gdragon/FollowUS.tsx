"use client"
import React, { useState } from 'react'
import TeleGram from '../UI/TeleGram'
import TeleGram1 from '../UI/TeleGram1'
import X from '../UI/X'
import X1 from '../UI/X1'

const FollowUS = () => {
  const [active, setActive] = useState(0)
  return (
    <div className='flex items-center gap-2'>
      <div onMouseEnter={() => setActive(1)} onMouseLeave={() => setActive(0)} className='cursor-pointer'>
        {
          active === 1 ?
            <TeleGram1 /> :
            <TeleGram />
        }
      </div>
      <div onMouseEnter={() => setActive(2)} onMouseLeave={() => setActive(0)} className='cursor-pointer'>
        {
          active === 2 ?
            <X1 /> :
            <X />
        }
      </div>
    </div>
  )
}

export default FollowUS