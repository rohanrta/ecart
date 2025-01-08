import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[

    ],
    reducers:{
        addToCart : (state,actionByComponent)=>{
            const existingProduct = state.find(item=>item.id == actionByComponent.payload)
            if(existingProduct){

            }
            else{
                state.push({...actionByComponent.payload,quantity:1,totalprice:actionByComponent.payload.price})
            }
        }
    }
})