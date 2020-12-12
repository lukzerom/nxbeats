import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home";
import Login from "./components/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contacts} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
