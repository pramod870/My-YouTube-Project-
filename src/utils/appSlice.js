import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",

    initialState:{
        isMenuOpen: true,
    },

    reducers:{
        toggleMenu:(store) =>{
            store.isMenuOpen = !store.isMenuOpen;
        },

        closeMenu:(state) => {
            state.isMenuOpen = false;
        }
    },
});


export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;