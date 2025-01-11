import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Coaches from "./pages/Coaches/Coaches";
import CoachDetail from "./pages/Coaches/CoachDetails";
import AddCoach from "./pages/Coaches/AddCoach";
import Facilities from "./pages/Facilities/Facilities";
import Membership from './pages/Membership/Membership';
import Services from './pages/Services/Services';
import Dashboard from "./pages/dashboard";
import Class from "./pages/Classes/Classes";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import Forecasting from "./pages/Forecasting/Forecasting";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;