import { createSlice } from "@reduxjs/toolkit";
import productData from "../../Data/ProductData"


const productListSlice=createSlice({
    name:"productList",
    initialState:productData,
    reducers:{
        updateProductList:(state,action)=>{
            state.productList=action.payload
        }
    }
})

export const {updateProductList}=productListSlice.actions;

export default productListSlice.reducer;

