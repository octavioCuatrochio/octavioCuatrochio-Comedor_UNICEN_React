
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Funds from "./pages/Funds";
import Aside from "./components/Aside/Aside";

import "./App.css";

function App() {
  const [openedAside, setOpenedAside] = useState(false);


  function toggleAsideHandler() {
    setOpenedAside(prevOpenedAside => {
      return !prevOpenedAside;
    });
  }


  return (
    <div>
      {openedAside && <Aside opened={openedAside} onClose={toggleAsideHandler} className="aside__open" />}
      {!openedAside && <Aside opened={openedAside} className="aside__close" />}
      <Header onToggleAside={toggleAsideHandler} funds={"243.5"} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/wallet">
          <Funds />
        </Route>
        <Route path="/list">
          <Products />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;