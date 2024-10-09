
// AJAX HttpRequest Method
const request = new XMLHttpRequest();

// Prepare the end point to call the API  
const myIP = '91.126.18.227';
const endPoint = 'https://worldtimeapi.org/api/ip/' + myIP; //Example: http://worldtimeapi.org/api/ip/37.15.249.54
console.log(endPoint);

// Call the request
fetch(endPoint);

fetch (endPoint)
.then(request => request.json()) // Execute the request
.then(printData => console.log(printData)); // Print data

location.reload()