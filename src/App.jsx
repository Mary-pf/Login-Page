import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import "../src/Css/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
