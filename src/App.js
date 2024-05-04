import React from "react";
import data from "./data.json";
import Header from "./Components/Header";

function App() {
  console.log(data);
  return <div>
    <Header />
  </div>;
}

export default App;
