import { Link } from "react-router-dom";

function Student({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Student Number: {student.studentNumber}</p>
      <p>Course: {student.course}</p>
      <Link to={`/students/${student.id}`}>View Details</Link>
    </div>
  );
}

export default Student;