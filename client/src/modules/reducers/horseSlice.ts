import { IAllHorse } from './../../interface/IAllHorse';
import { createSlice } from '@reduxjs/toolkit';


type initialStateType = {
	allHorse: IAllHorse[] | null
	winName: string | null
	betHorse: string
	money: number
	betMoneyValue: number
}

const initialState: initialStateType = {
	allHorse: null,
	winName: null,
	betHorse: 'Princess Diana',
	money: 5000,
		betMoneyValue: 0
	};

	const horseSlice = createSlice({
		name: 'horseSlice',
		initialState,
		reducers: {
			SET_ALL_HORSE(state, action) {
				state.allHorse = action.payload;
			},
			SET_WIN_NAME(state, action) {
				state.winName = action.payload
			},
			SET_BET_HORSE(state, action) {
				state.betHorse = action.payload
			},
			SET_MONEY(state, action){
				state.money = action.payload
			},
			SET_BET_MONEY(state, action){
				state.betMoneyValue = action.payload
			},
		},
});

export const { SET_ALL_HORSE, SET_WIN_NAME, SET_BET_HORSE, SET_MONEY, SET_BET_MONEY } = horseSlice.actions;
export default horseSlice.reducer;
