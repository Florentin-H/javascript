const notes = [5,10,15,20];
console.log(notes);
//permet de supprimer le dernier élément du tableau.
notes.pop()
console.log(notes);

//permet d'ajouter un élément au tableau
notes.push(17,16)

console.log(notes);


//la fonction MAP: permet de récupérer un tableau et d'appporter une modification 
//et permet de reteouner un nouveau tableau auquel on a ajouté les modifications.

const  notes2 = notes.map((note)=>{
// return Math.pow(note,2);
return note ** 2;
});
//la fonction call back récupère les notes une à une.

console.log(notes2);


//récupérer l'index dans un tableau

const index = notes.findIndex(function(note){
    return note === 17;
})

console.log(index);