import axios from "axios";

const apiKey = 'xIclxV88PO82UuK4BXygx8Y0v6DbWRiym8dgh9vv'

export const httpClient = axios.create({
    baseURL: 'https://api.currencyapi.com/v3'
})

httpClient.interceptors.request.use(config => {
    const customConfig = config
    customConfig.params = {
        apikey: apiKey,
        ...config.params
    }
    return customConfig
})

export const httpGet = <T>(params: T) =>
    httpClient({
        method: 'get',
        ...params
    })