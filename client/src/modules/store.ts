import horseSlice from './reducers/horseSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	horseSlice,
});

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch
