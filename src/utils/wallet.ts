// Copyright 2022 The Aquachain Authors. All rights reserved.
// Use of this source code is governed by the MIT license

export const switchNetwork = async (chainId: number): Promise<boolean> => {
    const provider = (window as any).ethereum;
    if (!provider) {
        throw new Error("no web3 provider")
    }
    try {
        return await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${chainId.toString(16)}` }]
        })
    } catch (switchError: any) {
        // To-be-standardized "unrecognized chain ID" error
        if (switchError.code === 4902) {
            return addNetwork(chainId)
        }
        return false
    }
}

async function addNetwork(chainId: number): Promise<boolean> {
    const provider = (window as any).ethereum;
    if (!provider) {
        return false
    }
    return await provider.request({
        method: 'wallet_addEthereumChain',
        params: [chainData[chainId]],
    });
}

const chainData: {
    [chainId: number]: {
        chainId: string | number;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    }
} = {
    61717561: {
        chainId: `0x${Number(61717561).toString(16)}`, // rehexed lmao
        chainName: "Aquachain",
        nativeCurrency: {
            name: "Aquachain",
            symbol: "AQUA",
            decimals: 18,
        },
        rpcUrls: ["https://c.onical.org"],
        blockExplorerUrls: ["https://aquachain.github.io/explorer/#/"],
    },
    56: {
        chainId: `0x${Number(56).toString(16)}`,
        chainName: "Binance Smart Chain",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed1.binance.org/", "https://bsc-dataseed2.binance.org/", "https://bsc-dataseed3.binance.org/", "https://bsc-dataseed4.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com/"],
    },
}

export const watchAsset = async (
    tokenAddress: string,
    tokenSymbol: string,
    tokenDecimals: number,
    image?: string,
    chainId?: number | undefined,
): Promise<boolean> => {
    return await (window as any).ethereum.request({
        method: "wallet_watchAsset",
        params: {
            type: "ERC20",
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: image,
                network: chainId,
            },
        },
    })
};