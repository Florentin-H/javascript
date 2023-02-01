const etudiants = [
    ["riri", 5,10,15,20],
    ["fifi", 11,12,17,5],
    ["loulou", 19,18,1,19],
];

const userToDelete = 'fifi';

// let findUserToDelete = etudiants.find(function(etu){
//     return etu[0] == userToDelete;
// });

tab = etudiants.filter(item => item[0] !== userToDelete)
console.log(tab)





