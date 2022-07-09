export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType): StateType => {
    // switch - переключатель - переключись по action.type:
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        // если задиспатчили что-то неверное:
        default:
            throw new Error('bad action-type')
    }

    return state
}