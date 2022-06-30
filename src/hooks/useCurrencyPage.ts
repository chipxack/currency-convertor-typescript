import {getAll} from "../models/currency";
import React, {useEffect, useState} from "react";

export const useCurrencyPage = () => {
    const [fromCurrency, setFromCurrency] = useState<string>('UZS')

    const changeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromCurrency(event.target.value)
    }

    useEffect(() => {
        getAll(fromCurrency)
        const interval = setInterval(() => {
            getAll(fromCurrency)
        }, 15000)
        return () => clearInterval(interval)
    }, [fromCurrency]);


    return {
        fromCurrency,
        setFromCurrency,
        changeCurrency
    }
}