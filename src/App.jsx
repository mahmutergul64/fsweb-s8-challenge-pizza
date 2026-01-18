import React from 'react';
import './App.css';
import OrderForm from './components/OrderForm';
import Success from './components/Success';
import Home from './components/Home'; 
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/pizza">
          <OrderForm />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;