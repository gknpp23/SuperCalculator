var state = { board: [], currentCalc: []}

var id = ['soma','sub1','sub2','mult','div1','div2','pot1','pot2','raizq1','raizq2','fat1','fat2','porcent1','porcent2','media'];

var title = ['soma','subtração A - B','subtração B - A','Multiplicação','Divisão A / B','Divisão B / A','Potência (A na base B)','Potência (B na base A)','Raiz Quadrada de A','Raiz Quadrada de B','Fatorial de A','Fatorial de B','Porcentagem (A sobre B) ','Porcentagem (B sobre A)','Média'];


function start() {
    createBoard();
    render();
}

function createBoard(){
    state.board = [];
    state.currentCalc = [];
    var div;
    for(var i = 0; i < id.length; i++){
        div = document.querySelector('#'+id[i])
        state.board[i] = div;
        state.currentCalc[i] = 0;
    }
    
}

function render(){
    renderBoard();
    renderResult();
}

function renderBoard(){
    //let section = document.querySelector('#results');
    let buttonCalc = document.querySelector('#calculate');
    buttonCalc.addEventListener('click',handleButtonClick);

    for(var i = 0; i < title.length; i++){
        //section.appendChild(state.board[i]);
        let currentDiv = state.board[i];

        if (typeof currentDiv !== 'undefined') {
            currentDiv.innerHTML = '';

            currentDiv.classList.add('result');

            let currentTitle = document.createElement('h3');
            currentTitle.textContent = title[i];

            currentDiv.appendChild(currentTitle);
        }
    }
    
}

function handleButtonClick(){
    
    let inputA = document.querySelector('#numberA');
    let inputB = document.querySelector('#numberB');

    makeCalc(Number(inputA.value),Number(inputB.value));

    render()
}

function renderResult(){
    var result;
    for(var i = 0; i < state.board.length; i++){

        let currentDiv = state.board[i];

         switch(currentDiv.id){
            case 'soma':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'sub1':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'sub2':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'mult':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'div1':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'div2':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'pot1':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'pot2':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'raizq1':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'raizq2':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'fat1':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'fat2':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
            case 'porcent1':
        
                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i] + '%';
                currentDiv.appendChild(result);
                break;
            case 'porcent2':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i] + '%';
                currentDiv.appendChild(result);
                break;
            case 'media':

                result = document.createElement('p');
                result.classList.add('number');
                result.textContent = state.currentCalc[i];
                currentDiv.appendChild(result);
                break;
        
         }
    }
}

// Cálculos
function makeCalc(num1,num2){

    state.currentCalc[0] = addNumbers(num1,num2);

    state.currentCalc[1] = subtractNumbers(num1,num2);

    state.currentCalc[2] = subtractNumbers(num2,num1);

    state.currentCalc[3] = multiplyNumbers(num1,num2)

    state.currentCalc[4] = divideNumbers(num1,num2);

    state.currentCalc[5] = divideNumbers(num2,num1);

    state.currentCalc[6] = potNumbers(num1,num2);

    state.currentCalc[7] = potNumbers(num2,num1);

    state.currentCalc[8] = squareRoot(num1);

    state.currentCalc[9] = squareRoot(num2);

    state.currentCalc[10] = fatorial(num1);

    state.currentCalc[11] = fatorial(num2);

    state.currentCalc[12] = percentage(num1,num2);

    state.currentCalc[13] = percentage(num2,num1);
    
    state.currentCalc[14] = media(num1,num2)

}

function addNumbers (num1, num2){

    return num1 + num2;
}

function subtractNumbers (num1, num2) {

    return num1 - num2
}

function multiplyNumbers (num1, num2) {

    return num1 * num2;
}

function divideNumbers (num1, num2){

    let rCalc = num1 / num2;

    return rCalc.toFixed(2).replace('.',',');
}

function potNumbers (num1, num2){

    return num1 ** num2;
}

function squareRoot (num){

    let rCalc = num ** 0.5;
    return rCalc.toFixed(2).replace('.',',');
}

function fatorial(num1) {

    let f = 1;

    for(let i = num1; i > 1; i--){
        f *= i;
    }

    return f;

}

function percentage(num1, num2) {

    let rCalc = Math.ceil((num1 / num2) * 100);
    
    return rCalc.toFixed(2).replace('.',',');
    
}

function media(num1, num2){

    let rCalc = (num1 + num2) / 2;
    
    return rCalc.toFixed(1).replace('.',',');

}

//função principal
start();

