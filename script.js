// Get references to the HTML elements
let original_link = document.getElementById("original_link");  // Input field for the original URL
let generate = document.getElementById("generate");            // Button to generate the shortened URL
let shorten_link = document.getElementById("shorten_link");    // Input field to display the shortened URL
let copy = document.getElementById("copy");                    // Button to copy the shortened URL

// API endpoint for URL shortening
let endpoint = 'https://api-ssl.bitly.com/v4/shorten';

// Event listener for the "Generate" button
generate.addEventListener("click", () => {
    fetch(endpoint, {
        method: 'POST',  // HTTP method for the request
        headers: {
            Authorization: 'Bearer 3b09c8c80e64a477adc49045d3831d5a56714f52', // Authorization token
            'Content-Type': 'application/json',  // Content type of the request
        },
    })
    .then((value) => {
        console.log(value);  // Log the response value
    });
});
