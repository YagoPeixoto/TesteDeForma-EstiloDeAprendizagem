/**
 * Created by yago on 25/02/16.
 */

/*
function enviarLoginAluno() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    validarEmail(email);
    validarSenha(senha);

}

function enviarLoginFuncionario() {
    var suap = document.getElementById("suap");
    var senha = document.getElementById("senha");

    validarSuap(suap);
    validarSenha(senha);

}

function enviarLoginEditarInformacoesAluno() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    validarEmail(email);
    validarSenha(senha);
}

function enviarLoginEditarInformacoesFuncionario() {
    var suap = document.getElementById("suap");
    var senha = document.getElementById("senha");

    validarEmail(suap);
    validarSenha(senha);
}

function cadastroEnviar(){
    var nome = document.getElementById("nome");
    var matricula = document.getElementById("matricula");
    var email = document.getElementById("email");
    var telefone = document.getElementById("tefefone");
    var endereco = document.getElementById("endereco");
    var nEndereco = document.getElementById("num");
    var serie = document.getElementById("serie");
    var senha = document.getElementById("senha");


    validarNome(nome);
    validarMatricula(matricula);
    validarEmail(email);
    validarTelefone(telefone);
    validarEndereco(endereco);
    validarNumEndereco(nEndereco);
    validarSerie(serie);
    validarSenha(senha);
}

function validarEmail(email) {
    var exEmail = new RegExp('^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$');

    var resultado = exEmail.test(email.value);

    if (resultado) {

        document.getElementById("email");

    } else {
        alert("O seu E-mail esta fora dos padrões");
    }
}

function validarSuap(suap) {
    var exSuap = new RegExp('([\d]{1,20})$');

    var resultado = exSuap.test(suap.value);

    if (resultado) {
        document.getElementById("suap");
    } else {
        alert("A seu SUAP esta fora dos padrões");
    }
}

function validarSenha(senha) {
    var exSenha = new RegExp('([\w]{6,20})$');

    var resultado = exSenha.test(senha.value);

    if (resultado) {
        document.getElementById("senha");
    } else {
        alert("A sua senha esta fora dos padrões");
    }
}

function validarNome(nome) {
    var exNome = new RegExp('^[A-Za-z]{6,80}$');

    var resultado = exNome.test(nome.value);

    if (resultado) {
        document.getElementById("nome");

    } else {
        alert("O seu nome esta fora dos padrões");
    }
}

function validarMatricula(matricula) {
    var exMatricula = new RegExp('^([\d]{1,20})$');

    var resultado = exMatricula.test(matricula.value);

    if (resultado) {
        document.getElementById("matricula");
    } else {
        alert("A sua matrícula esta fora dos padrões");
    }
}

function validarTelefone(telefone) {
    var exTelefone = new RegExp('(\([0-9]{2}\))+([0-9]{4})+-([0-9]{4})$');

    var resultado = exTelefone.test(telefone.value);

    if (resultado) {
        document.getElementById("telefone");

    } else {
        alert("A seu telefone esta fora dos padrões");
    }

}

function validarEndereco(endereco) {
    var exEndereco = new RegExp('[\w]{1,50}$');

    var resultado = exEndereco.test(endereco.value);

    if (resultado) {
        document.getElementById("endereco");

    } else {
        alert("O seu endereço esta fora dos padrões");
    }
}

function validarNumEndereco(nEndereco) {
    var exMatricula = new RegExp('([\d]{1,20})$');

    var resultado = exMatricula.test(nEndereco.value);

    if (resultado) {
        document.getElementById("num");
    } else {
        alert("A sua numéro de endereço esta fora dos padrões");
    }
}

function validarSerie(serie) {
    var exSerie = new RegExp('[\w]{1,10}$');

    var resultado = exSerie.test(serie.value);

    if (resultado) {
        document.getElementById("serie");

    } else {
        alert("A sua série esta fora dos padrões");
    }
}

*/