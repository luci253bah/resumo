/*for (var i =1; i <=10; i++) {
    var row = "8 *" + i + " = " + 8 * i;
    console.log (row)
}*/


/*var soma = 0;
for (var i =1; i <=10; i++){
    soma += i;
}
console.log(soma)*/

/*for (var i =1; i <=10; i++){
console.log(i)
}*/

/*for (var i =1; i <=100; i +=2){
    console.log(i);
}*/

function ImprimirTabuada(n){
    for (var i =1 ; i <=10; i++){
        var linha = n + " * " + i + " = " + n * i;
        console.log(linha);
    }
}
for (var i =1; i <=10; i++){
    ImprimirTabuada(i);
    console.log("");
}