import React from "react";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";
import Navbar from "./Navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StringProvider } from "./Context/StringContext";

function App() {
  return (
    <StringProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Photos} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </StringProvider>
  );
}

export default App;
