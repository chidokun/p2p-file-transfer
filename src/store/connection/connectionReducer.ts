import {Reducer} from "redux";
import {ConnectionActionType, ConnectionState} from "./connectionTypes";

export const initialState: ConnectionState = {
    id: undefined,
    loading: false,
    list: [],
    selectedId: undefined
}

export const ConnectionReducer: Reducer<ConnectionState> = (state = initialState, action) => {
    if (action.type === ConnectionActionType.CONNECTION_INPUT_CHANGE) {
        const {id} = action
        return {...state, id}
    } else if (action.type === ConnectionActionType.CONNECTION_CONNECT_LOADING) {
        const {loading} = action
        return {...state, loading}
    } else if (action.type === ConnectionActionType.CONNECTION_LIST_ADD) {
        let newList = [...state.list, action.id]
        if (newList.length === 1) {
            return {...state, list: newList, selectedId: action.id}
        }
        return {...state, list: [...state.list, action.id]}
    } else if (action.type === ConnectionActionType.CONNECTION_LIST_REMOVE) {
        let newList = [...state.list].filter(e => e !== action.id)
        if (state.selectedId && !newList.includes(state.selectedId)) {
            if (newList.length === 0) {
                return {...state, list: newList, selectedId: undefined}
            } else {
                return {...state, list: newList, selectedId: newList[0]}
            }
        }
        return {...state, list: newList}
    } else if (action.type === ConnectionActionType.CONNECTION_ITEM_SELECT) {
        return {...state, selectedId: action.id}
    } else {
        return state
    }
}