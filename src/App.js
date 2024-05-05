import React from "react";
import Header from "./Components/Header";
import Jobpost from "./Components/Jobpost";
import { DataProvider } from "./Context/ContextAPI";

function App() {
  
  return (
    <DataProvider>
      <div>
        <Header />
        {/* <main>
          {jobLists.map((job) => (
            <Jobpost job={job} key={job.id} />
          ))}
        </main> */}
        <Jobpost />
      </div>
    </DataProvider>
  );
}

export default App;
