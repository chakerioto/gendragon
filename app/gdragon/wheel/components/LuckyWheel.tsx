"use client";
import Portal from '@/components/portal/Portal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface LuckyWheelProps {
    spinResult: number | null;
    setIsSpin: React.Dispatch<React.SetStateAction<boolean>>;
    isSpin: boolean
}

const LuckyWheel = ({ spinResult, setIsSpin, isSpin }: LuckyWheelProps) => {
    const [rotateDeg, setRotateDeg] = useState(0);
    const spinSpeed = 5; // Speed factor for the spin duration
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (spinResult !== null) {
            setIsSpin(true);
            // Calculate the new rotation degree with extra rotations for effect
            const randomSpeed = Math.floor(Math.random() * (10 - spinSpeed + spinSpeed)) + spinSpeed
            setRotateDeg(prev => prev + spinResult + 360 * randomSpeed);
            const resetTimer = setTimeout(() => {
                setIsSpin(false)
                setRotateDeg(prev => prev % 360);
                setShowModal(true)
            }, 8000);

            // Clean up timeout on unmount
            return () => clearTimeout(resetTimer);
        }
    }, [spinResult]);

    return (
        <div
            className='mt-[124px]'
            style={{
                transform: `rotate(${rotateDeg}deg)`,
                transition: isSpin ? `transform ${spinSpeed}s ease-in-out` : 'none',
            }}
        >
            <Image src='/wheel.png' width={315.43} height={315.43} alt='wheel' />
            {showModal && createPortal(
                <Portal spinResult={spinResult} onClose={() => setShowModal(false)} />,
                document.body
            )}
        </div>
    );
};

export default LuckyWheel;
