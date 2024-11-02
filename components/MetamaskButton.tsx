//@ts-nocheck
"use client"
import React, { useState } from 'react'
import Avatar from './header/Avatar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ethers } from 'ethers';
import { BASE_URL } from '@/app/const';
import moment from 'moment';
import { dragonAPI } from '@/app/api/axios';
import { useAuth } from '@/app/hooks/useAuth';

const MetamaskButton = () => {
    const [account, setAccount] = useState(null);
    const { login } = useAuth();
    const [walletData, setWalletData] = useState({
        account: '',
        message: '',
        signature: ''
    });
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState('');

    const notify = () => toast.warn("MetaMask is not installed. Please install MetaMask to use this feature.");
    const MESSAGE_TO_SIGN = moment().valueOf().toString() ?? "Default message";

    const connectWallet = async () => {
        try {
            // Check if MetaMask is installed
            if (!window.ethereum) {
                throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
            }

            // Request account access
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            const account = accounts[0];
            // setIsConnected(true);

            // Get signature
            await signMessage(account);

        } catch (err) {
            setError(err.message);
        }
    };


    const signMessage = async (account) => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            // Sign the message
            const signature = await signer.signMessage(MESSAGE_TO_SIGN);

            // You can send this data to your backend
            const dataForBackend = {
                account: account,
                message: MESSAGE_TO_SIGN,
                signature: signature
            };

            console.log('Data ready for backend:', dataForBackend);

            const response = await dragonAPI.post(`/api/auth/evm/`, dataForBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { user, access, refresh } = response.data.data;
            debugger
            // Store auth data
            login(user, access, refresh);

            // Redirect to dashboard or home page
            navigate('/gdragon');

            console.log(response, 'res')
            console.log('Backend response:', result);

        } catch (err) {
            setError(err.message);
        }
    };


    if (walletData.account) {
        return (
            <div className='ml-8 flex justify-center items-center'>
                <Avatar />
                <div className='ml-4'>
                    <p>Wade Warren</p>
                    <p className=' text-yellow'>123</p>
                </div>
            </div>
        )
    }


    return <div className='ml-4'>
        <button onClick={connectWallet} className='px-4 py-2 border-solid border-[1px] border-gray rounded-[24px] hover:bg-yellow hover:text-white'>
            Connect Wallet
        </button>
    </div>



}

export default MetamaskButton