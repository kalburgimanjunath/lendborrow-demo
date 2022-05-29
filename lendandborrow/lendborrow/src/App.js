import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const title = "lend & borrow";
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage title={title} />} />
        <Route path="/signup" element={<SignupPage title={title} />} />
        <Route path="/dashboard" element={<DashboardPage title={title} />} />
        <Route path="/" exact element={<LoginPage title={title} />} />
      </Routes>
    </div>
  );
}

export default App;
