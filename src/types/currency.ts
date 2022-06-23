export type Currency = {
    base_currency?: string
    currencies?: string
}

export type Options = {
    value: string,
    label: string
}

export type CurrencyList = {
    code: string,
    value: number
}

export type CurrencyStore = {
    [key: string]: CurrencyList
}