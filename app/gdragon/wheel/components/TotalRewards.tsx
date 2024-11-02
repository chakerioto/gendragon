import GodCoin1 from '@/components/UI/GodCoin1'
import { formatNumber } from '@/utils/helpers'

const TotalRewards = ({ number, remaining }: any) => {
    return (
        <div className='border-solid border-[1px] p-2 border-[#818181] rounded-[24px] bg-[#070707]'>
            <div className='w-full bg-[#101010] rounded-t-[18px] p-2'>
                <p className=' font-[300] text-[12px] uppercase'>
                    Reward
                </p>
                <p className='font-[700] text-[24px] flex gap-2 text-[#ffb422] items-center'>
                    {/* 24,450,500 */}
                    {formatNumber(number)}
                    <span>
                        <GodCoin1 />
                    </span>
                </p>

            </div>

            <div className=' mt-2 w-full bg-[#101010] rounded-b-[18px] p-2'>
                <p className=' font-[300] text-[12px] uppercase'>
                    number of spins
                </p>
                <p className=' text-[24px] font-[700] flex gap-2 text-[#ffb422]'>
                    {/* 62 */}
                    {formatNumber(remaining)}
                </p>

            </div>
        </div>
    )
}

export default TotalRewards