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

function fatorial() {
    console.log(" ")
    console.log("Fatorial: ")
    var x = Number(document.getElementById("X").value);
    while(x>0){
    var progressao = x-1;
    var y = x * (progressao);
    };
    // y=x; y=y-1; fatorial=x*y; 
    var resultado = y;
    console.log("Resultado: " + resultado);
    document.getElementById("resposta").textContent = resultado;

}
// otras gracinhas:
// Calculadora logarítma...


//Frases do dia de curiosidades matemáticas


function selecionar(min,max){

    var frase1 = "Sabia que (1+1/12)^12 > (1+1/6)^6 > (1+1/2)^2? Essa é a constante de Euler.";
    var frase2 = "O número PI é o resultado de uma circunferência dividida pelo seu diâmetro.";
    var frase3 = "Estou cansado agora, tente novamente mais tarde ;)"

    min = Math.ceil(1);
    max = Math.floor(3);
    
    var frase =  Math.floor(Math.random() * (3 - 1 + 1)) + min;

    // switch(frase){
    //     case 1:document.getElementById("msgdodia").textContent= frase1;
    //     break;
    //     case 2:document.getElementById("msgdodia").textContent= frase2;
    //     break;
    //     case 3:document.getElementById("msgdodia").textContent= frase3;
    //     break;
    // };

    console.log(frase);
    if(frase==1){
        document.getElementById("msgdodia").textContent= frase1;
    };
    if(frase==2){
        document.getElementById("msgdodia").textContent= frase2;
    };
    if(frase==3){
        document.getElementById("msgdodia").textContent= frase3;
    };
    
};

