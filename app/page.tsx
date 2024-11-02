//@ts-nocheck
"use client"
import TelegramButton from "@/components/UI/TelegramButton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useTelegramInitData from "./hooks/useTelegramInitData";

export default function Home() {
  const initData = useTelegramInitData();
  // const spinStatusCall= useSelector(spinStatus);
  const auth = useSelector(state => state.auth)

  console.log(initData, 'initData')


  const onTelegramAuth = (user) => {
    console.log("User info:", user);
    // Here you can use the user information (e.g., save it in your app's state or send it to your backend)
  };


  return (
    <div>
      {
        initData?.data ?
          <div className="text-[white]">{initData}</div> : <div className="text-white">null</div>
      }
      {/* <TelegramButton /> */}
    </div>
  );

  // const checkTokenExpiration = () => {
  //   const token = localStorage.getItem("access_token");
  //   if (!token) return;

  //   const decoded: { exp: number } = jwtDecode(token);
  //   const currentTime = Math.floor(Date.now() / 1000);
  //   const timeRemaining = decoded.exp - currentTime;

  //   console.log('timeRemaining :>> ', timeRemaining);
  //   if(timeRemaining > 60) {
  //     dispatch(setValidToken());
  //   }

  //   if (timeRemaining <= 120) {
  //     setRefreshCall(true);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     checkTokenExpiration();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);


  // useEffect(() => {
  //   if (window.Telegram?.WebApp?.initData) {
  //     const postInitDataRef = async () => {
  //       try {
  //         const response = await fetch("https://api.genofdragon.com/api/auth/telegram/", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ initData: window.Telegram.WebApp.initData || "" }),
  //         });

  //         const res = await response.json();
  //         setResult(res)
  //         console.log(result, 'res')
  //         localStorage.setItem("access_token", result.data.access);
  //         localStorage.setItem("refresh", result.data.refresh);
  //         localStorage.setItem("ref_code", result.data.user.ref_code);
  //       } catch (err) {
  //         console.error("API call error:", err);
  //       }
  //     };

  //     postInitDataRef();
  //   }
  //   // }, [spinStatusCall]);
  // }, []);

  // useEffect(() => {
  //   if (window.Telegram?.WebApp?.initData) {
  //     const firstLayerInitData = Object.fromEntries(
  //       new URLSearchParams(window.Telegram.WebApp.initData)
  //     );

  //     const initData: Record<string, string> = {};
  //     for (const key in firstLayerInitData) {
  //       try {
  //         initData[key] = JSON.parse(firstLayerInitData[key]);
  //       } catch {
  //         initData[key] = firstLayerInitData[key];
  //       }
  //     }

  //     setData(initData);

  //     const postInitData = async () => {
  //       try {
  //         const response = await fetch("https://api.genofdragon.com/api/auth/telegram/", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ initData: window.Telegram.WebApp.initData || "" }),
  //         });

  //         if (!response.ok) {
  //           setRefreshCall(true);
  //           throw new Error(`Error: ${response.status} ${response.statusText}`);
  //         }

  //         const result = await response.json();
  //         localStorage.setItem("access_token", result.data.access);
  //         localStorage.setItem("refresh", result.data.refresh);
  //         localStorage.setItem("ref_code", result.data.user.ref_code);
  //         if (result.data) {
  //           dispatch(setFirstCall());
  //         }
  //       } catch (err) {
  //         console.error("API call error:", err);
  //         setRefreshCall(true);
  //       }
  //     };

  //     postInitData();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (refreshCall) {
  //     const postRefreshToken = async () => {
  //       try {
  //         const refreshToken = localStorage.getItem("refresh");
  //         const response = await fetch("https://api.genofdragon.com/api/auth/token/refresh/", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ refresh: refreshToken || "" }),
  //         });

  //         if (!response.ok) {
  //           throw new Error(`Error: ${response.status} ${response.statusText}`);
  //         }

  //         const result = await response.json();

  //         if (result) {
  //           localStorage.setItem("access_token", result.access);
  //           localStorage.setItem("refresh", result.refresh);
  //           dispatch(setRefreshCallApi());
  //         }

  //         setRefreshCall(false);
  //       } catch (err) {
  //         console.error("API call error:", err);
  //       }
  //     };

  //     postRefreshToken();
  //   }
  // }, [refreshCall]);



}
