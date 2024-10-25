import React from 'react';
import Point from '../gdragon/Point';
import ActionButton2 from '../stake/ActionButton2';

const DailyCheckInCard = () => {
    return (
        <div className=" relative mt-6 w-[360px] h-[670px] bg-black border border-[#818181] rounded-[24px] p-6 space-y-4">
            <p className={`"absolute top-10 text-white  text-lg z-10 font-[500] wildworld`}>DAILY CHECK-IN</p>
            <div className=" rounded-lg  w-[312px] h-[622px] ">
                <video
                    style={{
                        height: '70%'
                    }}
                    src="/v4.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            <div className='absolute bottom-5'>
                <div className="text-yellow font-medium">COMPLETED</div>

                <div className="text-white text-xl font-semibold"><span className='text-yellow'>2</span>/7</div>

                <div className="flex mt-[13px] gap-1">
                    {[...Array(7)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 w-8  ${i < 2 ? 'bg-yellow' : 'bg-[#d9d9d9]'}`}
                        />
                    ))}
                </div>

                <div className="text-white font-medium mt-4">REWARD</div>
                <Point textSize='24' />
                <div className='mt-[13px]'>
                    <ActionButton2 msg="CHECK-IN" />
                </div>
            </div>


        </div>
    );
};

export default DailyCheckInCard;
