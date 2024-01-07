import { useState } from "react";
import axios from "axios";
import Alert from "../components/Alert";

const Paraphrase = () => {

    const [alert, setAlert] = useState(null);

    const [phrase,setPhrase] = useState("");
    const [output,setOutput] = useState("");

    const changePhrase = (e) => {
        setPhrase(e.target.value);
    }

    const changeOutput = (e) => {
        setOutput(e.target.value);
    }

    const showAlert = (message, type) => {
        setAlert({ message, type });
      };
    
      const closeAlert = () => {
        setAlert(null);
      };

    const paraphrasePhrase = async () => {

        if(phrase === "" || phrase === null)
        {
            showAlert("phrase/sentence is required","error");
            return;
        }

        const options = {
            method: "POST",
            url: "https://d-phrase-server.onrender.com",
      
            data: {
              phrase: phrase,
            },
          };

          try {
            const response = await axios.request(options);
            if (!response.status === 200) {
              throw new Error(response);
            }
            const phrasedSentence = (response.data.data);
            setOutput(phrasedSentence);
          } catch (err) {
            console.error(err);
            showAlert("Please try later", "error");
          }
        
    }

    




  return (
    <>
      <div className="font-bold flex flex-col mx-auto items-center justify-center w-5/6 h-96 mt-20 md:flex-row">
        <div className="md:p-5 w-full h-full relative">
          <textarea
            id="input-text"
            className="p-2 md:p-4 border border-black border-4 rounded-md overflow w-full h-full resize-none"
            placeholder="Enter the phrase/sentence"
            value={phrase}
            onChange={changePhrase}
          ></textarea>
          <button
            id="btn"
            type="button"
            className="p-1 text-xs absolute bg-black text-white bottom-5 right-5 border-gray-500 border-2 rounded-md
            md:bottom-10 md:right-10 md:text-sm md:p-2"
            onClick={paraphrasePhrase}
          >
            paraphrase
          </button>
        </div>

        <div className="mt-10 w-full h-full md:mt-0 md:p-5 ">
          <textarea
            id="output-text"
            className="p-2 md:p-4 border border-black border-4 rounded-md overflow w-full h-full fixed-textarea resize-none"
            placeholder="Output"
            value={output}
            onChange={changeOutput}
          ></textarea>
        </div>
      </div>

      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
      )}
    </>
  );
};

export default Paraphrase;
