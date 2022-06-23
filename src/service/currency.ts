import {httpGet} from "./index";
import {Currency} from "../types/currency";

const currency = {
    getCurrency: (params?: Currency) => httpGet({url: '/latest', params}),
}

export default currency