const axios = require("axios");

const summarize = async (text) => {
    const axios = require('axios');

    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/summary',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66de8e5ffbmsh10a46a82831edb9p1a29ccjsneaee858cd094',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
      },
      data: {
        text: 'ohannes Gutenberg (1398 – 1468) was a German goldsmith and publisher who introduced printing to Europe. His introduction of mechanical movable type printing to Europe started the Printing Revolution and is widely regarded as the most important event of the modern period. It played a key role in the scientific revolution and laid the basis for the modern knowledge-based economy and the spread of learning to the masses.'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data.data.result);
    } catch (error) {
        console.error(error);
    }
};

summarize("a");