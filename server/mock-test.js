const nock = require('nock');
const request = require('request-promise');

// Mock a request to a specific URL
nock('http://localhost:9001')
  .post('/paraphrase')
  .reply(500, 'Internal Server Error');

// Make the API request
request.post('http://localhost:9001/paraphrase')
  .catch((error) => {
    // Handle the error here
    console.log(error.statusCode);
    console.error('API request failed with error:', error.message);
  });
