import {createEvent} from "effector";
import {fetchAll, fetchCurrency} from './effects'
import {Currency} from "../../types/currency";

export const getCurrency = createEvent<Currency>()
export const getAll = createEvent<string>()

getCurrency.watch(fetchCurrency)
getAll.watch(fetchAll)