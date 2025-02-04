function calcular() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    /*
    alert(numA);
    alert(numB);
    */

    let result = numA + numB;

    document.getElementById('result').innerHTML = result;
}

function soma() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA + numB;

    document.getElementById('result').innerHTML = result;
}

function sub() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA - numB;

    document.getElementById('result').innerHTML = result;
}

function mult() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA * numB;

    document.getElementById('result').innerHTML = result;
}

function divi() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA / numB;

    document.getElementById('result').innerHTML = result;
}