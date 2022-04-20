function validate() {  
const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');

if (name.value.length <= 0) {  
    alert("Name is required");  
    fname.focus();  
    return false;  
}  
if (email.value.length <= 0) {  
    alert("Email is required");  
    fname.focus();  
    return false;  
} 
if (address.value.length <= 0) {  
    alert("Address is required");  
    fname.focus();  
    return false;  
} 
}