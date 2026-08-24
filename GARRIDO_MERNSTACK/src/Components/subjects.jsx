import React from "react";

export const subjects = [
  {
    schedCode: "CS101-A",
    subjectName: "Introduction to Programming",
    schedule: {
      days: "Mon / Wed",
      time: "8:00 AM - 9:30 AM",
      room: "Room 301",
      instructor: "Prof. Santos",
    },
  },
  {
    schedCode: "CS102-A",
    subjectName: "Object-Oriented Programming",
    schedule: {
      days: "Tue / Thu",
      time: "9:30 AM - 11:00 AM",
      room: "Room 302",
      instructor: "Prof. Santos",
    },
  },
  {
    schedCode: "CS201-A",
    subjectName: "Data Structures and Algorithms",
    schedule: {
      days: "Mon / Wed / Fri",
      time: "1:00 PM - 2:00 PM",
      room: "Room 405",
      instructor: "Prof. Dela Cruz",
    },
  },
];
 
export default function SubjectsList() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Class Schedule</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Sched Code</th>
            <th style={cellStyle}>Subject</th>
            <th style={cellStyle}>Days</th>
            <th style={cellStyle}>Time</th>
            <th style={cellStyle}>Room</th>
            <th style={cellStyle}>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subj) => (
            <tr key={subj.schedCode}>
              <td style={cellStyle}>{subj.schedCode}</td>
              <td style={cellStyle}>{subj.subjectName}</td>
              <td style={cellStyle}>{subj.schedule.days}</td>
              <td style={cellStyle}>{subj.schedule.time}</td>
              <td style={cellStyle}>{subj.schedule.room}</td>
              <td style={cellStyle}>{subj.schedule.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px 12px",
  textAlign: "left",
};
 
