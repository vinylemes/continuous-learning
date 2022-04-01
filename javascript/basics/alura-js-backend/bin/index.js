const prompt = require('prompt-sync')();

userAction = 0;
peopleCounter = 0;
maxPeople = 10;

function userOptions() {
    console.log("1 - Registrar entrada de pessoa");
    console.log("2 - Registrar saída de pessoa");
    console.log("3 - Ver total de pessoas");
    console.log("4 - Zerar contador de pessoas");
    console.log("5 - Encerrar aplicação");
}

function getUserOption(){
    console.log("======================");
    return Number(prompt("Informe a opção desejada: "));
}

function addPerson(){
    if(peopleCounter >= maxPeople){
        console.clear();
        console.log("Estabelecimento cheio");
        console.log("======================");
    }else{
        peopleCounter +=1;
        console.clear();
        console.log("Pessoa adicionada");
        showPeopleNumber();
    }
}

function removePerson(){
    if(peopleCounter <= 0){
        console.clear();
        console.log("Estabelecimento está vazio");
        console.log("======================");
    }else{
        peopleCounter -=1;
        console.clear();
        console.log("Pessoa removida");
        showPeopleNumber();
    }
}

function showPeopleNumber(){
    console.clear();
    console.log("Número de pessoas: " + peopleCounter);
    console.log("======================");
}

function removeAllPeople(){
    console.clear();
    peopleCounter = 0;
    console.log("Contador de pessoas zerado");
    console.log("======================");
}

function executeProgram(){
    userOptions();
    userAction = getUserOption();
    console.log(userAction);   

    switch(userAction){
        case 0:
            executeProgram();
            break;
        case 1:
            addPerson();
            executeProgram();
            break;
        case 2:
            removePerson();
            executeProgram();
            break;
        case 3:
            showPeopleNumber();
            executeProgram();
            break;
        case 4:
            removeAllPeople();
            executeProgram();
            break;
        case 5:
            console.log("Até Logo!");
            break;
        default:
            console.log("Informe uma opção válida");
            executeProgram();
    }
}

executeProgram();
