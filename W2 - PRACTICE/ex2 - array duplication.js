// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Theara", batch: "A", age: 20 },
  { firstName: "Bình", lastName: "Dom", batch: "B", age: 22 },
  { firstName: "Cẩm", lastName: "Meng", batch: "C", age: 21 },
  { firstName: "An", lastName: "Ly", batch: "A", age: 19 }, // Duplicate first name !
];


/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {string} lastName  - the student last name
 * @param {string} batch    - the student batch
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch);
  if (student) {
    student.age = newAge;
  } else { // use for not found case
    console.log(`Student with name ${firstName} ${lastName} not found!`); 
  }
}

// 1 - Update An age to 30
updateStudentAge("An", "Ly","A", 30);
updateStudentAge("An", "Theara", "A", 25);
updateStudentAge("sfda", "sjfhoaj", "A", 20); // not found case

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
