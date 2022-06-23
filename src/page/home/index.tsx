import React from "react";
import {Box, TextField} from "@mui/material";
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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <TextField
                    sx={{
                        marginRight: '10px'
                    }}
                    placeholder='Change value'
                    onChange={changeValue}
                />
            </Box>
            <Box sx={{marginTop: '10px'}}>
                {`${value} ${fromCurrency} равно ${getConvert()} ${toCurrency}`}
            </Box>
        </Box>
    )
}