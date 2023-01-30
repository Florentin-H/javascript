const notes = [5,10,15,20];
let sum = 0
// for(value of notes){
//     sum = value + sum
// }


for (let i = 0; i < notes.length; i++){

    sum = notes[i] + sum

}

// for (const note in notes){
//     sum = notes[note] + sum
    

// }
function moyenne(){
    moyenne = sum/notes.length
    return moyenne

}

console.log(`la moyenne est ${moyenne()}`)