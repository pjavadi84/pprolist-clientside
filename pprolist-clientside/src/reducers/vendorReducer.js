export default function vendorReducer(state = {vendors: []}, action){
    debugger
    switch (action.type) {
        case 'FETCH_VENDORS':
            return { vendors: action.payload }
            // break;
        case 'ADD_VENDOR':
            return {...state, vendors: [...state.vendors, action.payload]}
        case 'ADD_PRODUCT':
            return {}
        default:
            return state
    }
}