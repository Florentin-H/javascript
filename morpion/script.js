const squares = document.querySelectorAll('button')
const symbols = ['x','o']
let tour = 0


for (const square of squares ){
    
    square.addEventListener('click', function(){
        if(square.innerHTML.length == 0){
            this.innerHTML = symbols[tour]
            tour++
            tour %= 2

        };
     
        })

    
}