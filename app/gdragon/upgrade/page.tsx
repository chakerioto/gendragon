"use client"
import ProgressBar from '@/components/ProgressBar'
import SmallText from '@/components/typo/SmallText'
import SmallText1 from '@/components/typo/SmallText1'
import DefaultDragon from '@/components/UI/DefaultDragon'
import GodCoin1 from '@/components/UI/GodCoin1'
import Triangle from '@/components/UI/Triangle'

const UpgradePage = () => {
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
    ]
    return (
        <div className='mt-5'>
            <div className='rounded-[24px] border-solid border-[1px] w-full p-6 bg-[#070707] flex '>
                <div>
                    <div className='w-full flex flex-wrap gap-[16px]'>
                        {
                            new Array(3).fill(1).map((item, index) => {
                                return <div className='rounded-[10px] p-2 bg-[#101010] w-[184px] h-[276px]' key={index}>
                                    <div className='mt-[91px] flex justify-center flex-col items-center'>
                                        <DefaultDragon />
                                        <p className='font-[700] text-[#818181] mt-[6px]'>ADD NFT PASS</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>


                    <div className='flex gap-4'>
                        <div className='mt-4 p-2 bg-[#101010] rounded-[10px] cursor-pointer flex-1'>
                            <div className='flex items-center justify-between'>
                                <p className='uppercase text-[12px]'>next level</p>
                                <div className='flex items-center gap-2 '>
                                    <Triangle />
                                    <p className='font-[700] text-[24px] text-[#ffb422] uppercase '>Gold</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className='mt-4 p-2 bg-[#101010] rounded-[10px] cursor-pointer flex-1 '>
                            <div className='flex items-center justify-between'>
                                <p className='uppercase text-[12px]'>Consumed</p>
                                <div className='flex items-center gap-2 '>
                                    <p className='font-[700] text-[24px] text-[#ffb422] uppercase '>500.0000</p>
                                    <GodCoin1 />
                                </div>
                            </div>
                            <div></div>
                        </div>


                    </div>


                </div>
                <div className='pl-4'>
                    <p className='wildworld font-[500] text-[18px] uppercase'>add ingredients</p>
                    <p className='text-[#FFB422] uppercase text-[18px]'>0 NFT(s) added</p>
                    <ul className='list-disc ml-4 mt-4'>
                        <li className="text-[#818181] mt-1 text-[12px]">NFT PASS used as upgrade materials will be consumed</li>
                        <li className="text-[#818181] mt-1 text-[12px]">Each upgrade will consume 3 NFTs of the same level</li>
                        <li className="text-[#818181] mt-1 text-[12px]">Upgrading will also consume some of your points</li>
                        <li className="text-[#818181] mt-1 text-[12px]">Within 10 times the upgrade will definitely be successful</li>
                        <li className="text-[#818181] mt-1 text-[12px]">Upgrades have a failure rate</li>
                    </ul>

                    <div className='mt-[25px]'>
                        <ProgressBar
                            current={2}
                            total={10}
                        />
                    </div>

                </div>
            </div>

            <div className='flex '>
                <div className='mt-[44px] flex-1  min-w-0'>
                    <div className='flex items-center justify-between'>
                        <p className='font-[500] text-[18px]'>NFT PASS</p>
                        <p className='text-[18px] uppercase text-[#FFB422]'>06 NFT(s) in your wallet</p>
                    </div>

                    {/* Pass List */}
                    <div className='bg-[#070707] flex justify-center flex-wrap p-6 gap-4 rounded-[24px] gap mt-1 '>
                        {
                            pass.map((pass, i) => {
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
    )
}

export default UpgradePage