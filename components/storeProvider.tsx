/* "use client"
import React, { useRef } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"


export default function StoreProvider({children}:{children:React.ReactNode}) {
    const storeRef = useRef()
    if (!storeRef.current){
        storeRef.current = makeStore()
    }
    const persistor = persistStore(storeRef.current)
  return (
    <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
  )
}
 */

import React from 'react'

const storeProvider = () => {
  return (
    <div>storeProvider</div>
  )
}

export default storeProvider