class Calculator{
    constructor(prevOperandTextElement,currentOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear(){

    }
    delete(){

    }

    appendNumber(num){

    }

    chooseOperation(operation){
    }

    compute(){

    }
    
    updateDisplay(){

    }


}

console.log("JS connected");

const numberButton = document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const delButton = document.querySelector('[data-del]');
const allClearButton = document.querySelector('[data-ac]');
const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
