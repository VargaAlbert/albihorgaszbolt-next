import { SHIPPING_FREE, FREE_SENDING_LIMIT } from './../services/initConfig';

export const isFreeShoping = (value: number) => {
    return value > FREE_SENDING_LIMIT ? value : value + SHIPPING_FREE
}