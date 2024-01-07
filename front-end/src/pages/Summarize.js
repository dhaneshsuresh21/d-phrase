import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../components/Alert";

const Summarize = () => {

  const [alert, setAlert] = useState(null);
  const [originalText, setOriginalText] = useState("");
  const [summarizedText, setSummarizedText] = useState("");

  useEffect(() => {
    closeAlert();
  }, [originalText]);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const summarizeText = async () => {
    const paragraph = originalText;

    if (paragraph === "" || paragraph === null) {
      showAlert("text is required", "error");
      return;
    }
    const options = {
      method: "POST",
      url: "https://d-phrase-server.onrender.com",

      data: {
        paragraph: paragraph,
      },
    };

    try {
      const response = await axios.request(options);
      if (!response.status === 200) {
        throw new Error(response);
      }
      // console.log(response.data.data.data.translatedText);
      setSummarizedText(response.data.data.result);
    } catch (err) {
      console.error(err);
      showAlert("Please try later", "error");
    }
  };

  const changeOriginalText = (e) => {
    setOriginalText(e.target.value);
  };

  const changeSummarizedText = (e) => {
    setSummarizedText(e.target.value);
  };

  return (
    <>
      <div className="font-bold flex flex-col mx-auto items-center justify-center w-5/6 h-96 mt-20 md:flex-row">
        <div className="md:p-5 w-full h-full relative">
          <textarea
            id="input-text"
            className="p-2 md:p-4 border border-black border-4 rounded-md overflow w-full h-full resize-none"
            placeholder="Enter the paragraph/text"
            value={originalText}
            onChange={changeOriginalText}
          ></textarea>
          <button
            id="btn"
            type="button"
            className="p-1 text-xs absolute bg-black text-white bottom-5 right-5 border-gray-500 border-2 rounded-md
            md:bottom-10 md:right-10 md:text-sm md:p-2"
            onClick={summarizeText}
          >
            summarize
          </button>
        </div>

        <div className="mt-10 w-full h-full md:mt-0 md:p-5 ">
          <textarea
            id="output-text"
            className="p-2 md:p-4 border border-black border-4 rounded-md overflow w-full h-full fixed-textarea resize-none"
            placeholder="Output"
            value={summarizedText}
            onChange={changeSummarizedText}
          ></textarea>
        </div>
      </div>

      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
      )}
    </>
  );
};

export default Summarize;
