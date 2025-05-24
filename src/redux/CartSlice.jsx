import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalPrice: 0,
	},
	reducers: {
		addItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...newItem, quantity: 1 });
			}

			state.totalPrice = state.items.reduce((sum, item) => {
				return sum + item.price * (item.quantity ?? 1);
			}, 0);
		},
		removeItem: (state, action) => {
			const removedItem = state.items.find(item => item.id === action.payload);
			if (removedItem) {
				state.totalPrice -= removedItem.price * (removedItem.quantity ?? 1);
				state.items = state.items.filter(item => item.id !== action.payload);
			}
		},
		plusItem: (state, action) => {
			const existingItem = state.items.find(item => item.id === action.payload);

			if (existingItem) {
				existingItem.quantity = (existingItem.quantity ?? 0) + 1;
				state.totalPrice += existingItem.price;
			}
		},
		minusItem: (state, action) => {
			const existingItem = state.items.find(item => item.id === action.payload);

			if (existingItem && (existingItem.quantity ?? 0) > 1) {
				existingItem.quantity = (existingItem.quantity ?? 0) - 1;
				state.totalPrice -= existingItem.price;
			}
		},
	},
});

export const { addItem, removeItem, plusItem, minusItem } = CartSlice.actions;

export default CartSlice.reducer;
