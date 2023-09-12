'use client';

import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from './features/actions/productsSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    products: productsReducer
});

const perSistConfig = {
    key: 'internet-solutions',
    storage,
    whitelist: [
        "products"
    ]
};

const persistedReducer = persistReducer(perSistConfig, rootReducer)

export default () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredPaths: ["modalMenu.product.productImage"],
                ignoredActionPaths: [
                    "payload.productImage",
                    "meta.baseQueryMeta",
                    "meta.arg",
                ],
            },
        })
    })
    const persistor = persistStore(store);
    return { store, persistor };
}




