import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REHYDRATE ,REGISTER} from 'redux-persist'
import { apiSlice } from './api/apislice'
import cartReducer from "./cart/cartSlice"
import storage from  "redux-persist/lib/storage"

const PersistConfig = {
    key: "root",
    version: 1,
    storage: storage,
    blacklist: ["api"],
}

const rootReducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer
})

const persistedReducer = persistReducer(PersistConfig,rootReducers)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    }).concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>