import React from "react";
import "./Attendees.css";

const Attendees = () => {
  const attendees = [
    {
      id: "M00001",
      member: "Member Name",
      plan: "Plan A",
      date: "July 24, 2024",
      timeIn: "10:00 AM",
      timeOut: "12:00 PM",
    },
    {
        id: "M00001",
        member: "Member Name",
        plan: "Plan A",
        date: "July 24, 2024",
        timeIn: "10:00 AM",
        timeOut: "12:00 PM",
      },
      {
        id: "M00001",
        member: "Member Name",
        plan: "Plan A",
        date: "July 24, 2024",
        timeIn: "10:00 AM",
        timeOut: "12:00 PM",
      },
  ];

  return (
    <div className="attendees-container">
        <header className="top-header">Attendees</header>

        <div className="main-content">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Membership ID</th>
                  <th>Member</th>
                  <th>Active Plan</th>
                  <th>Date</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                </tr>
              </thead>
              <tbody>
                {attendees.map((attendee, index) => (
                  <tr key={index}>
                    <td>{attendee.id}</td>
                    <td className="member-cell">
                      <div className="profile-picture"></div>
                      {attendee.member}
                    </td>
                    <td>{attendee.plan}</td>
                    <td>{attendee.date}</td>
                    <td>{attendee.timeIn}</td>
                    <td>{attendee.timeOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Attendees;
