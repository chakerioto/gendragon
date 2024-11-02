"use client"
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

const AppPage = () => {
    const router = useRouter()
    const pathName = usePathname();
    console.log(pathName, 'pathName')
    console.log(router, 'router')
    console.log(router, 'router')


    const auth = useAuth()


    console.log(auth, 'auth frome home')

    return (
        <div>
            <div className='content -mt-10 cursor-pointer'>
                <Image src='/banner.png' width={1032} height={229} alt='banner' />
            </div>
            <div className='flex flex-wrap mt-[44px] gap-x-[55px] gap-y-6'>
                <div>
                    <p className='text-[12px] font-[400] uppercase'>total supply</p>
                    <p className='text-[24px] font-[700] text-[#FFB422]'>20,000 NFT</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] uppercase'>MINT Price</p>
                    <p className='text-[24px] font-[700] text-[#FFB422]'>Free Mint</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] uppercase'>Blockchain</p>
                    <p className='text-[24px] font-[700] text-[#FFB422]'>Ethereum</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] uppercase'>WHITELIST MINT (FCFS)</p>
                    <p className='text-[24px] font-[700] text-[#FFB422]'>23rd JULY 7PM UTC</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] uppercase'>PUBLIC MINT (FCFS):</p>
                    <p className='text-[24px] font-[700] text-[#FFB422]'>23rd JULY 7PM UTC</p>
                </div>
            </div>

            {/* CardList */}
            <div className='mt-6 flex gap-6 flex-wrap'>
                {
                    new Array(3).fill(1).map((item, i) => {
                        return <div key={i} className='w-[328px] h-[466px] rounded-[10px] bg-gray'>
                            <div>
                                <p className='font-[500] text-[18px]'>god np silver</p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default AppPage