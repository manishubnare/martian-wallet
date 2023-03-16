import usdCoinLogo from "./logo/usd-coin.svg";
import tetherCoinLogo from "./logo/tether-coin.svg";
import aptosLogo from "./logo/aptos.svg";

export const convertIntoHexaDecimalFormat = (hexString) => {
    const shortHex = hexString.slice(0, 6) + '...' + hexString.slice(-4);
    return shortHex;
}

export const copyToClipBoard = (contentToCopy) => {
    navigator.clipboard.writeText(contentToCopy);
}

export const convertToDecimal = (number, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    const result = (number / factor).toFixed(decimalPlaces);
    return Number(result);
}

export const convertToCoins = (coinNumber, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    const result = coinNumber * factor;
    return result;
}

export const getLogoByName = (coinName) => {
    if(coinName === "devUSD"){
      return usdCoinLogo;
    }else if(coinName === "devUSDT"){
      return tetherCoinLogo;
    }else{
      return aptosLogo;
    }
}