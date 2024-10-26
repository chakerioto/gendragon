import React from 'react'

interface ProgressBar {
    total: number,
    current: number
}
const ProgressBar = (props: ProgressBar) => {
    const { total, current } = props
    return (
        <div>
            <div className='flex justify-between items-center' >
                <p className='text-[#FFb422] text-[18px] uppercase'>consecutive</p>
                <div className='flex items-center gap-1'>
                    <p className='font-[700] text-[24px] text-[#FFb422] '>{current}</p>
                    <p className='font-[700] text-[24px] '>/</p>
                    <p className='font-[700] text-[24px] '>{total}</p>
                </div>
            </div>
            <div className='flex gap-1'>
                {
                    new Array(total).fill(1).map((item, i) => {
                        let itemStyle = "w-[33px] h-2"
                        if (i < current) {
                            itemStyle += " bg-[#FFb422]"
                        } else {
                            itemStyle += " bg-[#d9d9d9]"
                        }

                        return <div key={i} className={itemStyle}></div>
                    })
                }

            </div>
            <button className='w-full mt-[30px] py-[21px]  border-solid border-[1px] border-[#818181] rounded-[24px] hover:bg-yellow hover:text-black uppercase font-[700]'>
              upgrade
            </button>
        </div>
    )
}

export default ProgressBar