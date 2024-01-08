import { useEffect, useState } from "react";
import Languages from "../components/Languages";
import Alert from "../components/Alert";

import axios from "axios";

const Translate = () => {
  const [alert, setAlert] = useState(null);

  const [fromLanguage, setFromLanguage] = useState("af");
  const [toLanguage, setToLanguage] = useState("af");

  const [fromLanguagePhrase, setFromLanguagePhrase] = useState("");

  const [translatedPhrase, setTranslatedPhrase] = useState("");

  const changeFromLanguagePhrase = (e) => {
    setFromLanguagePhrase(e.target.value);
  };
  const changeTranslatedLanguagePhrase = (e) => {
    setTranslatedPhrase(e.target.value);
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    closeAlert();
  }, [fromLanguage, toLanguage, fromLanguagePhrase]);

  const translatePhrase = async () => {
    const source = fromLanguage;
    const target = toLanguage;
    const phrase = fromLanguagePhrase;

    if (phrase === "" || phrase === null) {
      showAlert("Phrase/Text is required", "warning");
      return;
    }

    if (source === target) {
      showAlert("Source and Target language cannot be same", "warning");
      return;
    }

    const options = {
      method: "POST",
      url: "https://d-phrase-server.onrender.com/translate",

      data: {
        source: source,
        target: target,
        phrase: phrase,
      },
    };

    try {
      const response = await axios.request(options);
      if (!response.status === 200) {
        throw new Error(response);
      }
      // console.log(response.data.data.data.translatedText);
      const translatedText = (response.data.data.data.translatedText);
      setTranslatedPhrase(translatedText);
    } catch (e) {
      if ("response" in e && e.response.status === 400)
        showAlert(JSON.stringify(e.response.data.error), "error");
      else if ("response" in e && e.response.status === 500)
        showAlert("Internal Server Error : Please try again", "error");
      else showAlert("Please try later", "error");
    }
  };

  return (
    <>
      <Languages
        setFromLanguage={setFromLanguage}
        setToLanguage={setToLanguage}
      />

      {/* flex flex-row bg-zinc-400 mx-auto items-center justify-center w-5/6 h-96 mt-40 */}

      <div className="flex flex-col mx-auto items-center justify-center w-5/6 h-96 mt-5 md:flex-row">
        <div className="md:p-5 w-full h-full relative">
          <textarea
            type="text"
            id="input-text"
            className="p-2 md:p-4 font-bold border border-black border-4 rounded-md overflow w-full h-full resize-none"
            placeholder="Enter the phrase/sentence"
            value={fromLanguagePhrase}
            onChange={changeFromLanguagePhrase}
          ></textarea>
          <button
            id="btn"
            type="button"
            className="font-bold p-1 text-xs absolute bg-black text-white bottom-5 right-5 border-gray-500 border-2 rounded-md
            md:bottom-10 md:right-10 md:text-sm md:p-2"
            onClick={translatePhrase}
          >
            translate
          </button>
        </div>

        <div className="md:mt-0 md:p-5 mt-10 w-full h-full">
          <textarea
            type="text"
            id="output-text"
            className="p-2 md:p-4 font-bold border border-black border-4 rounded-md overflow w-full h-full fixed-textarea resize-none"
            placeholder="Output"
            value={translatedPhrase}
            onChange={changeTranslatedLanguagePhrase}
          ></textarea>          
        </div>
      </div>

      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
      )}
    </>
  );
};

export default Translate;
