import { useContext } from "react"
import { Context } from "../context/Context"
import { IState } from "../interfaces"

export const useGlobal =  ()=>{
    const {state, toggleLang, toggleTheme} = useContext(Context)

    return{
        ...state as IState, 
        toggleLang,
        toggleTheme
    }
}