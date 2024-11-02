"use client"
import React, { useState } from 'react'
import SpinWheel from './components/SpinWheel'
import TotalRewards from './components/TotalRewards'
import History from './components/History'

const Wheel = () => {
    const [spinData, setSpinData] = useState(null)


    return (
        <div className='flex gap-6'>
            <div className='flex-1 border-solid border-[1px] border-[#818181] rounded-[24px]'>
                <SpinWheel />
            </div>

            {/* //Reward */}
            <div className='w-[296px] '>
                <p className='wildworld text-[18px] uppercase font-[500] text-center'>total reward</p>
                <div className='mt-2'>
                    <TotalRewards number={10000} remaining={5000} />
                </div>
                <div className='mt-4'>
                    <History />
                </div>
            </div>
        </div>
    )
}

export default Wheel