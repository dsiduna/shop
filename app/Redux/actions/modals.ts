import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    data: string;
    product: any;
    publicProduct: any;
}

const initialState: ModalState = {
    data: '',
    product: {},
    publicProduct: {},
};

const modalReducer = createSlice({
    name: "modal",
    initialState,
    reducers: {
        updateModal: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        },
        updateProduct: (state, action: PayloadAction<any>) => {
            state.product = action.payload;
        },
        updatePublicProduct: (state, action: PayloadAction<any>) => {
            state.publicProduct = action.payload;
        },
    },
});
const { actions, reducer } = modalReducer;

export const {
    updateModal,
    updateProduct,
    updatePublicProduct
} = actions;

export default reducer; 