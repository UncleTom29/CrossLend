/* -----------------------------------------------------------------------------------------

    THSI FILE CONTAINS THE IMPORTANT WEB3/UI CONFIGURATIONS FOR THE APP

----------------------------------------------------------------------------------------- */
import React from 'react';

type AppSettings = {

    chainId: number;
    currency: string;
    nativeCurrency: string;
    chainName: string;
}

export const appSettings:AppSettings = {

    /* THE CHAIN ID of NETWORK WHERE YOUR CONTRACTS ARE DEPOLYED ON, GET IT FROM HERE https://chainlist.org */
    chainId: 4157,

    /* THE CURRENT APP CURRENCY THAT YOUR APP WILL APPEAR BESIDES EVERY PRICE */
    currency: 'XFI',

    /* THE NATIVE CURRENCY THAT YOUR APP WILL USE FOR GAS FEES */
    nativeCurrency: 'XFI',

    chainName: "CrossFi Testnet"

};
