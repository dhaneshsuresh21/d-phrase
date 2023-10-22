const axios = require("axios");
// const { text } = require("express");

const translate = async (source,target,phrase) => {
// const encodedParams = new URLSearchParams();
// encodedParams.set('source_language', source);
// encodedParams.set('target_language', target);
// encodedParams.set('text', phrase);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '66de8e5ffbmsh10a46a82831edb9p1a29ccjsneaee858cd094',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: {
    source_language : source,
    target_language : target,
    text : phrase
  },
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

const getAllLanguages = async () => {
  const options = {
    method: "GET",
    url: "https://text-translator2.p.rapidapi.com/getLanguages",
    headers: {
      "X-RapidAPI-Key": "66de8e5ffbmsh10a46a82831edb9p1a29ccjsneaee858cd094",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    console.log(response.data.data.languages);
  } catch (error) {
    console.error(error);
  }
};

//getAllLanguages();
const phrase = "what is your name? ";
translate("en","hi",phrase);