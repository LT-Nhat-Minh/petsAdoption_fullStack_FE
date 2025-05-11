const { useState, createContext, useContext } = require("react");

const LanguageContext = createContext(null);

const LanguageProvider = (props) => {
  const { children } = props;
  const [isEnglish, setIsEnglish] = useState(false);
  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
