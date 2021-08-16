import React, { useContext, useReducer } from "react";

export const LocaleContext =  React.createContext();

const initialState = { type: "de-de" };

export function LocaleContextProvider(props) {
    const [locale, dispatch] = useReducer(reducer, initialState);

    function reducer(previousState, action) {
    
        if (action.type === previousState) {
            return previousState;
        } else {
            return action.type;
        }
    }

    return (
        <LocaleContext.Provider value={[ locale, dispatch ]}>
            {props.children}
        </LocaleContext.Provider>
    )
}

export const useLocaleContext = () => {
    return useContext(LocaleContext);
}
