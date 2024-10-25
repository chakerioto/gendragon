"use client"
import { useState } from "react";

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const rewards = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const totalSections = rewards.length;
  const sectionAngle = 360 / totalSections; // The angle each section covers.

  const getRewardFromAPI = async () => {
    // Simulate an API call to get the reward
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * totalSections);
        resolve(rewards[randomIndex]);
      }, 1000); // Simulating a 1-second delay from the API
    });
  };

  const startSpin = async () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // Step 1: Call API to get the reward
    const reward:any = await getRewardFromAPI();

    // Step 2: Calculate how much to rotate so that the reward ends up at the 6 o'clock position
    const rewardIndex = rewards.indexOf(reward); // Get index of the reward

    // Calculate target rotation to make the selected reward land at the 6 o'clock (180 degrees) position
    const targetRotation = 180 - rewardIndex * sectionAngle;
    const fullSpins = 360 * 5; // 5 full spins for effect

    // Final rotation value
    const finalRotation = fullSpins + targetRotation;

    // Step 3: Spin the wheel
    setRotation(finalRotation);

    // Step 4: After the spin finishes, reset the state
    setTimeout(() => {
      setIsSpinning(false);
      alert(`You won ${reward}!`);
    }, 3500); // Spin duration (matches the CSS transition time)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Wheel container */}
      <div className="relative">
        {/* Wheel */}
        <div
          className={`transition-transform duration-[3.5s] ${isSpinning ? "ease-out" : ""}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="w-64 h-64 rounded-full border-8 border-yellow-500 relative">
            {/* Sections */}
            {rewards.map((reward, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transform rotate-[${index * sectionAngle}deg] origin-bottom-left`}
                style={{ transformOrigin: 'center', background: index % 2 === 0 ? "#fbbf24" : "#000000" }}
              >
                <span className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {reward}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pointer */}
        <div className="absolute top-[-30px] left-[50%] transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-white"></div>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={startSpin}
        className="mt-10 bg-gray-800 text-white py-2 px-6 rounded-lg focus:outline-none disabled:opacity-50"
        disabled={isSpinning}
      >
        Free Start
      </button>
    </div>
  );
};

export default SpinWheel;
