import { useReducer } from "react";
import { Type } from "./action.type";
export const initialState = {
	basket: [],
};
// const [state, dispatch] = useReducer(reducer, initialState);
export const reducer = (state, action) => {
	switch (action.type) {
		case Type.ADD_TO_BASKET:
			// 	return {
			// 		...state,
			// 		basket: [...state.basket, action.item],
			// 	};

			// 	break;

			// default:
			// 	return state;
			//check if the item exists
			const existingItem = state.basket.find(
				(item) => item.id === action.item.id
			);
			if (!existingItem) {
				return {
					...state,
					basket: [...state.basket, { ...action.item, amount: 1 }],
				};
			} else {
				const updatedBasket = state.basket.map((item) => {
					return item.id === action.item.id
						? { ...item, amount: item.amount + 1 }
						: item;
				});
				return {
					...state,
					basket: updatedBasket,
				};
			}
		default:
			return state;
	}
};
