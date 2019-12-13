import React from "react";
// eslint-disable-next-line import/no-unresolved,import/no-absolute-path
import Im from "assets/images/test.png";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main>
      <Header />
      <h2>App</h2>
      <img src={Im} alt="" />
    </main>
  );
};

export default App;
