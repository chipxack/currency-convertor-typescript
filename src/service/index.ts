import axios from "axios";

const apiKey = 'ddvaUncNQcegYsRq8H3C9ElUwZh1ahKaoCJnYdSP'

export const httpClient = axios.create({
    baseURL: 'https://api.currencyapi.com/v3'
})

httpClient.interceptors.request.use(config => {
    const customConfig = config
    customConfig.params = {
        apikey: apiKey,
        ...config.params,
    }
    return customConfig
})

export const httpGet = <T>(params: T) =>
    httpClient({
        method: 'get',
        ...params
    })