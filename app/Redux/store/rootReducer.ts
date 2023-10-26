import { combineReducers } from "@reduxjs/toolkit";
import { productsService } from "../services/productsService";
import { servicesService } from "../services/servicesService";
import modalReducer from '../actions/modals'

const rootReducer = combineReducers({
    [productsService.reducerPath]: productsService.reducer,
    [servicesService.reducerPath]: servicesService.reducer,
    modal: modalReducer,
})

export default rootReducer;