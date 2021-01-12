export const addProduct = (product, vendorId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/vendors/${vendorId}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(vendor => dispatch({type: 'ADD_PRODUCT', payload: vendor}))
    }
}