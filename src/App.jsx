import Game from "./component/Game";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
