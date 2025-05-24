import { createSlice } from '@reduxjs/toolkit';

const recalculateTotalAmount = state => {
	state.totalAmount = state.items.reduce((total, item) => total + item.quantity, 0);
};

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalPrice: 0,
		totalAmount: 0,
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

			recalculateTotalAmount(state);
		},
		removeItem: (state, action) => {
			const removedItem = state.items.find(item => item.id === action.payload);
			if (removedItem) {
				state.items = state.items.filter(item => item.id !== action.payload);
				state.totalPrice -= removedItem.price * (removedItem.quantity ?? 1);
				recalculateTotalAmount(state);
			}
		},
		plusItem: (state, action) => {
			const existingItem = state.items.find(item => item.id === action.payload);

			if (existingItem) {
				existingItem.quantity = (existingItem.quantity ?? 0) + 1;
				state.totalPrice += existingItem.price;
				recalculateTotalAmount(state);
			}
		},
		minusItem: (state, action) => {
			const existingItem = state.items.find(item => item.id === action.payload);

			if (existingItem && (existingItem.quantity ?? 0) > 1) {
				existingItem.quantity = (existingItem.quantity ?? 0) - 1;
				state.totalPrice -= existingItem.price;
				recalculateTotalAmount(state);
			}
		},
	},
});

export const { addItem, removeItem, plusItem, minusItem } = CartSlice.actions;

export default CartSlice.reducer;
