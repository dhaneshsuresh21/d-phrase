const Languages = ({ setFromLanguage, setToLanguage }) => {
  const languages = [
    {
      original: "Afrikaans",
      code: "af",
    },
    {
      original: "Arabic",
      code: "ar",
    },
    {
      original: "Chinese",
      code: "zh-TW",
    },
    {
      original: "English",
      code: "en",
    },
    {
      original: "Hindi",
      code: "hi",
    },
      {
        original: "Dutch",
        code: "nl",
      },
      {
        original: "French",
        code: "fr",
      },
      {
        original: "German",
        code: "de",
      },
      {
        original: "Greek",
        code: "el",
      },
      {
        original: "Irish",
        code: "ga",
      },
      {
        original: "Italian",
        code: "it",
      },
      {
        original: "Japanese",
        code: "ja",
      },
    
  ];

  const changeFromLanguage = (e) => {
    console.log(e.target.value);
    setFromLanguage(e.target.value);
  };

  const changeToLanguage = (e) => {
    console.log(e.target.value);
    setToLanguage(e.target.value);
  };

  return (
    <>
      <div className="mx-10 text-xs flex font-family:'Times New Roman' mt-20 md:p-5 md:w-5/6 md:mx-auto md:text-sm md:font-bold ">
        <select
          className="flex-none border-black border-2"
          name="from-languages"
          id="from-languages"
          onChange={changeFromLanguage}
        >
          {languages.map((language) => {
            return (
              <option
                className=""
                key={language.code}
                value={language.code}
              >
                {language.original}
              </option>
            );
          })}
        </select>

        <div className="grow"></div>

        <select
          className="flex-none border-black border-2"
          name="to-languages"
          id="to-languages"
          onChange={changeToLanguage}
        >
          {languages.map((language) => {
            return (
              <option
                className=""
                key={language.code}
                value={language.code}
              >
                {language.original}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Languages;
