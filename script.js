const studentList = [];

function addStudent() {
  let name = prompt("Enter student name: ");
  let score = prompt("Enter student score: ");
  let className = prompt("Enter student class: ");

  const newStudent = new Array(name, score, className);
  studentList.push(newStudent);
}

const viewStudents = () => {
  const str = "List of students: \n";
  for(student of studentList) {
    str += `${student[0]} from class ${student[2]} : ${student[1]}\n`;
  }
  alert(str);
}