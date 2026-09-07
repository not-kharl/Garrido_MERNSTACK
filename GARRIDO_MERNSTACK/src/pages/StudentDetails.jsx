import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";

function StudentDetails() {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div>
        <h2>Student not found</h2>
        <Link to="/students">Back to list</Link>
      </div>
    );
  }

  return (
    <div className="student-details">
      <h1>{student.name}</h1>
      <p><strong>Student Number:</strong> {student.studentNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <Link to="/students">← Back to Student List</Link>
    </div>
  );
}

export default StudentDetails;