import { createSlice } from "@reduxjs/toolkit"


const cardSlice=createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0,
        id:0,
        
        


    },
    reducers:{
        addproduct:(state,action)=>{
          
            state.product.push(action.payload)
            state.quantity+=1;
            state.total+=action.payload.price*action.payload.quantity;
           
        },
        setmodels:(state)=>{
            state.ordermodel=true
        }
      ,
        
        reset:(state,action)=>{
            state.id=action.payload.newproducts
           state.product=state.product.filter((ss)=>ss._id!==state.id);
           console.log(state.product)
           state.quantity-=1
           state.total-=action.payload.totals*action.payload.quantitys;

        }

    }
})
export const {addproduct,reset,setmodels}=cardSlice.actions;
export default cardSlice.reducer;

