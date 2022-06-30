import {combine, createStore} from 'effector'
import {fetchAll, fetchCurrency} from './effects'
import {DefaultStore} from "../../types";
import {Options, CurrencyStore} from "../../types/currency";

const $currency = createStore<DefaultStore<CurrencyStore, boolean, Options[]>>({loading: false, data: {}, list: [], error: false})
    .on(fetchCurrency.pending, (state, loading) => ({...state, loading}))
    .on(fetchCurrency.done, (state, error) => ({
        ...state,
        error: !!error,
        data: {},
    }))
    .on(fetchCurrency.done, (state, {result}) => {
        return {
            ...state,
            data: result.data.data
        }
    })
    .on(fetchAll.pending, (state, loading) => ({...state, loading}))
    .on(fetchAll.done, (state, error) => ({
        ...state,
        error: !!error,
        list: [],
    }))
    .on(fetchAll.done, (state, res) => {
        const result = []
        for (let key in res.result.data.data) {
            result.push({
                label: key,
                value: res.result.data.data[key].value
            })
        }
        return {
            ...state,
            list: result
        }
    })

export const $currencyModel = combine({$currency})