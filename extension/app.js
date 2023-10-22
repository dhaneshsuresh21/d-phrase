// Define the URL to which you want to send the POST request
const url = 'http://localhost:9001/paraphrase';

// Define the data you want to send in the request body (e.g., a JSON object)





// Create a configuration object for the request


const button = document.getElementById('btn');

btn.addEventListener('click',(e) => {

  const textElement = document.getElementById("input-text");
const text = textElement.value;

const data = {
  text : text,
};

const requestOptions = {
  method: 'POST', // Specify the HTTP method (POST in this case)
  headers: {
    'Content-Type': 'application/json', // Set the content type (e.g., JSON)
  },
  body: JSON.stringify(data), // Convert data to a JSON string and set it as the request body
};
  // Send the POST request using fetch
fetch(url, requestOptions).then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Parse the response as JSON
}).then((data) => {
  // Handle the JSON response data
  // console.log("jar");
  const outputElement = document.getElementById("output-text");
  outputElement.value = data.data;
  console.log(data.data);
  // const output = document.getElementById("output-text")
  // output.innerText = 
})
.catch((error) => {
  // Handle any errors that occurred during the request
  // console.error('Fetch error:', error);
});

})
