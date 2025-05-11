const { useState, createContext, useContext } = require("react");

const LanguageContext = createContext(null);

const useLanguageContext = () => {
  return useContext(LanguageContext);
};

const LanguageProvider = (props) => {
  const { children } = props;
  const [isEnglish, setIsEnglish] = useState(false);
  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { useLanguageContext };
export default LanguageProvider;
