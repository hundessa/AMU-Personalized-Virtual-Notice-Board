import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home_Page/HomePage";
import SignUp from "./User_Management/Sign_Up/SignUp";
import SignIn from "./User_Management/Sign_In/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>     
    </>
  );
}

export default App;
