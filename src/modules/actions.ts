import { HistoryItem } from "./mainReducer"

export enum actionTypes {
    'DEPOSIT' = 'DEPOSIT',
    'BUY_OR_SELL_BTC' = 'BUY_OR_SELL_BTC',
    'REGULATE_BTC_PRICE' = 'REGULATE_BTC_PRICE',
    'SET_HISTORY' = 'SET_HISTORY'
}

interface SetDeposit {
    type: actionTypes.DEPOSIT
    payload: number
}

interface BuyOrSellBTC {
    type: actionTypes.BUY_OR_SELL_BTC
    payload: number
}

interface RegulateBTCPrice {
    type: actionTypes.REGULATE_BTC_PRICE
    payload: number
}

interface SetHistory {
    type: actionTypes.SET_HISTORY
    payload: HistoryItem
}

export type Action = SetDeposit | BuyOrSellBTC | RegulateBTCPrice | SetHistory

export const setDeposit = (dol: number):SetDeposit => ({ type: actionTypes.DEPOSIT, payload: dol })
export const buyOrSellBTC = (btc: number):BuyOrSellBTC => ({ type: actionTypes.BUY_OR_SELL_BTC, payload: btc })
export const regulateBTCPrice = (dol: number):RegulateBTCPrice => ({ type: actionTypes.REGULATE_BTC_PRICE, payload: dol })
export const setHistory = (date: string, time: string, action: string, id: number):SetHistory => ({ type: actionTypes.SET_HISTORY, payload: {date, time, action, id }})