import { Action, actionTypes } from "./actions"

export interface HistoryItem {
    date: string
    time: string
    action: string
    id: number
}
export interface MainState {
    BTCPrice: number
    userDollars: number
    userBTC: number
    history: HistoryItem[]
}

const initialState = {
    BTCPrice: 1000,
    userDollars: 200,
    userBTC: 0,
    history: []
}

const mainReducer = (state: MainState = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.DEPOSIT: {
            return {
                ...state, userDollars: action.payload
            }
        }
        case actionTypes.BUY_OR_SELL_BTC: {
            return {
                ...state, userBTC: action.payload
            }
        }
        case actionTypes.REGULATE_BTC_PRICE: {
            return {
                ...state, BTCPrice: action.payload
            }
        }
        case actionTypes.SET_HISTORY: {
            return {
                ...state, history: [action.payload, ...state.history]
            }
        }

        default:
            return state
    }
}

export default mainReducer