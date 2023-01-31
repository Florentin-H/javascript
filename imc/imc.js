window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) {

        result.innerHTML = "Donnez une valeur de hauteur correct!";
    }
  
    else if (weight === "" || isNaN(weight)) {

        result.innerHTML = "Donnez une valeur de poids correct!";
    }
  
    // If both input is valid, calculate the bmi
    
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) 
        result.innerHTML = 
        `<span style="color: blue;">Sous poids : ${bmi}</span>`;
            
  
        else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = 
        `<span style="color: green;">Normal : <span>${bmi}</span>`; 
                
  
        else result.innerHTML = 
        `<span style="color: red;">Surpoids : ${bmi}</span>`;
            
    
}