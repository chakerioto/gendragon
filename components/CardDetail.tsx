"use client"
import React, { useEffect, useState } from 'react'
import SmallText from './typo/SmallText'
import SmallText1 from './typo/SmallText1'
import CopyButton from './CopyButton'
import { message } from 'antd'

interface props {
    itemId: string
}

const CardDetail = ({ itemId }: props) => {
    const [contractAddress, setContractAddress] = useState("1111")
    const [messageApi, contextHolder] = message.useMessage();

    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(contractAddress);
            messageApi.open({
                type: 'success',
                content: 'Successfully copied!',
            });
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    }

    useEffect(() => {
        setContractAddress("222")
    }, [])

    return (
        <div className='w-full p-4 rounded-[24px] border-solid border-[1px] bg-[#101010] border-[#818181]'>
            {/* CartAvatar */}
            {contextHolder}
            <div className='w-full h-[344px]'>
                <video src='/v1.mp4' autoPlay loop muted />
            </div>

            {/* CartInfo */}
            <div className="mt-4">
                <p className="font-[700] text-[24px uppercase ">God np #2032</p>
                <p className='text-[12px] font-[300] mt-4'>
                    The Monkey! by Matt Furie
                </p>
                <p className='text-[12px] font-[300] mt-4'>
                    The first generative NFT collection from the creator of PET NATIONS ALEXANDER NFT an original 1/1 Alexander
                </p>

                <div className='w-full mt-4'>
                    <div className='flex items-center justify-between mt-4 '>
                        <SmallText str='Type' />
                        <SmallText1 str='Silver' />
                    </div>
                    <div className='flex items-center justify-between mt-4 '>
                        <SmallText str='Token ID' />
                        <SmallText1 str='#2032' />
                    </div>
                    <div className='flex items-center justify-between mt-4 '>
                        <SmallText str='Contract Address' />
                        <div className='flex items-center gap-1'>
                            <SmallText1 str='0x942b...5c8a' />
                            <CopyButton onCopy={onCopy} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail