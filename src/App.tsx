import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Home_Page/HomePage";
import SignUp from "./User_Management/Sign_Up/SignUp";
import SignIn from "./User_Management/Sign_In/SignIn";
import News from "./Content_Management/Posts/News";
import SinglePost from "./Content_Management/Posts/SinglePost";
import CategorySelection from "./User_Management/DashBoard/CategorySelection";
import PostCreation from "./Content_Management/Posts/PostCreation";
import FacultyAdminDashboard from "./User_Management/DashBoard/Faculty_Admin_Dashboard/FacultyAdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<SinglePost />} />
          <Route path="/category-selection" element={<CategorySelection />} />
          <Route path="/post-creation" element={<PostCreation />} />
          <Route path="/faculty-admin-dashboard" element={<FacultyAdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
