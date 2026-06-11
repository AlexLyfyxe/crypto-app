// import { cryptoAssets, cryptoData } from "./data";

// export function fakeFetchCrypto() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(cryptoData)
//         }, 1000)
//     })
// }

// export function FetchAssets() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(cryptoAssets)
//         }, 1000)
//     })
// }

import { cryptoAssets } from "./data";

const API_KEY = 'a03b3b5cf32f47b73c5bc1ac48526fa4e7f79a4c9310'; 

export async function fakeFetchCrypto() {
    try {
        const response = await fetch('https://openapiv1.coinstats.app/coins', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-API-KEY': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Не удалось загрузить данные:", error);
        return []; 
    }
}

export function FetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 1000);
    });
}