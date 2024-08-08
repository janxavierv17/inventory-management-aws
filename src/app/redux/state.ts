import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
	isSidebarCollapsed: boolean;
	isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
	isSidebarCollapsed: false,
	isDarkMode: false,
};

export const { actions, reducer } = createSlice({
	name: "global",
	initialState,
	reducers: {
		setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
			state.isSidebarCollapsed = action.payload;
		},
		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.isDarkMode = action.payload;
		},
	},
});

export const { setIsDarkMode, setIsSidebarCollapsed } = actions;
export default reducer;
