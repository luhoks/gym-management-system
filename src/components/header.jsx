import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/samplelogo.png";
import './header.css';

function header() {
  return (
    <nav className="sidebarheader">
      <div className="logo-container">
        <img id="gym-logo" src={logo} alt="logo" />
      </div>
      <ul className="menu">
        <li>
          <Link className="nav-link" to="/">
            <i className="fa-solid fa-tachometer-alt"></i>
            <span>DASHBOARD</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            <span>REGISTER</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Membership">
            <i className="fa-solid fa-users"></i>
            <span>MEMBERSHIP</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Revenue">
            <i className="fa-solid fa-dollar-sign"></i>
            <span>REVENUE</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Booking">
            <i className="fa-solid fa-calendar-check"></i>
            <span>BOOKINGS</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Forecasting">
            <i className="fa-solid fa-chart-line"></i>
            <span>FORECASTING</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Coaches">
            <i className="fa-solid fa-user-tie"></i>
            <span>COACHES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Classes">
            <i className="fa-solid fa-chalkboard-teacher"></i>
            <span>CLASSES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Services">
            <i className="fa-solid fa-concierge-bell"></i>
            <span>SERVICES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Facilities">
            <i className="fa-solid fa-dumbbell"></i>
            <span>FACILITIES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Attendees">
            <i className="fa-solid fa-people-group"></i>
            <span>ATTENDEES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Links">
            <i className="fa-solid fa-link"></i>
            <span>LINKS</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/account">
            <i className="fa-solid fa-user-secret"></i>
            <span>USER ACCOUNT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default header;