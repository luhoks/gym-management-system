import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Attendees from "./pages/Attendees/Attendees";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import Class from "./pages/Classes/Classes";
import AddCoach from "./pages/Coaches/AddCoach";
import CoachDetail from "./pages/Coaches/CoachDetails";
import Coaches from "./pages/Coaches/Coaches";
import Dashboard from "./pages/dashboard.jsx";
import Facilities from "./pages/Facilities/Facilities";
import Forecasting from "./pages/Forecasting/Forecasting.jsx";
import Links from "./pages/Links/Links";
import Membership from './pages/Membership/Membership';
import Register from "./pages/Register/Register.jsx";
import Verification from "./pages/Register/Verification.jsx";
import Services from './pages/Services/Services';
import Account from "./pages/User/Account.jsx";
import Revenue from "./pages/Revenue/Revenue";

const App = () => {
  return (  
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Coaches" element={<Coaches />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Classes" element={<Class />} />
          <Route path="/Booking" element={<BookingsPage/>} />
          <Route path="/Coach-Details" element={<CoachDetail/>} />
          <Route path="/Add-coach" element={<AddCoach/>} />
          <Route path="/forecasting" element={<Forecasting/>} />
          <Route path="/attendees" element={<Attendees/>} />
          <Route path="/links" element={<Links/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/revenue" element={<Revenue />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;