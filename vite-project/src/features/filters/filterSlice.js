import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filteredState: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilteredState: (state, action) => {
            state.filteredState = action.payload;
        }
    }
});

export const {setFilteredState} = filterSlice.actions;
export default filterSlice.reducer;