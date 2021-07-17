import './App.css';
import React from 'react';
import Routes from './routes';
import Navigation from './components/navigation';
import Error from './components/error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navigation></Navigation>
        <div className="App">
          <Switch>
            <Route path="/404" exact component={Error}></Route>
            <Route path="/" component={Routes}></Route>
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
