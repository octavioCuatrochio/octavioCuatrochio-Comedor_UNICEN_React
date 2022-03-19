
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Funds from "./pages/Funds";
import Login from "./pages/Login";
import Aside from "./components/Aside/Aside";

import "./App.css";

function App() {
  const [funds, setFunds] = useState("243.5");
  const [openedAside, setOpenedAside] = useState(false);

  function toggleAsideHandler() {
    setOpenedAside(prevOpenedAside => {
      return !prevOpenedAside;
    });
  }


  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          {openedAside && <Aside opened={openedAside} onClose={toggleAsideHandler} className="aside__open" />}
          {!openedAside && <Aside opened={openedAside} className="aside__close" />}
          <Header onToggleAside={toggleAsideHandler} funds={funds} />
          <Switch>
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;