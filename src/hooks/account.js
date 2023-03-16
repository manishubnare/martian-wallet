/*global chrome*/
import { useMutation, useQuery } from "react-query";
import api from "../client/AptosClient";
import { Buffer } from "buffer";
import { WalletClient } from "@martiandao/aptos-web3-bip44.js";
window.Buffer = window.Buffer || Buffer;

export const useCreateNewAccount = () => {
    const { mutate: createWallet, isLoading } = useMutation(async() => {
        try {
            const accountMetaData = await api.createWallet();
            const { code, accounts } = accountMetaData;
            const walletAccount = await WalletClient.getAccountFromMetaData(code, accounts[0]);
            const address = walletAccount.address().toString();
            await api.airdrop(address, 2223456710000);
            return accountMetaData;
        } catch (error) {
            return error;
        }
    })
    return { createWallet, isLoading }
}

export const useStoreAccountDetails = () => {
    const { data, isLoading } = useQuery(['storeAccountDetails'], async() => {
        return new Promise((resolve) => {
            chrome.storage.local.get(['account_details'], (result) => {
              resolve(result.account_details || {});
            });
        });
    })
    return { data, isLoading }
}

export const useTransferCoins = () => {
    const {mutate: transferCoins, isLoading} = useMutation(async(payload) => {
        try {
            const { receiver_address, coin_quantity } = payload;
            let accountData = await new Promise((resolve, reject) => {
                chrome.storage.local.get(['account_details'], (result) => {
                  if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                  } else {
                    resolve(result.account_details);
                  }
                });
            });
            const { code, accounts } = accountData;
            const walletAccount = await WalletClient.getAccountFromMetaData(code, accounts[0]);
            await api.transfer(walletAccount, receiver_address, coin_quantity);
        } catch (error) {
            return error;
        }
    })

    return { transferCoins, isLoading }
}

export const useFetchCoinBalance = (accountDetails) => {
    const { data, isLoading } = useQuery(['fetchCoinBalance', accountDetails], async() => {
        const { accounts } = accountDetails;
        const address = accounts[0].address;
        const coinBalance = await api.getBalance(address);
        return coinBalance;
    })

    return { data, isLoading }
}

export const useFetchAccountCustomCoins = (accountDetails) => {
    const {data, isLoading} = useQuery(['fetchCustomCoins', accountDetails], async() => {
        const { accounts } = accountDetails;
        const address = accounts[0].address;
        const customCoinsData = await api.getCustomCoins(address);
        return customCoinsData;
    })

    return { data, isLoading }
}