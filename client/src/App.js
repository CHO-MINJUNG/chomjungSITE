import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main.js";
import Diary from "./pages/diary/Diary.js";
import Guestbook from "./pages/guestbook/Guestbook.js";
import Navigator from "./components/Nav/Navigator.js";

function App() {
  return(
    <div>
      <Navigator/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/diary" exact={true} element={<Diary />} />
        <Route path="/guestbook" exact={true} element={<Guestbook />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
