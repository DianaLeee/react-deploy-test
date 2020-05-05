import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
};

export default App;
