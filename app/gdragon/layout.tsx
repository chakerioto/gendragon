import Address from '@/components/gdragon/Address'
import FollowUS from '@/components/gdragon/FollowUS'
import LeftBar from '@/components/gdragon/LeftBar'
import Point from '@/components/gdragon/Point'
import GrayText from '@/components/typo/GrayText'
import YellowText1 from '@/components/typo/YellowText1'
import Image from 'next/image'
import { ReactNode } from 'react'

const AppLayout = ({
    children,
}: {
    children: ReactNode
}) => {
    return (
        <div className='flex items-center justify-center mt-[47px] pb-[72px]'>
            <div className='max-w-[1280px] pl-4 xl:pl-0   w-screen h-full flex flex-wrap'>
                <div>
                    <div>
                        <LeftBar />
                    </div>
                    <div className='w-[224px] mt-[50px] cursor-pointer'>
                        <Image src='/mint.png' width={224} height={140} alt='mint' />
                    </div>
                    <div className='py-2 px-4 mt-2 bg-gray w-[224px] rounded-xl flex items-center content-between'>
                        <div className='flex-1'>
                            <YellowText1 mes={`Follow us`} />
                        </div>
                        <FollowUS />
                    </div>
                    <div className='py-2 px-4 mt-2 bg-gray w-[224px] rounded-xl flex items-center content-between'>
                        <div className='flex-1 '>
                            <YellowText1 mes={`Address Wallet`} />
                            <div className='mt-2'>
                                <GrayText msg='0x93f0...b15d5a' />
                            </div>
                        </div>
                        <Address />
                    </div>
                    <div className='py-2 px-4 mt-2 bg-gray w-[224px] rounded-xl '>
                        <div className='flex-1'>
                            <YellowText1 mes={`Total Point`} />
                        </div>
                        <div className='mt-2'>
                            <Point />
                        </div>
                    </div>
                </div>
                <div className='flex-1 pl-6'>{children}</div>
            </div>
        </div>
    )
}

export default AppLayout