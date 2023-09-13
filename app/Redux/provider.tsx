'use client'

import { ReactNode } from 'react'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

const { persistor, store } = configureStore()

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={"Loading...."} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}


