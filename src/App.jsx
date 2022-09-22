import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";

import "./index.css";

import { StoreProvider } from "store/store";

const App = () => (
  <StoreProvider>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
