import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[{
        id:1,
        image:"https://www.snitch.co.in/cdn/shop/files/4MSW9044-0473.jpg?v=1729251876&width=1800",
        name:"Grey Stripes Polo Sweater",
        size:32,
        price:1899
    }],
    reducers:{
        addWishlistItem:(state,action)=>{
            const check=state.find((item)=> item.id===action.payload.id)
            if(!check){
                state.push(action.payload)
            }
        },
        removeWishlistItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }


    }
})

export const {addWishlistItem,removeWishlistItem} = wishlistSlice.actions;

export default wishlistSlice.reducer;