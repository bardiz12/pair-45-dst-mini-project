import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";
import { tmdbApi } from "../services/tmdbApi";

export const store = configureStore({
    reducer: {
        userStore,
        [tmdbApi.reducerPath] : tmdbApi.reducer
    }
})