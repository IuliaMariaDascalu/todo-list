import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortedState: '',
}

const sortedSlice = createSlice({
    name: 'sorted',
    initialState,
    reducers: {
        setSortedState: (state, action) => {
            state.sortedState = action.payload;
        }
    }
});

export const { setSortedState } = sortedSlice.actions;
export default sortedSlice.reducer;