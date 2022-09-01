const previousOperationText = document.querySelector("#prev-operation")
const currentOperationText = document.querySelector("#current-operation")
const button = document.querySelectorAll("#bttn-container button")

class Calculator {

}

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >=0 || value === ".") {
            console.log(value);
        } else {
            console.log("Op: " + value);
        }
    });
});