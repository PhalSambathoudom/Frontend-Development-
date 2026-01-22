// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Theara", age: 20 },
  { firstName: "Bình", lastName: "Dom", age: 22 },
  { firstName: "Cẩm", lastName: "Meng", age: 21 },
  { firstName: "An", lastName: "Ly", age: 19 }, // Duplicate first name !
];


/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {string} lastName  - the student last name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, lastName, newAge) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName);
  if (student) {
    student.age = newAge;
  } else { // use for not found case
    console.log(`Student with name ${firstName} ${lastName} not found!`); 
  }
}

// 1 - Update An age to 30
updateStudentAge("An", "Ly", 30);
updateStudentAge("An", "Theara", 25);
updateStudentAge("sfda", "sjfhoaj", 20); // not found case

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
