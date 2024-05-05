import React, { useEffect, useState } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import Jobpost from "./Components/Jobpost";

function App() {
  const [filterTabs, setFilterTabs] = useState({
    role: [],
    level: [],
    languages: [],
    tools: [],
  });

  const [jobLists, setJobLists] = useState(data);

  useEffect(() => {
    const { role, languages, level, tools } = filterTabs;
    let filteredJobs = data;

    if (role.length > 0) {
      filteredJobs = filteredJobs.filter((job) => role.includes(job.role));
    }
    if (level.length > 0) {
      filteredJobs = filteredJobs.filter((job) => level.includes(job.level));
    }

    if (languages.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        languages.every((lan) => job.languages.includes(lan))
      );
    }

    if (tools.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        tools.every((lan) => job.tools.includes(lan))
      );
    }

    setJobLists(filteredJobs);
  }, [filterTabs]);

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
    <div>
      <Header filterTabs={filterTabs} handleRemoveFilters={handleRemoveFilters} handleClearAllFilters={handleClearAllFilters} />
      <main>
        {jobLists.map((job) => (
          <Jobpost job={job} handleInsertFilters={handleInsertFilters} key={job.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
