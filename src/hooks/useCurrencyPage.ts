import {getAll} from "../models/currency";
import {useEffect, useState} from "react";

export const useCurrencyPage = () => {
    const [fromCurrency, setFromCurrency] = useState<string>('UZS')


    useEffect(() => {
        const params = {
            base_currency: fromCurrency,
            currencies: 'RUB,EUR,USD,ALL,BIT'
        }
        getAll(params)
        setInterval(() => {
            getAll(params)
        }, 15000)
        return clearInterval
    }, [fromCurrency]);

    return {
        fromCurrency,
        setFromCurrency
    }
}