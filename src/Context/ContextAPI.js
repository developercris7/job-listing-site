import { createContext, useState } from "react";
import data from "../data.json";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [filterTabs, setFilterTabs] = useState({
    role: [],
    level: [],
    languages: [],
    tools: [],
  });

  const [jobLists, setJobLists] = useState(data);

  //   Functions

  const handleInsertFilters = (option, tabs) => {
    const data = filterTabs[tabs];
    if (!data.includes(option)) {
      setFilterTabs({ ...filterTabs, [tabs]: [...data, option] });
    }
  };

  const handleRemoveFilters = (tabs, index) => {
    const data = filterTabs[tabs];
    data.splice(index, 1);
    setFilterTabs({ ...filterTabs, [tabs]: data });
  };

  const handleClearAllFilters = () => {
    setFilterTabs({
      role: [],
      level: [],
      languages: [],
      tools: [],
    });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        filterTabs,
        setFilterTabs,
        jobLists,
        setJobLists,
        handleInsertFilters,
        handleRemoveFilters,
        handleClearAllFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
