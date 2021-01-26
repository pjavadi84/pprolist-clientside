const editVendor = (vendor) => { 
    let vendorSelected = {name: vendor.name, total_cost: vendor.total_cost}
    return (dispatch) => {
        dispatch({type: "EDITING_VENDOR"})
        fetch(`/vendors/${vendorSelected.id}`,{
            method: 'PATCH',
            body: JSON.stringify(vendorSelected),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "EDIT_VENDOR", payload: vendorSelected}))
    }
}

export default editVendor