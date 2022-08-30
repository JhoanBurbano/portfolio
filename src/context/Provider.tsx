import { FC, ReactPropTypes, useReducer } from "react"
import { Context } from "./Context"
import { Reducer } from "./Reducer"
import { INITIAL_STATE } from "./Context"
import { IState } from "../interfaces"
import { IContextProps } from "../interfaces/props.interface"

const Provider: FC<IContextProps> = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE )

    const [ toggleTheme, toggleLang ] = [ () => { dispatch({type: 'TOGGLE_THEME' })}, () => { dispatch({type: 'TOGGLE_LANG'})} ];


    return (
        <Context.Provider value={{state, toggleLang, toggleTheme }}>
            {children}
        </Context.Provider>
    )
}

export default Provider
