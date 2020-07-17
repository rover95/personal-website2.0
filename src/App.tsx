import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Tabs from './components/tabs';
import Home from './pages/home/home';
import Photography from './pages/photography/photography';
import Footmark from './pages/footmark/footmark';
import Introduction from './pages/introduction/introduction';

import './app.scss';


function App() {
  const [name, setName] = useState('rovelast');
  return (
    <div className="app">
      <BrowserRouter>
        <Tabs></Tabs>
        <Route path="/" exact component={Home}></Route>
        <Route path="/photography" exact component={Photography}></Route>
        <Route path="/footmark" exact component={Footmark}></Route>
        <Route path="/introduction" exact component={Introduction}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
