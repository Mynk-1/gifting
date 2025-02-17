import { createSlice } from "@reduxjs/toolkit";

const cartitemSlice=createSlice({
    name:"cartitem",
    initialState:[{
        id:7,
        name: "Black Relaxed Fit Korean Trousers",
        size: "32",
        price: 1799,
        image:
          "https://www.snitch.co.in/cdn/shop/files/4MSR5176-0331.jpg?v=1729337548&width=1800",
        quantity: 1,
      },{
        id:1,
        name: "Grey Stripes Polo Sweater",
        size: "32",
        price: 1899,
        image:
          "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0473.jpg?v=1729251876&width=1800",
        quantity: 1,
      }],
    reducers:{
        increaseItemQuantity:(state,action)=>{
            return (state.map((item)=>{
                if(item.id===action.payload){
                    return {...item,quantity:item.quantity+1}
                }
                return item;
            }))
        },
        decreaseItemQuantity: (state, action) => {
            return state
                .map((item) => 
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0);
        },
        addCartItem: (state, action) => {
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload);
            }
        }
    }
})

export const {increaseItemQuantity,decreaseItemQuantity,addCartItem} = cartitemSlice.actions;

export default cartitemSlice.reducer;

