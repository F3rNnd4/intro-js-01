function adição() {
    let a = document.getElementById('contador').innerHTML;
    let resultado = ++ a;


    document.getElementById('contador').innerHTML = resultado;
}

function subtração() {
    let b = document.getElementById('contador').innerHTML;
    let resultado = -- b;

    document.getElementById('contador').innerHTML = resultado;
}

function reset() {
    document.getElementById('contador').innerHTML = 0;
}