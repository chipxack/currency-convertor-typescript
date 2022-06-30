import {httpGet} from "./index";
import {Currency} from "../types/currency";

export const currency = {
    getCurrency: (params?: Currency) => httpGet({url: '/latest', params}),
    getCurrencyAll: (baseCurrency?: string) => httpGet({url: `/latest?base_currency=${baseCurrency}&currencies=RUB%2CEUR%2CUSD%2CUZS%2CALL`}),
}