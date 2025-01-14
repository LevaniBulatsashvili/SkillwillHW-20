import { createContext, useContext, useMemo, useState } from "react";

const language = {
  en: {
    home: "Home",
    create: "Create",
    lang: "Lang (En)",
    allRightsReserved: "All Rights Reserved",
    myTodos: "My Todos",
    noTasksAvailable: "No Tasks Available",
    newTodo: "New Todo",
    firstName: "First Name",
    lastName: "Last Name",
    todo: "Todo",
    completed: "Completed",
    editTodo: "Edit Todo",
    anErrorHasOccured: "An Error Has Occured",
    backToHome: "Back To Home",
    failedToFetchData: "Failed to fetch data!",
    deadline: "Deadline",
  },
  ka: {
    home: "მთავარი",
    create: "შექმნა",
    lang: "ენა (ქარ)",
    allRightsReserved: "ყველა უფლება დაცულია",
    myTodos: "ჩემი მიზნები",
    noTasksAvailable: "მიზნები არ არსებობს",
    newTodo: "ახალი მიზანი",
    firstName: "სახელი",
    lastName: "გვარი",
    todo: "მიზანი",
    completed: "მიღწეულია",
    editTodo: "რედაქტირება",
    anErrorHasOccured: "შეცდომა მოხდა",
    backToHome: "მთავარ გვერდზე დაბრუნება",
    failedToFetchData: "მონაცემების მიღება ვერ მოხერხდა!",
    deadline: "ვადა",
  },
};

const LangContext = createContext(null);

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const contextValue = useMemo(() => ({
    language: language[lang],
    toggleLang: () => setLang((prev) => (prev === "en" ? "ka" : "en")),
  }));

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

export const useLangContext = () => {
  const contextValue = useContext(LangContext);
  if (!contextValue)
    throw new Error("Your component is not inside LangContextProvider!");

  return contextValue;
};

export default LangContextProvider;
