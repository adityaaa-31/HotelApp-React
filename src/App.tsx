import "./App.css";
import "./index.css";

import UserData from "./components/UserData";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/users" Component={UserData} />
        </Routes> */}
      <SignUp />
    </div>
  );
}

export default App;
