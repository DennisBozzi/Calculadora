
var valor1;
var valor2;

var operacao;

//Selecionando a classe display
var display = $('.display')

function inserir(numero) {
    display.val(display.val() + numero);
}

function somar() {
    operacao = somar;
    valor1 = eval(display.val());
    display.val('');
}

function limpar() {
    display.val('');
    valor1 = 0;
    valor2 = 0;
    operacao = null;
}

function subtrair() {
    operacao = subtrair;
    valor1 = eval(display.val());
    display.val('');
}

function multiplicar() {
    operacao = multiplicar;
    valor1 = eval(display.val());
    display.val('');
}

function dividir() {
    operacao = dividir;
    valor1 = eval(display.val());
    display.val('');
}

function igual() {
    switch (operacao) {
        case somar:
            valor2 = eval(display.val());
            var soma = valor1 + valor2;
            display.val(soma);
            operacao = null;
            break;
        case subtrair:
            valor2 = eval(display.val());
            var subtracao = valor1 - valor2;
            display.val(subtracao);
            operacao = null;
            break;
        case multiplicar:
            valor2 = eval(display.val());
            var multiplicacao = valor1 * valor2;
            display.val(multiplicacao);
            operacao = null;
            break;
        case dividir:
            valor2 = eval(display.val());
            var multiplicacao = valor1 / valor2;
            display.val(multiplicacao);
            operacao = null;
            break;
    }
}




