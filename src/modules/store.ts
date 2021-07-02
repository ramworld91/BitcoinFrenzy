import { combineReducers, createStore } from "redux"
import mainReducer, { MainState } from "./mainReducer"

const reducers = combineReducers(
    {
        mainPage: mainReducer,
    }
)

export interface Store {
    mainPage: MainState
}

const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store