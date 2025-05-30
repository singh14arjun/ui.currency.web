import { useEffect ,useState } from "react";

const apiURLForCurrency=""

function useCurrencyInfo(currency){

    const[data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((data)=>setData(data[currency]))
        
    } , [currency])
    console.log(data);
        
    return data 
}

export default useCurrencyInfo;