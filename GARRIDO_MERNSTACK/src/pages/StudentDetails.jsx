import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";

function StudentDetails() {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="page">
        <h2>Student not found</h2>
        <Link to="/students">Back to Students</Link>
      </div>
    );
  }

  return (
    <div className="page student-details">
      <h1>{student.name}</h1>
      <p><strong>Student No:</strong> {student.studentNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year & Section:</strong> {student.yearSection}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <Link to="/students" className="back-btn">← Back to Students</Link>
    </div>
  );
}

export default StudentDetails;