import { IAction, IState } from "../interfaces";

export const Reducer = (state: IState, {type}: IAction): IState => {
	switch (type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				theme: state.theme==='dark'?'light': 'dark'
			};
		case 'TOGGLE_LANG':
            return {
				...state,
				lang: state.lang==='en'?'es':'en'
			};
		default:
			return state;
	}
};
