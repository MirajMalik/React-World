import { useState, useEffect } from 'react';

export default function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    console.log("Currency : ",currency)

    useEffect(() => {
        if(!currency) return;
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency] || {}))  // res[usd or something else]
            .catch(() => setData({}))
    }, []);

    console.log("Currency Data : ",data)
    
    return data
}


//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json


