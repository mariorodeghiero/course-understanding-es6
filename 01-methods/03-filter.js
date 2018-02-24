let students = [
  { name: "Mário", age: 30 },
  { name: "Leo", age: 18 },
  { name: "Bento", age: 17 },
  { name: "Lana", age: 16 }
];

let greater18 = students.filter(student => student.age >= 18);

console.log("------------------------------------");
console.log(greater18);
console.log("------------------------------------");
