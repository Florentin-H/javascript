const oneQuestion = document.querySelector('div.question p');

const myQuestions = [
    {
        question : "Quel rang suis-je dans Rocket League?",
        answers: {
            a: "Grand Champion 2",
            b: "Grand Champion 3",
            c: "Super Sonic Legend"
        },
        correctAnswer: "a"
    },
    {
        question : "Qui a été triple champion du monde des RLCS?",
        answers: {
            a: "Fairy Peak",
            b: "Rizdax",
            c: "Kaydop"
        },
        correctAnswer: "c"
    },
    {
        question : "Qui a été recruté chez vitality alors qu'il n'avais pas l'âge d'être joueur RLCS?",
        answers: {
            a: "Zen",
            b: "Alpha54",
            c: "Kaydop"
        },
        correctAnswer: "a"
    },
]

myQuestions.forEach(question => {
    console.log(question.question);
});
oneQuestion.innerHTML = question