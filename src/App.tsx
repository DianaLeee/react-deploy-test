import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={() => <div>404 not found</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
