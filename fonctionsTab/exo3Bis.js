const students = [
    { name: 'Riri', age: 25 },
    { name: 'Fifi', age: 23 },
    { name: 'Loulou', age: 22 },
    { name: 'Titi', age: 24 }
  ];

  const deleteUser = 'Titi';

  const newStudents = students.filter(students => students.name !== deleteUser);
  console.log(newStudents);



//   const etudiants = [
//     {name: "riri", age: 20},
//     {name: "fifi", age: 20},
//     {name: "loulou", age: 20},
// ];

// const userToDelete = 'fifi';

// // let findUserToDelete = etudiants.find(function(etu){
// //     return etu[0] == userToDelete;
// // });

// const tab = etudiants.filter(etudiants => etudiants.name !== userToDelete)
// console.log(tab)