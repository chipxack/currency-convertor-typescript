import React from "react";
import {MenuItem, TextField} from "@mui/material";
import {useCurrencyPage} from "../../hooks/useCurrencyPage";
import {useStore} from "effector-react";
import {$currencyModel} from "../../models/currency";
import {CurrencyBlock, CurrencyListBox, ItemBox} from "./atoms/block";

export const CurrencyPage = () => {
    const {$currency} = useStore($currencyModel)
    const {fromCurrency, setFromCurrency} = useCurrencyPage()

    const currencies = [
        {
            value: 'USD',
            label: 'USD',
        },
        {
            value: 'UZS',
            label: 'UZS',
        },
        {
            value: 'EUR',
            label: 'EUR',
        }
    ];

    return (
        <CurrencyBlock>
            <TextField
                sx={{
                    width: 100,
                    marginRight: '10px'
                }}
                id="outlined-select-currency"
                select
                label="Select"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <CurrencyListBox>
                {
                    $currency.list?.map(item =>
                        <ItemBox
                            key={item.label}
                        >
                            <span>{item.label}: </span><span>{item.value}</span>
                        </ItemBox>
                    )
                }
            </CurrencyListBox>

        </CurrencyBlock>
    )
}