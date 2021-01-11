export function fetchVendors(){
        console.log('inside fetch vendors')
        fetch('http://localhost:3000/api/v1/vendors')
        .then(response => response.json())
        .then(data => console.log(data))  
    
         
}