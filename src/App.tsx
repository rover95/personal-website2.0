import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import Tabs from './components/tabs';
import Router from './containers/router';
import Home from './pages/home/home';
import Photography from './pages/photography/photography';
import Panorama from './pages/panorama/panorama';
import Footmark from './pages/footmark/footmark';
import Introduction from './pages/introduction/introduction';
import Project from './pages/project/project';
import Unmatch from './pages/unmatch';
import Index from './pages';

import './app.scss';

import logPrint from './common/log_info_print';

function App() {
  logPrint();
  const [name, setName] = useState('rovelast');
  return (
    <Router>
      {/* <Redirect path="/" to="/#" /> */}
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/">
          <Tabs></Tabs>
          <div style={{ paddingTop: 55 }}>
            <Switch>
              {/* <Route path="/home" exact component={Index}></Route> */}
              <Route path="/photography" exact component={Photography}></Route>
              <Route path="/panorama" exact component={Panorama}></Route>
              <Route path="/footmark" exact component={Footmark}></Route>
              <Route path="/introduction" exact component={Introduction}></Route>
              <Route path="/project" exact component={Project}></Route>
              <Route component={Unmatch} />
            </Switch>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
