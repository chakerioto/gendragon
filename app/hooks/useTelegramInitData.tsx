
//@ts-nocheck
"use client"
import React, { useEffect, useState } from 'react'

const useTelegramInitData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        if (typeof window !== undefined && window.Telegram?.WebApp?.initData) {
            console.log(window.Telegram, 'window.te')
            alert(JSON.stringify(window.Telegram?.WebApp?.initData))
            const postInitDataRef = async () => {
                try {
                    const response = await fetch("https://api.genofdragon.com/api/auth/telegram/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ initData: window.Telegram.WebApp.initData || "" }),
                    });

                    const result = await response.json();
                    alert(JSON.stringify(result))
                    setData(result)
                    localStorage?.setItem("access_token", result.data?.access);
                    localStorage?.setItem("refresh", result?.data?.refresh);
                    localStorage?.setItem("ref_code", result?.data?.user?.ref_code);
                } catch (err) {
                    console.error("API call error:", err);
                }
            };
            postInitDataRef();
        }
    }, []);

    console.log('app data tele', data)

    return data

}

export default useTelegramInitData