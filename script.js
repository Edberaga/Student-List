const studentList = [];

function addStudent() {
  let name = prompt("Enter student name: ");
  let score = prompt("Enter student score: ");
  let className = prompt("Enter student class: ");

  const newStudent = new Array(name, score, className);
  console.log("New student: " + newStudent);
  studentList.push(newStudent);
  console.log("Student list: " + studentList);
}

const viewStudents = () => {
  let str = "List of students: \n";
  for(student of studentList) {
    str += `${student[0]} from class ${student[2]} : ${student[1]}\n`;
  }
  alert(str);
}