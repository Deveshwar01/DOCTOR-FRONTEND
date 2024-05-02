import { configureStore } from "@reduxjs/toolkit";

import registerAuth from './userAuth/registerAuth';
import loginAuth from "./userAuth/loginAuth";

const store = configureStore({
    reducer: {
        user: registerAuth,
        userLogin: loginAuth
    }
})
export default store;