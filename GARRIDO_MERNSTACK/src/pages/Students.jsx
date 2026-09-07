// src/pages/Students.jsx
import students from "../data/students.json";
import Student from "../components/Student";

function Students() {
  return (
    <div className="students-page">
      <h1>Student List</h1>
      <div className="student-list">
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;