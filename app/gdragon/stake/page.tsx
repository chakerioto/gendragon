"use client"
import ActionButton1 from '@/components/stake/ActionButton1'
import SmallText from '@/components/typo/SmallText'
import SmallText1 from '@/components/typo/SmallText1'
import GodCoin1 from '@/components/UI/GodCoin1'
import { usePathname } from 'next/navigation'
import React from 'react'

const AppStakePage = () => {
    const pathName = usePathname()
    console.log(pathName, 'pathName')

    const pass = [
        {
            id: 1,
            type: 'Silver',
        },
        {
            id: 2,
            type: 'Gold',
        },
        {
            id: 3,
            type: 'Gold',
        },
        {
            id: 1,
            type: 'Silver',
        },
        {
            id: 2,
            type: 'Gold',
        },
        {
            id: 3,
            type: 'Gold',
        },
    ]

    return (
        <div>
            <div className='flex items-center content-between'>
                <div className="relative flex w-[424px] h-[80px] items-center">
                    <div className="absolute inset-0 bg-black opacity-90 z-[11]"></div>
                    <p className="uppercase text-[64px] font-[500] relative z-10">God pool</p>
                </div>
                <div className='flex-1 px-6 py-2 bg-[#070707]'>
                    <div className='flex mt-2 ml-[100px]  gap-1 items-center'>
                        <p className='text-[14px] text-[#818181]'>Stacked:</p>
                        <p className='font-[700] text-[#FFB422]'>159,000 GOD</p>
                    </div>
                    {/* Progress Bar */}
                    <div className='mt-1 relative'>
                        <div className='w-full bg-white h-2 rounded-sm'>
                        </div>
                        <div className=' absolute w-[100px] bg-white h-2 rounded-sm z-10 inset-0 bg-yellow'>
                        </div>
                    </div>
                    <div className='flex mt-2 justify-end gap-1 items-center'>
                        <p className='text-[14px] text-[#818181]'>Total:</p>
                        <p className='font-[700] text-[#FFB422]'>20,000,000 GOD</p>
                    </div>
                </div>
            </div>
            {/* NFT PASS */}
            <div className='flex '>
                <div className='mt-[44px] flex-1  min-w-0'>
                    <div className='flex items-center justify-between'>
                        <p className='font-[500] text-[18px]'>NFT PASS</p>
                        <p className='text-[18px] uppercase text-[#FFB422]'>06 NFT(s) in your wallet</p>
                    </div>

                    {/* Pass List */}
                    <div className='bg-[#070707] flex justify-center flex-wrap p-6 rounded-[24px] gap-5 mt-1 min-h-[624px]'>
                        {
                            pass.map((pass, i) => {
                                return <div key={i} className=' p-2 pb-4  rounded-[10px] w-[184px] bg-[#191919] border-solid border-[1px] boder-[#818181]'>
                                    <div className='w-[168px h-[168px]'>
                                        <video src='/v1.mp4' autoPlay loop muted />
                                    </div>
                                    <div className='flex flex-col items-center justify-center mt-[6px]'>
                                        <p className='font-[700]'>
                                            GOD NP #2032
                                        </p>
                                        {
                                            i % 2 ? <div className='rounded-[40px] py-2 px-[30px] mt-2  border-solid border-[1px] border-white'>
                                                <p className='text-[12px] font-[700] text-center'>
                                                    STAKED
                                                </p>
                                            </div> :
                                                <div className='w-full'>
                                                    <div className='flex items-center justify-between mt-2 '>
                                                        <SmallText str='Type' />
                                                        <SmallText1 str='Silver' />
                                                    </div>
                                                    <div className='flex items-center justify-between mt-2 '>
                                                        <SmallText str='Token ID' />
                                                        <SmallText1 str='#2032' />
                                                    </div>

                                                </div>
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                {/* Speed Skating */}
                <div className='w-[355px] ml-[30px] mt-[122px]'>
                    <div className='text-[18px] uppercase'>
                        <p>
                            speed skating
                        </p>
                    </div>
                    <div className='rounded-[24px] mt-2 bg-[#070707] p-3 border-solid border-[1px] border-white'>
                        <div className='bg-[#101010] rounded-t-[18px] p-2'>
                            <p className='uppercase text-[12px]'>god NFT PASS SILVER</p>
                            <p className='font-[700] text-[24px] text-[#ffb422]'>1000 GOD/day</p>
                        </div>
                        <div className='bg-[#101010] rounded-t-[18px] p-2 mt-2'>
                            <p className='uppercase text-[12px]'>god NFT PASS SILVER</p>
                            <p className='font-[700] text-[24px] text-[#ffb422]'>1000 GOD/day</p>
                        </div>
                        <div className='bg-[#101010] rounded-t-[18px] p-2 mt-2'>
                            <p className='uppercase text-[12px]'>god NFT PASS SILVER</p>
                            <p className='font-[700] text-[24px] text-[#ffb422]'>1000 GOD/day</p>
                        </div>
                    </div>
                    <div className='mt-6 bg-[#ffb422] p-2 rounded-2xl flex gap-2'>
                        <div>
                            <div className=' p-2 pb-4  rounded-[10px] w-[184px] bg-[#191919] border-solid border-[1px] boder-[#818181]'>
                                <div className='w-[168px h-[168px]'>
                                    <video src='/v1.mp4' autoPlay loop muted />
                                </div>
                                <div className='flex flex-col items-center justify-center mt-[6px]'>
                                    <p className='font-[700]'>
                                        GOD NP #2032
                                    </p>
                                    <div className='w-full'>
                                        <div className='flex items-center justify-between mt-2 '>
                                            <SmallText str='Type' />
                                            <SmallText1 str='Silver' />
                                        </div>
                                        <div className='flex items-center justify-between mt-2 '>
                                            <SmallText str='Token ID' />
                                            <SmallText1 str='#2032' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-black text-[18px]'>Stacked</p>
                            <p className='text-[12px] text-black mt-4'>Time</p>
                            <p className='font-[700] text-[14px] text-black'>15d 3h 15m</p>
                            <p className='text-[12px] text-black mt-2'>Speed</p>
                            <p className='font-[700] text-[14px] text-black'>1000 GOD/day</p>
                            <p className='text-[12px] text-black mt-2'>Claimable</p>
                            <div className='flex gap-2 items-center'>
                                <p className='font-[700] text-[24px] text-black'>15000</p>
                                <GodCoin1 />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <ActionButton1 onClick={() => { }} msg={'Unstake'} />
                                <ActionButton1 onClick={() => { }} msg={'claim'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppStakePage