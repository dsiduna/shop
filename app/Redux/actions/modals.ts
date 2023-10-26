import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    data: any;
    product: any;
}

const initialState: ModalState = {
    data: {},
    product: {},
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
    },
});
const { actions, reducer } = modalReducer;

export const {
    updateModal,
    updateProduct,
} = actions;

export default reducer; 