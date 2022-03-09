import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main.js";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
