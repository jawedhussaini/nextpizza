import { configureStore } from "@reduxjs/toolkit";
import cardreducer from './cardSlice'

export default configureStore({
    reducer:{cart:cardreducer}
})