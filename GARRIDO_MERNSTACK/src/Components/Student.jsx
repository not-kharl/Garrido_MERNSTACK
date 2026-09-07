import { Link } from "react-router-dom";

function Student({ id, name, studentNumber, course, yearSection }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p><strong>Student No:</strong> {studentNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Year & Section:</strong> {yearSection}</p>
      <Link to={`/students/${id}`} className="view-details-btn">
        View Full Details
      </Link>
    </div>
  );
}

export default Student;