export default function vendorReducer(state = {vendors: []}, action){
    
    switch (action.type) {
        case 'FETCH_VENDORS':
            return { vendors: action.payload }
            // break;
            case 'ADD_VENDOR':
                return {...state, vendors: [...state.vendors, action.payload]}
        default:
            return state
    }
}