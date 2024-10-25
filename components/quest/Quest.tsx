import React from 'react';

const CountdownTimer = () => {
    return (
        <div className="flex items-center bg-[#070707] rounded-lg text-white p-4">
            <div className="mr-4">
                <p className="text-[#ffb422] font-medium">Quest time </p>
                <p className="text-[#ffb422] font-medium">ends in: </p>
            </div>
            <div className="flex space-x-4">
                <div className="flex flex-col items-center bg-[#101010] p-2 rounded-md w-[68px]">
                    <span className="text-3xl font-bold">04</span>
                    <span className="text-[10px] text-[#818181] font-[300]">DAYS</span>
                </div>
                <div className="flex flex-col items-center bg-[#101010] p-2 rounded-md w-[68px]">
                    <span className="text-3xl font-bold">24</span>
                    <span className="text-[10px] text-[#818181] font-[300]">HOURS</span>
                </div>
                <div className="flex flex-col items-center bg-[#101010] p-2 rounded-md w-[68px]">
                    <span className="text-3xl font-bold">32</span>
                    <span className="text-[10px] text-[#818181] font-[300]">MINUTES</span>
                </div>
                <div className="flex flex-col items-center bg-[#101010] p-2 rounded-md w-[68px]">
                    <span className="text-3xl font-bold">20</span>
                    <span className="text-[10px] text-[#818181] font-[300]">SECONDS</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
