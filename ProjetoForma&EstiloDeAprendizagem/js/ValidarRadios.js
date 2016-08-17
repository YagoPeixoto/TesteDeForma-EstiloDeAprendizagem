
window.addEventListener('load', ()=>{
    //Seleciona todos elementos com a classe .questao1
    var radios = document.querySelectorAll(".questao1");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    //Adiciona um eventoListener em cada radio buttom para o evento de change
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao2");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao3");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao4");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao5");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao6");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao7");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao8");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});

window.addEventListener('load', ()=>{
    var radios = document.querySelectorAll(".questao9");
for(let i = 0; i< radios.length; i++){
    var radio = radios[i];
    radio.addEventListener('change',verificaRadioMarcado);
}
});


//Verifica qual alternativa vertical já foi marcada e a desabilita
function verificaRadioMarcado(){
    const alternativas = 36; //Numero de alternativas
    for(let i = 0; i< alternativas; i++){
        var checked = false;
        var classe = ".valor"+(i+1);
        //Seleciona todos elementos com o mesmo value
        //(a classe representa o valor em cada subquestao)
        var radios = document.querySelectorAll(classe);
        for(let i = 0; i< radios.length; i++){
            var radio = radios[i];// Para cada radio de um determinado valor
            //Verifica se eexiste algum que já foi selecionado
            if(radio.checked == true){
                checked = true;
                break;
            }
        }
        //Caso algum foi selecionado a variavel checked = true,
        //consequentemente todos do mesmo valor serão desabilitados
        //Caso contrário, todos que não foram selecionados serão habilitados
        //Necessário para troca de valores na mesma linha
        disableRadio(classe, checked);
    }
}

//Limpar a seleção de todos elementos na mesma questão
// Ao final, todos estarão desabilitados, sendo assim necessário
// o botão de reset
function reset1(){
    var radios = document.querySelectorAll('.questao1');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset2(){
    var radios = document.querySelectorAll('.questao2');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset3(){
    var radios = document.querySelectorAll('.questao3');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset4(){
    var radios = document.querySelectorAll('.questao4');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset5(){
    var radios = document.querySelectorAll('.questao5');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset6(){
    var radios = document.querySelectorAll('.questao6');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset7(){
    var radios = document.querySelectorAll('.questao7');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset8(){
    var radios = document.querySelectorAll('.questao8');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}
function reset9(){
    var radios = document.querySelectorAll('.questao9');
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.checked = false;
        radio.disabled = false;
    }
}

//Desabilita os radios buttons de uma determinada classe
//Neste caso, utiliza-se a classe que representa o valor do radio button
//Para validação vertical de seleção
function disableRadio(classe, desabilitar){
    var radios = document.querySelectorAll(classe);
    for(let i = 0; i< radios.length; i++){
        var radio = radios[i];
        radio.disabled = desabilitar;
    }
}

