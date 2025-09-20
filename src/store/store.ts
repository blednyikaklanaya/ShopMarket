import { configureStore } from "@reduxjs/toolkit";
import sliceApp from "./slice/sliceApp";

export const store = configureStore({ // create redux store
    reducer: {
        app: sliceApp,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;