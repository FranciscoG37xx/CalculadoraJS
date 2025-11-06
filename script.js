    let expressao = '';

    function adicionarNumero(numero) {
        expressao += numero;
        atualizarResultado();
    }

    function adicionarOperador(operador) {
        expressao += ' ' + operador + ' ';
        atualizarResultado();
    }

    function calcularResultado() {
        expressao = eval(expressao).toString();
        atualizarResultado();
    }

    function limparResultado() {
        expressao = '';
        atualizarResultado();
    }

    function atualizarResultado() {
        document.getElementById('resultado').value = expressao;
    }
 
