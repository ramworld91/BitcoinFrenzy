import { Store } from "./store";

const getBTCPrice = (state: Store) => state.mainPage.BTCPrice
const getUserBTC = (state: Store) => state.mainPage.userBTC
const getUserDollars = (state: Store) => state.mainPage.userDollars
const getHistory = (state: Store) => state.mainPage.history


export const allSelectors = {
    getBTCPrice,
    getUserBTC,
    getUserDollars,
    getHistory
}