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
        console.log(digit);
        //Verificar se a operação já possui um ponto (.).
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    //Processar todas as operações.
    processOperation(operation) {
        //Checar se a operação atua está vazia.
        if (this.currentOperationText.innerText === "") {
            //Mudar a operação.
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }


        //Pegar o valor atual e anterior.
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }

    // Mudar os valores na tela da calculadora.
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {
        if (operationValue === null) {
            // Anexa número ao valor atual.
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Checar se o valor é zero, se for apenas adeicionar o valor atual.
            if (previous === 0) {
                operationValue = current;
            }

            // Adiciona o valor atual ao anterior.
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";

        }
    }

    // Mudar a operação.
    changeOperation(operation) {

        const mathOperation = ["*", "/", "+", "-"];

        if (!mathOperation.includes(operation)) {
            return;
        }

        this.previousOperationText.innerText = previousOperationText.innerText.slice(0, -1) + operation;

    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});