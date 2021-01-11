export default function vendorReducer(state = {vendors: []}, action){
    
    switch (action.type) {
        case 'FETCH_VENDORS':
            return { vendors: action.payload }
            // break;
        default:
            return state
    }
}