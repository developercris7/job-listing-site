import React, { useEffect, useState } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import Jobpost from "./Components/Jobpost";

function App() {
  const [filterTabs,setFilterTabs] = useState({
    role :[],
    level : [],
    languages : [],
    tools : []
  })
 
  const [jobLists, setJobLists] = useState(data);

  useEffect(() => {
    const {role,languages,level,tools} = filterTabs;

 console.log('Effected')
    if(role.length > 0){
      const jobs = jobLists.filter((job) => role.includes(job.role));
      setJobLists(jobs)
    }
    if(level.length > 0){
      console.log("hiii")
      const jobs = jobLists.filter((job) => level.includes(job.level))
      setJobLists(jobs)
  console.log(jobs);
    }

    if(languages.length > 0){
      const jobs = jobLists.filter((job)=>languages.every((lan) => job.languages.includes(lan)))
      setJobLists(jobs)
    }

    if(tools.length > 0){
      const jobs = jobLists.filter((job)=>tools.every((lan) => job.tools.includes(lan)))
      setJobLists(jobs)
    }
  },[filterTabs]);


  const handleOption = (option,tabs) => {
    const d = filterTabs[tabs]
    setFilterTabs({...filterTabs,[tabs]:[...d,option]})
  };

  return (
    <div>
      <Header filterTabs={filterTabs} />
      <main>
        {jobLists.map((job) => (
          <Jobpost job={job} handleOption={handleOption} key={job.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
