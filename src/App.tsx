import "./App.css";
import "./index.css";

import SignUp from "./components/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" Component={SignUp} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
