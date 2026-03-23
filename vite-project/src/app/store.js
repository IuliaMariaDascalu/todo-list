import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";
import sortReducer from "../features/filters/sortSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        sort: sortReducer
    }
});