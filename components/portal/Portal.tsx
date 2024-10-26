import React from 'react'
interface PortalProps {
    onClose: () => void,
    spinResult: number | null
}
const Portal = ({ onClose, spinResult }: PortalProps) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className=' w-full h-full absolute inset-0 bg-black backdrop-blur-3xl opacity-30 z-10'></div>
            <div className='flex flex-col items-center gradient-background z-[11] justify-center   w-[571px] h-[334px] border-solid border-[1px] border-[#818181] rounded-[24px]'>
                <p className='uppercase'>Congratulations!</p>
                <p className='uppercase'>Wheel result is : {spinResult}</p>
                <p className='uppercase'>You received</p>
                <p className='mt-4 font-[700] text-[40px] text-[#ffb422]'>500</p>
                <div className='hover:bg-yellow hover:text-black border-solid border-[1px] border-[#818181] bg-[#101010] rounded-[24px] mt-6'>
                    <button className='font-[700] px-[36px] py-2 text-[12px]' onClick={onClose}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default Portal