import "./App.css";
import React, { createContext, useReducer } from 'react';
import DocUpload from "./components/DocumentUpload/DocUpload";
import Login from "./components/Login-SingUp-Page/Login/Login";
import SignUp0 from "./components/Login-SingUp-Page/SignUp/signUp0";
// import VerificationPage from "./components/VerificationPage/VerificationPage";
import HomePage from "./pages/HomePage/HomePage";
import SuperAdminPage from './pages/SuperAdminPage/SuperAdminPage'
import SuperAdminLogin from './components/SuperAdminPageComponent/superadminLogin/SuperadminLogin'
import MainLandingpage from "./pages/MainLandingpage/MainLandingpage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminLogin from "./components/AdminPageComponent/adminLogin/AdminLogin";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import { reducer, initialState } from './reducers/userReducer'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import CommentsPage from "./components/CommentsPage/CommentsPage";
import ContactUs from "./components/Landingpage content/ContactUs/ContactUs";
import FAQ from "./components/Landingpage content/FAQ/FAQ";
import ErrorPage from "./components/404page/Pagenotfound";
import Protected from "./Protected";
export const UserContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    // <-----------------------------------react router---------------------------------------------->


    <UserContext.Provider value={{ state, dispatch }}>

      <Router >
        <Routes>
          <Route path="/" element={<MainLandingpage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Comments" element={<CommentsPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp0 />} />
          <Route path="/DocUpload" element={<DocUpload />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/superadmin_login" element={<SuperAdminLogin />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/home" element={<Protected Component = {HomePage} />} />
          <Route path="/admin" element={<Protected Component = {AdminPage} />} />
          <Route path="/profile" element={<Protected Component = {ProfilePage} />} />
          <Route path="/superadmin" element={<SuperAdminPage />} />
        </Routes>
      </Router >

    </UserContext.Provider>
  );
}

export default App;
