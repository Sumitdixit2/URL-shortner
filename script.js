let original_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let shorten_link = document.getElementById("shorten_link");
let copy = document.getElementById("copy");
let endpoint = 'https://api-ssl.bitly.com/v4/shorten';



generate.addEventListener("click", () => {
    fetch(endpoint, {
        method: 'POST',
    headers: {
        Authorization: 'Bearer 3b09c8c80e64a477adc49045d3831d5a56714f52',
        'Content-Type': 'application/json',
    },
    })
    
    .then((value)=>{
        console.log(value);
    })
});