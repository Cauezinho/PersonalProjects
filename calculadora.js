function somar(){
    // gracinha pro console:
    console.log(" ")
    console.log("Soma: ")

    //Captura do valor preenchido nos elementos
    // e transformando esse valor em um número operável
    var x = Number(document.getElementById("X").value);
    var y = Number(document.getElementById("Y").value);

    //Operação
    var resultado = x + y;
    console.log("Resultado: "+ resultado);

    //Exposição do resultado para o usuario no corpo HMTL:
    document.getElementById("resposta").textContent = resultado;
}

function subtrair(){
    console.log(" ");
    console.log("Subtração: ");
    var x = Number(document.getElementById("X").value);
    var y = Number(document.getElementById("Y").value);
    var resultado = x - y;
    console.log("Resultado: "+ resultado);
    document.getElementById("resposta").textContent = resultado;
}

function dividir(){
    console.log(" ")
    console.log("Divisão: ")
    var x = Number(document.getElementById("X").value);
    var y = Number(document.getElementById("Y").value);
    var resultado = (x / y).toFixed(4);
    console.log("Resultado: "+ resultado);
    document.getElementById("resposta").textContent = resultado;
}

function multiplicar(){
    console.log(" ")
    console.log("Multiplicação: ")
    var x = Number(document.getElementById("X").value);
    var y = Number(document.getElementById("Y").value);
    var resultado = x * y;
    console.log("Resultado: "+ resultado);
    document.getElementById("resposta").textContent = resultado;
}

function dividendo(){
    console.log(" ")
    console.log("Dividendo: ")
    var x = Number(document.getElementById("X").value);
    var y = Number(document.getElementById("Y").value);
    var resultado = x % y;
    console.log("Resultado: "+ resultado);
    document.getElementById("resposta").textContent = resultado;
}

function exponenciar(){
    console.log(" ")
    console.log("Exponenciação: ")
    var x = Number(document.getElementById("X").value);
    var y = Number(document.getElementById("Y").value);
    var resultado = x ** y;
    console.log("Resultado: "+ resultado);
    document.getElementById("resposta").textContent = resultado;
}