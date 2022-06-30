import {getAll} from "../models/currency";
import {useEffect, useState} from "react";

export const useCurrencyPage = () => {
    const [fromCurrency, setFromCurrency] = useState<string>('UZS')


    useEffect(() => {
        getAll(fromCurrency)
        const interval = setInterval(() => {
            getAll(fromCurrency)
        }, 15000)
        return () => clearInterval(interval)
    }, [fromCurrency]);

    return {
        fromCurrency,
        setFromCurrency
    }
}