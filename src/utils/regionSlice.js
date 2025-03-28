import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name:"region",

    initialState:{
        selectedRegion: "IN", // Default to India 🇮🇳
    },

    reducers:{
        setRegion:(state, action) => {
            state.selectedRegion = action.payload;
        },
    },
});

export const { setRegion } = regionSlice.actions;
export default regionSlice.reducer;