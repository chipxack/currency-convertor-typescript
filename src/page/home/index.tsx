import React from "react";
import {Box, TextField} from "@mui/material";
import {HomeBox, HeadBox} from './atoms/block';
import {useHomePage} from "../../hooks/useHomePage";

export const HomePage = () => {
    const {
        value,
        fromCurrency,
        toCurrency,
        changeValue,
        getConvert
    } = useHomePage()

    return (
        <HomeBox>
            <HeadBox>
                <TextField
                    placeholder='Change value'
                    onChange={changeValue}
                />
            </HeadBox>
            <Box>
                {`${value} ${fromCurrency} равно ${getConvert()} ${toCurrency}`}
            </Box>
        </HomeBox>
    )
}