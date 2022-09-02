var num = "um";
console.log(num);

var lista = ["diogo" ,2 ,3, 4];
console.log(lista);

var pessoa = {"nome":"diogo", "cpf":"1234-5"};
var pessoa2 = {"nome":"diana", "cpf":"2234-8"};
//console.log(pessoa.nome);

var listaPessoas = [pessoa, pessoa2];

listaPessoas.push({"nome":"luna", "cpf":"134-8"});
listaPessoas.push({"nome":"francisco", "cpf":"45234-8"});
console.log(listaPessoas[2]);

var add = function(num1, num2){
    var sum = num1 + num2;
    return sum;
}