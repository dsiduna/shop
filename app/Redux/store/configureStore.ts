import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'

const persistConfig = {
    key: 'internet-solutions',
    storage,
    whitelist: [
        'products'
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default function configureAppStore() {
    const middleware = getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(),
    });

    const persistor = persistStore(store);

    return { store, persistor };
}