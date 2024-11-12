import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
const rootReducers = combineReducers({
    auth: userReducer,
    profile: profileReducer,
})

export {rootReducers}