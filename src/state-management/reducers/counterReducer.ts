
interface Action {
    type: 'INCREAMENT' | 'RESET'
}

const counterReducer = (state: number, action: Action): number => {
    if (action.type === 'INCREAMENT') return state + 1
    if (action.type === 'RESET') return 0
    // throw new Error('Action is not support')
    return state
}

export default counterReducer