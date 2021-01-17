export function fetchVendors(){
    // what comes from return is a Thunk function that dispatch to action
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/vendors')
        .then(response => response.json())
        .then(vendorsData => dispatch({
            type: 'FETCH_VENDORS',
            payload: vendorsData
        })) 
    }
         
}