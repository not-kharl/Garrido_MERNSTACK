import students from "../data/students.json";
import Student from "../components/Student";

function Students() {
  return (
    <div className="page students-page">
      <h1>Student List</h1>
      <div className="student-list">
        {students.map((student) => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            studentNumber={student.studentNumber}
            course={student.course}
            yearSection={student.yearSection}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;