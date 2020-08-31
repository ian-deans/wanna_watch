import React from 'react';

import { IState, IAction, } from "./interfaces";

const initialState: IState = {
    results: [],
    savedItems: [],
    modalOpen: false,
    error: undefined,
    modalData: null,
}

export const actions = {
    LOAD_RESULTS: 'LOAD_RESULTS',
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SET_ERROR: 'SET_ERROR',
    LOAD_MODAL: 'LOAD_MODAL',
    SAVE_PROGRAM: 'SAVE_PROGRAM',
    REMOVE_SAVED_PROGRAM: 'REMOVE_SAVED_PROGRAM',
}


export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction) {
    // console.log(state)
    // console.log(action.type)
    switch (action.type) {

        case actions.LOAD_RESULTS: {
            return {
                ...state,
                results: [...action.payload],
                error: undefined,
            }
        }

        case actions.OPEN_MODAL: {
            return {
                ...state,
                modalOpen: true,
            }
        }

        case actions.CLOSE_MODAL: {
            return {
                ...state,
                modalOpen: false,
                modalData: null,
            }
        }

        case actions.SET_ERROR: {
            return {
                ...state,
                results: [],
                error: action.payload,
            }
        }

        case actions.LOAD_MODAL: {
            return {
                ...state,
                modalData: action.payload,
                modalOpen: true,
            }
        }

        case actions.SAVE_PROGRAM: {
            return {
                ...state,
                savedItems: [...state.savedItems, action.payload]
            }
        }

        case actions.REMOVE_SAVED_PROGRAM: {
            return {
                ...state,
                savedItems: action.payload,
            }
        }

        default: {
            return state;
        }
    }
}

export function StoreProvider({ children }: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ state, dispatch }}>
            {children}
        </Store.Provider>
    )
}