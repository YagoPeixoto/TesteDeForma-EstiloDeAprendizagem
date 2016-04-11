var atual = 1;
var nroParts = 9;

window.onload = function(){
  var i = 2;
  for(i=2; i<=nroParts; i++){
    document.querySelector(".part" + i).style.display = "none";
  }
}

function avancar() {
    if (atual < nroParts) {
        document.querySelector(".part" + atual).style.display = "none";
        atual++;
        document.querySelector(".part" + atual).style.display = "block";
    }
}

function voltar() {
    if (atual > 1) {
        document.querySelector(".part" + atual).style.display = "none";
        atual--;
        document.querySelector(".part" + atual).style.display = "block";
    }
}
