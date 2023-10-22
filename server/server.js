const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 3000;

server.post("/paraphrase", async (req, res) => {
  const phrase = req.body.phrase;
  const X_RAPID_API_KEY = process.env.X_RAPID_API_KEY_PARAPHRASE;
  const X_RAPID_API_HOST = process.env.X_RAPID_API_HOST_PARAPHRASE;
  const URL = process.env.URL_PARAPHRASE;

  const options = {
    method: "POST",
    url: URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": X_RAPID_API_KEY,
      "X-RapidAPI-Host": X_RAPID_API_HOST,
    },
    data: { input: phrase },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.output);
    return res.send({ data: response.data.output });
  } catch (error) {
    console.error(error);
    return res.send({ error: error.message });
  }

  return res.send("####");
});

server.post("/translate", async (req, res) => {
  const source = req.body.source;
  const target = req.body.target;
  const phrase = req.body.phrase;

  console.log(source);
  console.log(target);
  console.log(phrase);

  const X_RAPID_API_KEY = process.env.X_RAPID_API_KEY_TRANSLATE;
  const X_RAPID_API_HOST = process.env.X_RAPID_API_HOST_TRANSLATE;
  const URL = process.env.URL_TRANSLATE;

  const options = {
    method: "POST",
    url: URL,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": X_RAPID_API_KEY,
      "X-RapidAPI-Host": X_RAPID_API_HOST,
    },
    data: {
      source_language: source,
      target_language: target,
      text: phrase,
    },
  };

  try {
    const response = await axios.request(options);
    return res.send({ data: response.data });
  } catch (error) {
    console.log(error.response.status);

    if (error.response.status >= 400 && error.response.status < 500)
      res.status(400);
    else res.status(500);
    // res.status(error);
    return res.send({ error: error.response.data.message });
  }
  return res.send("####");
});

server.post("/summarize", async (req, res) => {
  const paragraph = req.body.paragraph;
  const X_RAPID_API_KEY = process.env.X_RAPID_API_KEY_SUMMARIZE;
  const X_RAPID_API_HOST = process.env.X_RAPID_API_HOST_SUMMARIZE;
  const URL = process.env.URL_SUMMARIZE;

  const options = {
    method: "POST",
    url: URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": X_RAPID_API_KEY,
      "X-RapidAPI-Host": X_RAPID_API_HOST,
    },
    data: {
      text: paragraph,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.send({data: response.data});
  } catch (error) {
    console.error(error);
    return res.send({error:error});
  }
});

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
