import { combineReducers } from "@reduxjs/toolkit";
import { productsService } from "../services/productsService";

const rootReducer = combineReducers({
    [productsService.reducerPath]: productsService.reducer,
})

export default rootReducer;