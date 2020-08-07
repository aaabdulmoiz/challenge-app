import React, { useState, useEffect, useContext } from "react";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";
import Navbar from "./Navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PhotoProvider } from "./Context/PhotoContext";

const App = (props) => {
  //Wrapped all components in the Provider so values can be accessed across all components
  return (
    <PhotoProvider>
      <Navbar />
      <Switch>
        <Route path="/" component={Photos} exact />
        <Route path="/cart" component={Cart} />
      </Switch>
    </PhotoProvider>
  );
};

export default App;
