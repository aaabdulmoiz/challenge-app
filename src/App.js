import React from "react";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";
import Navbar from "./Navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Photos} exact />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
