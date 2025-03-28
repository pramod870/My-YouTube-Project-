import { configureStore } from "@reduxjs/toolkit";

import appSlice from  "./appSlice"
import regionSlice from "./regionSlice"


const store = configureStore({

    reducer:{

        app: appSlice,
        region: regionSlice,
    }

});


export default store;


