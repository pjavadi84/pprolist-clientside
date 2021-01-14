export const deleteProduct = (productId, vendorId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/vendors/${vendorId}/products/${productId}`, {
                method: 'DELETE'
        })
        .then(response => response.json())
        .then(vendor => dispatch({type: 'DELETE_PRODUCT', payload: vendor }))
    }
}