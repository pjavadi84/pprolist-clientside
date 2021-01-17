


export const deleteVendor = (vendorId) => {

	// return (dispatch) => {
	//     fetch(`http://localhost:3000/api/v1/vendors/${vendorId}`, {
	//             method: 'DELETE'
	//     })
	//     .then(response => response.json())
	//     .then(vendor => dispatch({type: 'DELETE_VENDOR', payload: vendor }))
	// }
	return (dispatch) => {
		return fetch(`http://localhost:3000/api/v1/vendors/${vendorId}`, {
			method: "DELETE",
			header: {
				'Content_Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(() => {
				dispatch({ type: "DELETE_VENDOR", payload: vendorId });
			})
	}
}