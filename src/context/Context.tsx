import { createContext } from "react";
import { IState } from "../interfaces";

export const INITIAL_STATE: IState = {
    theme: 'dark',
    lang: 'en'
}


export const Context = createContext<Record<string, unknown>>(INITIAL_STATE)