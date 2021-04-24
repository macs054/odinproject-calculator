onload = () => {
    const inputContainer = document.querySelector(".input-container");
    let operands = [];
    let operator = "";
    let newCalc = true;
    let dot = false;

    const appendToInput = val => {
        if(inputContainer.textContent === "0" || newCalc && !dot) {
            if(operator) operands.push(parseFloat(inputContainer.textContent));
            inputContainer.textContent = val;
            newCalc = false;
        } else {
            if (operator && !operands[0]) {
                operands.push(parseFloat(inputContainer.textContent));
                inputContainer.textContent = val;
                dot = false;
            } else {
                inputContainer.textContent += val;
            }     
        }
    }

    const operate = (operands, operator) => {
        switch(operator) {
            case "+":
                return operands[0] + operands[1];
            case "-":
                return operands[0] - operands[1];
            case "×":
                return operands[0] * operands[1];
            case "÷":
                return operands[0] / operands[1];
        }
    }

    const callEquals = () => {
        if(operands.length >= 1) {
            operands.push(parseFloat(inputContainer.textContent));
            inputContainer.textContent = operate(operands, operator);
            operands = [];
            operator = "";
            newCalc = true;
            dot = false;
        }
    }

    const operatorButtonEvent = operatorString => {
        if(inputContainer.textContent !== "0" || inputContainer.textContent !== "0.") {
            if(operator && operands[0]) {
                callEquals();
                operator = operatorString;
            } else {
                operator = operatorString;
                newCalc = false;
            }
            dot = false;
        }
    }

    // 0-9
    document.querySelector(".one").addEventListener("click", () => {  
        appendToInput("1");
    });
    document.querySelector(".two").addEventListener("click", () => {
        appendToInput("2");
    });
    document.querySelector(".three").addEventListener("click", () => {
        appendToInput("3");
    });
    document.querySelector(".four").addEventListener("click", () => {
        appendToInput("4");
    });
    document.querySelector(".five").addEventListener("click", () => {
        appendToInput("5");
    });
    document.querySelector(".six").addEventListener("click", () => {
        appendToInput("6");
    });
    document.querySelector(".seven").addEventListener("click", () => {
        appendToInput("7");
    });
    document.querySelector(".eight").addEventListener("click", () => {
        appendToInput("8");
    });
    document.querySelector(".nine").addEventListener("click", () => {
        appendToInput("9");
    });
    document.querySelector(".zero").addEventListener("click", () => {
        appendToInput("0");
    });
    document.querySelector(".dot").addEventListener("click", () => {
        if(!dot) {
            if(operator && newCalc) {
                appendToInput("0.");
            } else {
                inputContainer.textContent === "0" ? inputContainer.textContent += "." : appendToInput(".");
            }
            dot = true;
        }
    });

    // clear
    document.querySelector(".clear").addEventListener("click", () => {
        inputContainer.textContent = "0";
        operator = "";
        operands = [];
        newCalc = true;
        dot = false;
    });

    // delete
    document.querySelector(".delete").addEventListener("click", () => {
        if(inputContainer.textContent !== "0") {
            if(inputContainer.textContent.slice(-1) === ".") dot = false;
            inputContainer.textContent = inputContainer.textContent.slice(0, -1);

        }
    });

    // operator buttons
    document.querySelector(".division").addEventListener("click", () => {
        operatorButtonEvent("÷");
    });
    document.querySelector(".multiplication").addEventListener("click", () => {
        operatorButtonEvent("×")
    });
    document.querySelector(".addition").addEventListener("click", () => {
        operatorButtonEvent("+")
    });
    document.querySelector(".subtraction").addEventListener("click", e => {
        operatorButtonEvent("-")
    });

    // equals
    document.querySelector(".equals").addEventListener("click", () => {
        if(operator) {
            callEquals();
        }
    });
}

// Keyboard input
addEventListener("keydown", event => {
    const keyName = event.key;
    
    switch(keyName) {
        case "1":
            document.querySelector(".one").click();
            break;
        case "2":
            document.querySelector(".two").click();
            break;
        case "3":
            document.querySelector(".three").click();
            break;
        case "4":
            document.querySelector(".four").click();
            break;    
        case "5":
            document.querySelector(".five").click();
            break;
        case "6":
            document.querySelector(".six").click();
            break;
        case "7":
            document.querySelector(".seven").click();
            break;
        case "8":
            document.querySelector(".eight").click();
            break;
        case "9":
            document.querySelector(".nine").click();
            break;
        case "0":
            document.querySelector(".zero").click();
            break;
        case ".":
            document.querySelector(".dot").click();
            break;
        case "Backspace":
            document.querySelector(".delete").click();
            break;
        case "+":
            document.querySelector(".addition").click();
            break;
        case "*":
            document.querySelector(".multiplication").click();
            break;
        case "-":
            document.querySelector(".subtraction").click();
            break;
        case "/":
            document.querySelector(".division").click();
            break;
        case "Enter":
            document.querySelector(".equals").click();
            break;
        case "Escape":
            document.querySelector(".clear").click();
            break;
    }
});





