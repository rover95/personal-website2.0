import React, { useState } from "react";
import Home from "./pages/home/home";
import Tabs from "./components/tabs";

function App() {
  const [name, setName] = useState("rovelast");
  return (
    <div className="App">
      <Tabs></Tabs>
      <Home />
    </div>
  );
}

export default App;
