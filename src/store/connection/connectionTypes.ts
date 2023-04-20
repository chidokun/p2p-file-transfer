export enum ConnectionActionType {
    CONNECTION_INPUT_CHANGE = 'CONNECTION_INPUT_CHANGE',
    CONNECTION_CONNECT_LOADING = 'CONNECTION_CONNECT_LOADING',
    CONNECTION_LIST_ADD = 'CONNECTION_LIST_ADD',
    CONNECTION_LIST_REMOVE = 'CONNECTION_LIST_REMOVE',
    CONNECTION_ITEM_SELECT = 'CONNECTION_ITEM_SELECT'
}

export interface ConnectionState {
    readonly id?: string
    readonly loading: boolean
    readonly list: string[]
    readonly selectedId?: string
}