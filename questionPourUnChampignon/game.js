const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions =[
    {
        question : "Quel rang suis-je dans Rocket League?",
        choice1: "Grand Champion 1",
        choice2: "Grand Champion 2",
        choice3: "Grand Champion 3",
        choice4: "Super Sonic Legend",
        answer: 2,
    },             
    {
        question : "Qui a été triple champion du monde des RLCS?",
        choice1: "Fairy Peak",
        choice2: "Rizdax",
        choice3: "Kaydop",
        choice4: "MonkeyMoon",
        answer: 3,
    },           
    {
        question : "Qui a été recruté chez vitality alors qu'il n'avait pas l'âge d'être joueur RLCS?",
        choice1: "Zen",
        choice2: "Alpha54",
        choice3: "Kaydop",
        choice4: "floflos19",
        answer: 1,
    },            
    {
        question : "Quelle est la plus grande chaine Esport FR de Rocket League?",
        choice1: "Rocket Braguette",
        choice2: "Croquette baguette",
        choice3: "Rocket Baguette",
        choice4: "Riri et pouet pouet",
        answer: 3,
    }        
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]

})
availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
            
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => { 
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
scoreText.innerText = score
}

startGame()






// const oneQuestion = document.querySelector('div.question p');

// const myQuestions = [
//     {
//         question : "Quel rang suis-je dans Rocket League?",
//         answers: {
//             a: "Grand Champion 2",
//             b: "Grand Champion 3",
//             c: "Super Sonic Legend"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question : "Qui a été triple champion du monde des RLCS?",
//         answers: {
//             a: "Fairy Peak",
//             b: "Rizdax",
//             c: "Kaydop"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question : "Qui a été recruté chez vitality alors qu'il n'avais pas l'âge d'être joueur RLCS?",
//         answers: {
//             a: "Zen",
//             b: "Alpha54",
//             c: "Kaydop"
//         },
//         correctAnswer: "a"
//     },
// ]

// myQuestions.forEach(question => {
//     console.log(question.question);
// });
// oneQuestion.innerHTML = question


