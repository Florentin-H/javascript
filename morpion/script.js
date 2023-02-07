const squares = document.querySelectorAll('.choice')
const reset = document.querySelector('.reset')
const winnerZone = document.querySelector('.winnerZone')
const symbols = ['x','o']
let tour = 0
let draw = 0
let game = true
 

    for (const square of squares ){
    
        square.addEventListener('click', function(){
            if(square.innerHTML.length == 0){
                this.innerHTML = symbols[tour]
                win = tour
                tour++
                tour= tour% 2
                draw++
                
                if (isVictory(squares)) {
                    winnerZone.innerHTML = symbols[win] + " a gagné";
                    squares.forEach(element => {
                        element.disabled = true;
                    });
                }else if (draw == 9) {
                    winnerZone.innerHTML = " Match nul";
                    ;
                }
            };
            })
    }
    


function isVictory(squares) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			squares[comb[0]].textContent == squares[comb[1]].textContent &&
			squares[comb[1]].textContent == squares[comb[2]].textContent &&
			squares[comb[0]].textContent != ''
		) {
			return true;
		}
	}
	
	return false;
}

    reset.addEventListener('click', function(){
        for(const square of squares){
                    square.innerHTML = ""
                    tour =1
                    reset.innerHTML = "reset"
                    winnerZone.innerHTML = ""
                    draw = 0
                    squares.forEach(element => {
                        element.disabled = false;
                    });
            }
    })
        


