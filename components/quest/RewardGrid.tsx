import Image from 'next/image';
import Point from '../gdragon/Point';

const RewardCard = ({ title, reward, isCompleted }: any) => {
    return (
        <div className="w-[184px] h-[299px] flex flex-col bg-[#101010] rounded-[10px] relative">
            <div className=" mt-[35px] w-[124px] h-[124px] mx-auto hover:scale-110 transition-all ease-in-out transitio">
                <Image width={124} height={124} alt='img' src={"/pepe.jpg"} ></Image>
            </div>

            <div className="mt-[15px] flex flex-col items-center ">
                <p className="text-white font-[700]">{title}</p>
                <div className='w-full p-2'>
                    <p className='text-[14px] text-[#818181] text-center flex items-center gap-1'>
                        Reward: <span className="text-[#FFB422]"></span>
                    </p>
                    <Point hideGod />
                </div>
                <button
                    className={`px-10 text-[12px] font-[700] rounded-[40px] border-solid border-[1px] cursor-pointer py-2 border-white ${isCompleted
                        ? 'bg-yellow text-black '
                        : 'bg-gray text-white '
                        }`}
                >
                    {isCompleted ? 'COMPLETED' : 'START'}
                </button>
            </div>
        </div>
    );
};

const RewardsGrid = () => {
    const rewards = [
        { title: 'Like other post', reward: '15,000', isCompleted: true },
        { title: 'Follow Discord', reward: '15,000', isCompleted: false },
        { title: 'Follow Discord', reward: '15,000', isCompleted: false },
        { title: 'Follow Discord', reward: '15,000', isCompleted: false },
        { title: 'Like other post', reward: '15,000', isCompleted: true },
        { title: 'Follow Discord', reward: '15,000', isCompleted: false },
    ];

    return (
        <div
            className="w-[648px] bg-[#070707] border-solid border-[1px] border-[#818181] rounded-2xl"
            style={{ minHeight: '670px' }}
        >
            <div className="grid grid-cols-3 gap-6 p-6">
                {rewards.map((reward, index) => (
                    <RewardCard
                        key={index}
                        title={reward.title}
                        reward={reward.reward}
                        isCompleted={reward.isCompleted}
                    />
                ))}
            </div>
        </div>
    );
};

export default RewardsGrid;