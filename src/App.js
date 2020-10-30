import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
};

export default App;
