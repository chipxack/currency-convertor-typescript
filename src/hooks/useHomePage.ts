import React, {useEffect, useState} from "react";
import {$currencyModel, getCurrency} from "../models/currency";
import {useStore} from "effector-react";

export const useHomePage = () => {
    const {$currency} = useStore($currencyModel)
    const [fromCurrency, setFromCurrency] = useState<string>('UZS')
    const [toCurrency, setToCurrency] = useState<string>('USD')
    const [value, setValue] = useState<number>(1)

    const getConvert = () => {
        return value * ($currency.data[toCurrency]?.value || 0)
    }

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value.split(' ')[0]?.replace(/\D/g,"")))
        setFromCurrency(event.target.value.split(' ')[1].toUpperCase())
        setToCurrency(event.target.value.split(' ')[3].toUpperCase())
    }

    useEffect(() => {
        if (fromCurrency && toCurrency && value) {
            const params = {
                base_currency: fromCurrency,
                currencies: toCurrency
            }
            getCurrency(params)
        }

    }, [fromCurrency, toCurrency, value]);


    return {
        fromCurrency,
        toCurrency,
        value,
        getConvert,
        changeValue
    }
}