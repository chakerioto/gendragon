"use client"

import React, { useState } from 'react'
import StartButton from './StartButton'
import LuckyWheel from './LuckyWheel'

const SpinWheel = () => {
  const [isSpin, setIsSpin] = useState(false)
  const [spinResult, setSpinResult] = useState<null | number>(null)


  const onStartSpin = async () => {
    if (isSpin) return;

    try {
      setIsSpin(true)
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Success!");
        }, 1000); // 1000 milliseconds = 1 second
      });
      //fake 180
      const randomInteger = Math.floor(Math.random() * 100) + 1;
      const result = randomInteger
      setSpinResult(result)
    } catch (error) {
      setIsSpin(false)
      console.log(error)
    }
  }

  return (
    <div className='flex items-center w-full flex-col pb-[53px]'>
      <LuckyWheel isSpin={isSpin} setIsSpin={setIsSpin} spinResult={spinResult} />
      <StartButton
        onClick={onStartSpin}
        isSpin={isSpin}
      />
    </div>
  )
}

export default SpinWheel