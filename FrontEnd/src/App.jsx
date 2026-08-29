import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CustomerLayout from "./Customer/CustomerOutLet";
import Home from "./Customer/Home";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="home" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
