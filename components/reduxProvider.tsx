"use client";

import { PropsWithChildren } from "react";

import { Provider } from "react-redux";
import {store} from "../app/features/store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

export default function ReduxProvider({ children }: PropsWithChildren<any>) {
    let persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
            
        </Provider>
    );
}