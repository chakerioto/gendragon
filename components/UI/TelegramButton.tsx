//@ts-nocheck
"use client"
import React from 'react'
import TelegramLoginButton from 'react-telegram-login';

const TelegramButton = () => {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };

  return (
    <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="@GenDragonBot" />
  )
}

export default TelegramButton