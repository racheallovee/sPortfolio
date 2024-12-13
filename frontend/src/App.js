import React from "react";

import { Navbar } from "./components";
import { About } from "./container";
import { Footer } from "./container";
import { Header } from "./container";
import { Skills } from "./container";
import { Testimonial } from "./container";
import { Work } from "./container";

import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
