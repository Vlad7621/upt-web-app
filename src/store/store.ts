import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as paymentReducer } from './reducers/payment';
import { reducer as imagesReducer } from './reducers/images';


const rootReduser = combineReducers({
    paymentReducer,
    imagesReducer
});

export const store = configureStore({ reducer: rootReduser });

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];



