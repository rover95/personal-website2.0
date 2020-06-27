import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Tabs from "./components/tabs";
import Photography from "./pages/photography/photography";

import "./app.scss";

function App() {
  const [name, setName] = useState("rovelast");
  return (
    <div className="app">
      <BrowserRouter>
        <Tabs></Tabs>
        <Route path="/" exact component={Home}></Route>
        <Route path="/photography" exact component={Photography}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
