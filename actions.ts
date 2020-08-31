import { IAction, IState, IStreamLocation } from './interfaces';
import { actions } from "./Store"
import { utellyConfig, omdbConfig } from "./config";


export const loadModal = async (
        id: string,
        title: string,
        dispatch: React.Dispatch<IAction>,
        state: IState
    ) => {

    console.log("load modal") 
       
    const _omdbData = async () => {
        const data = await fetch(omdbConfig.URL(id));
        return data.json();
    }

    const _uData = async () => {
        const uData = await fetch(utellyConfig.URL(title), utellyConfig.OPTIONS)
        return uData.json();
    }


    if (state.modalData && state.modalData.imdbID === id) {
        return dispatch({ type: 'NONE' })
    }
    

    const [omdbData, uData] = await Promise.all([_omdbData(), _uData()])

    const resultsExist = uData.results.length
    let streaming;

    if (resultsExist) {
        const match = uData.results.find((r: any) => r.name === title)
        streaming = match ? match.locations : undefined;
    }

    if (streaming) {
        omdbData.streaming = streaming.map(({ display_name, icon, url }: IStreamLocation, i: number) => {
            return {
                display_name,
                icon,
                url,
            }
        })
    }

    return dispatch({ type: actions.LOAD_MODAL, payload: omdbData })
}


export const searchPrograms = async (term: string, dispatch: React.Dispatch<IAction>) => {

    let data, dataJSON;
    try {
        data = await fetch(omdbConfig.SEARCH_URL(term));
        dataJSON = await data.json();
    } catch( error ) {

        throw error
    }

    if (dataJSON.hasOwnProperty('Error')) {
        return dispatch({
            type: actions.SET_ERROR,
            payload: dataJSON.Error,
        })
    }
    return dispatch({
        type: actions.LOAD_RESULTS,
        payload: dataJSON.Search,
    })
}


export const loadSavedItems = () => {
    const items = localStorage.getItem('WATCH_THIS_SAVED_ITEMS');
    if (items) {
        return JSON.parse(items);
    }
    return [];
}


export const saveItems = (state: IState) => {
    const items = JSON.stringify(state.savedItems);
    localStorage.setItem('WATCH_THIS_SAVED_ITEMS', items);
}


export const closeModal = (dispatch: any): IAction => dispatch({ type: actions.CLOSE_MODAL })
