import CardDetail from '@/components/CardDetail'
import CardInfoSmall from '@/components/CardInfoSmall'
import SmallText from '@/components/typo/SmallText'
import SmallText1 from '@/components/typo/SmallText1'
import DefaultDragon from '@/components/UI/DefaultDragon'
import React from 'react'

const page = () => {
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
            id: 2,
            type: 'Gold',
        },
    ]
    return (
        <div>
            <div className='flex items-center justify-between'>
                <CardInfoSmall title="Total Point" info="12,000,000" godcoin />
                <CardInfoSmall title="god NFT PASS SILVER" info="0" />
                <CardInfoSmall title="god NFT PASS gold" info="0" />
                <CardInfoSmall title="god NFT PASS diamond" info="0" />
            </div>


            <div className='flex gap-6'>
                {/* Passlist */}
                <div className='flex-1'>
                    <div className='mt-[44px] min-w-0 flex'>
                        <div className='flex-1'>
                            <div className='flex items-center justify-between'>
                                <p className='font-[500] text-[18px] wildworld'>NFT PASS</p>
                                <p className='text-[18px] uppercase text-[#FFB422]'>06 NFT(s) in your wallet</p>
                            </div>

                            {/* Pass List */}
                            <div className='bg-[#070707] flex justify-center flex-wrap p-6 gap-4 rounded-[24px] gap mt-1 '>
                                {
                                    pass.map((pass, i) => {
                                        if (i > 3) {
                                            return <div className='rounded-[10px] p-2 bg-[#101010] w-[184px] h-[276px]' key={i}>
                                                <div className='mt-[91px] flex justify-center flex-col items-center'>
                                                    <DefaultDragon />
                                                    <p className='font-[700] text-[#818181] mt-[6px]'>ADD NFT PASS</p>
                                                </div>
                                            </div>
                                        }


                                        return <div key={i} className=' p-2 pb-4  rounded-[10px] w-[184px]  bg-[#191919] border-solid border-[1px] boder-[#818181]'>
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

                    </div>
                </div>
                <div className='w-[376px] mt-[48px]'>
                    <p className='font-[500] text-[18px] wildworld uppercase text-center'>Detail</p>
                    <div className=''>
                        <CardDetail itemId='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page