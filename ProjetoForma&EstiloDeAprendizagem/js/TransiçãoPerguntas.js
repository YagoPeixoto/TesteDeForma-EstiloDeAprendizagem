var atual = 1;
var nroParts = 9;

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
