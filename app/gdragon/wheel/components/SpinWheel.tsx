"use client"

import React, { useState } from 'react'
import StartButton from './StartButton'
import LuckyWheel from './LuckyWheel'
import { dragonAPI } from '@/app/api/axios'

const SpinWheel = () => {
  const [isSpin, setIsSpin] = useState(false)
  const [spinResult, setSpinResult] = useState<null | number>(null)


  const onCallBackendSpin = async () => {
    try {
      const res = await dragonAPI.post('/api/spins/')
      console.log(res)
    } catch (error) {

    }
  }


  const onStartSpin = async () => {
    if (isSpin) return;

    try {
      setIsSpin(true)
      await onCallBackendSpin()
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