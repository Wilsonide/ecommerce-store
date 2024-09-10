"use client";

import { PropsWithChildren } from "react";

import ReduxProvider from "./reduxProvider";

export default function StoreProviders({ children }: PropsWithChildren<any>) {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    );
}