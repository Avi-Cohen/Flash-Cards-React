export const cardReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CARD':
            return[...state, {
                eng: action.card.eng,
                heb: action.card.heb
            }]
        case 'REMOVE_CARD':
            return state.filter(card => card.eng !== action.eng)
        default:
            return state
    }
}