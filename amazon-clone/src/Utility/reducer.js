import { useReducer } from "react";
import { Type } from "./action.type";
export const initialState = {
	basket: [],
};
// const [state, dispatch] = useReducer(reducer, initialState);
export const reducer = (state, action) => {
	switch (action.type) {
		case Type.ADD_TO_BASKET:
			return {
				...state,
				basket: [...state.basket, action.item],
			};

			break;

		default:
			return state;
	}
};
