const previousOperationText = document.querySelector("#prev-operation");
const currentOperationText = document.querySelector("#current-operation");
const button = document.querySelectorAll("#bttn-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    //Adiciona os números na tela.
    addDigit(digit) {

        this.currentOperation = digit
        this.updateScreen()
    }
    // Muda os valores na tela da calculadora.
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation; //Adiciona os números da operação atual dentro do texto da operação atual. 
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            console.log("Op: " + value);
        }
    });
});

//Mostra no console os botões dos números e das operações sendo apertadas.
//button.forEach((btn) => {
   // btn.addEventListener("click", (e) => {
       // const value = e.target.innerText;

       // if(+value >=0 || value === ".") {
           // console.log(value);
       // } else {
           // console.log("Op: " + value);
      //  }
   // });
// });