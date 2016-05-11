function enviardados() {
    //quest1
    if (document.formulario.sexos[0].checked == false &&
        document.formulario.sexos[1].checked == false) {
        document.formulario.sexos.focus();
        return false;
    }

    //quest2
    if (document.formulario.idade[0].checked == false &&
        document.formulario.idade[1].checked == false &&
        document.formulario.idade[2].checked == false &&
        document.formulario.idade[3].checked == false &&
        document.formulario.idade[4].checked == false &&
        document.formulario.idade[5].checked == false) {

        document.formulario.idade.focus();
        return false;
    }
    //quest3
    if (document.formulario.cor[0].checked == false &&
        document.formulario.cor[1].checked == false &&
        document.formulario.cor[2].checked == false &&
        document.formulario.cor[3].checked == false &&
        document.formulario.cor[4].checked == false) {

        document.formulario.cor.focus();
        return false;
    }
    //quest4
    if (document.formulario.cidade.value == "") {
        document.formulario.cidade.focus();
        return false;
    }
    //quest5
    if (document.formulario.moraCvc[0].checked == false &&
        document.formulario.moraCvc[1].checked == false &&
        document.formulario.moraCvc[2].checked == false &&
        document.formulario.moraCvc[3].checked == false &&
        document.formulario.moraCvc[4].checked == false &&
        document.formulario.moraCvc[5].checked == false) {

        return false;
    }
    //quest6
    if (document.formulario.Npessoas[0].checked == false &&
        document.formulario.Npessoas[1].checked == false &&
        document.formulario.Npessoas[2].checked == false &&
        document.formulario.Npessoas[3].checked == false &&
        document.formulario.Npessoas[4].checked == false &&
        document.formulario.Npessoas[5].checked == false) {

        document.formulario.Npessoas.focus();
        return false;
    }
    //quest7
    if (document.formulario.escolaridadePai[0].checked == false &&
        document.formulario.escolaridadePai[1].checked == false &&
        document.formulario.escolaridadePai[2].checked == false &&
        document.formulario.escolaridadePai[3].checked == false &&
        document.formulario.escolaridadePai[4].checked == false &&
        document.formulario.escolaridadePai[5].checked == false &&
        document.formulario.escolaridadePai[6].checked == false &&
        document.formulario.escolaridadePai[7].checked == false &&
        document.formulario.escolaridadePai[8].checked == false) {

        document.formulario.escolaridadePai.focus();
        return false;
    }
    //quest8
    if (document.formulario.escolaridadeMae[0].checked == false &&
        document.formulario.escolaridadeMae[1].checked == false &&
        document.formulario.escolaridadeMae[2].checked == false &&
        document.formulario.escolaridadeMae[3].checked == false &&
        document.formulario.escolaridadeMae[4].checked == false &&
        document.formulario.escolaridadeMae[5].checked == false &&
        document.formulario.escolaridadeMae[6].checked == false &&
        document.formulario.escolaridadeMae[7].checked == false &&
        document.formulario.escolaridadeMae[8].checked == false) {

        document.formulario.escolaridadeMae.focus();
        return false;
    }
    //quest9
    if (document.formulario.QuemTrabalha[0].checked == false &&
        document.formulario.QuemTrabalha[1].checked == false &&
        document.formulario.QuemTrabalha[2].checked == false &&
        document.formulario.QuemTrabalha[3].checked == false &&
        document.formulario.QuemTrabalha[4].checked == false) {

        document.formulario.QuemTrabalha.focus();
        return false;
    }
    //quest10
    if (document.formulario.renda[0].checked == false &&
        document.formulario.renda[1].checked == false &&
        document.formulario.renda[2].checked == false &&
        document.formulario.renda[3].checked == false &&
        document.formulario.renda[4].checked == false) {

        document.formulario.renda.focus();
        return false;
    }
    //quest11
    if (document.formulario.auxF[0].checked == false &&
        document.formulario.auxF[1].checked == false) {
        if (document.formulario.auxF[0] == true &&
            document.formulario.quaisAux == "") {
            document.formulario.quaisAux.focus();
            return false;
        }
        document.formulario.auxF.focus();
        return false;
    }
    //quest12
    if (document.formulario.auxE[0].checked == false &&
        document.formulario.auxE[1].checked == false) {
        if (document.formulario.auxE[0] == true &&
            document.formulario.quaisAux == "") {
            document.formulario.quaisAux.focus();
            return false;
        }
        document.formulario.auxE.focus();
        return false;
    }
    //quest13
    if (document.formulario.serie[0].checked == false &&
        document.formulario.serie[1].checked == false &&
        document.formulario.serie[2].checked == false) {

        document.formulario.serie.focus();
        return false;
    }
    //quest14
    if (document.formulario.cTec[0].checked == false &&
        document.formulario.cTec[1].checked == false &&
        document.formulario.cTec[2].checked == false) {

        document.formulario.cTec.focus();
        return false;
    }
    //quest15
    if (document.formulario.reprovacao[0].checked == false &&
        document.formulario.reprovacao[1].checked == false) {
        if (document.formulario.reprovacao[0] == true &&
            document.formulario.quaisSeries == "" &&
            document.formulario.quantasVezes == "") {

            document.formulario.quaisSeries.focus();
            document.formulario.quantasVezes.focus();
            return false;
        }
        return false;
    }
    //quest16
    if (document.formulario.acomp[0].checked == false &&
        document.formulario.acomp[1].checked == false) {
        if (document.formulario.acomp[0] == true &&
            document.formulario.quaisAcomp == "") {
            document.formulario.quaisAcomp.focus();
            return false;
        }
        return false;
    }
    //quest17
    if(document.formulario.formaApren[0].checked == false &&
        document.formulario.formaApren[1].checked == false &&
        document.formulario.formaApren[2].checked == false &&
        document.formulario.formaApren[3].checked == false){

        document.formulario.formaApren.focus();
        return false;
    }
    //quest18
    if(document.formulario.estiloaApren[0].checked == false &&
        document.formulario.estiloaApren[1].checked == false &&
        document.formulario.estiloaApren[2].checked == false &&
        document.formulario.estiloaApren[3].checked == false){

        document.formulario.estiloaApren.focus();
        return false;
    }
    //quest19
    if(document.formulario.escolas[0].checked == false &&
        document.formulario.escolas[1].checked == false &&
        document.formulario.escolas[2].checked == false &&
        document.formulario.escolas[3].checked == false){
        if(document.formulario.escolas[3] == true &&
            document.formulario.quaisEscolas == ""){
            document.formulario.quaisEscolas.focus();
            return false;
        }
        return false;
    }
    //quest20
    if(document.formulario.cursosExtra[0].checked == false &&
        document.formulario.cursosExtra[1].checked == false &&
        document.formulario.cursosExtra[2].checked == false &&
        document.formulario.cursosExtra[3].checked == false &&
        document.formulario.cursosExtra[4].checked == false){

        document.formulario.cursosExtra.focus();
        return false;
    }
    //quest21
    if(document.formulario.esporte[0].checked == false &&
        document.formulario.esporte[1].checked == false){
        if(document.formulario.esporte[0] == true &&
            document.formulario.quaisEsportes == ""){

            document.formulario.quaisEsportes.focus();
            return false;
        }
        return false;
    }
    //quest22
    if(document.formulario.leitura[0].checked == false &&
        document.formulario.leitura[1].checked == false &&
        document.formulario.leitura[2].checked == false &&
        document.formulario.leitura[3].checked == false &&
        document.formulario.leitura[4].checked == false &&
        document.formulario.leitura[5].checked == false &&
        document.formulario.leitura[6].checked == false &&
        document.formulario.leitura[7].checked == false &&
        document.formulario.leitura[8].checked == false){

        document.formulario.leitura.focus();
        return false;
    }
    //quest23
    if(document.formulario.frequencia[0].checked == false &&
        document.formulario.frequencia[1].checked == false &&
        document.formulario.frequencia[2].checked == false){

        document.formulario.frequencia.focus();
        return false;
    }
    //quest24
    if(document.formulario.aposEnsinoMedio[0].checked == false &&
        document.formulario.aposEnsinoMedio[1].checked == false &&
        document.formulario.aposEnsinoMedio[2].checked == false &&
        document.formulario.aposEnsinoMedio[3].checked == false &&
        document.formulario.aposEnsinoMedio[4].checked == false &&
        document.formulario.aposEnsinoMedio[5].checked == false){

        document.formulario.aposEnsinoMedio.focus();
        return false;
    }
    //quest25
    if(document.formulario.pcCasa[0].checked == false &&
        document.formulario.pcCasa[1].checked == false){

        document.formulario.pcCasa.focus();
        return false;
    }
    //quest26
    if(document.formulario.netCasa[0].checked == false &&
        document.formulario.netCasa[1].checked == false){

        document.formulario.netCasa.focus();
        return false;
    }
    //quest27
    if(document.formulario.redeSociais[0].checked == false &&
        document.formulario.redeSociais[1].checked == false &&
        document.formulario.redeSociais[2].checked == false &&
        document.formulario.redeSociais[3].checked == false &&
        document.formulario.redeSociais[4].checked == false &&
        document.formulario.redeSociais[5].checked == false){

        if(document.formulario.redeSociais == document.formualrio.redeSociais[5] &&
            document.formualrio.quaisRedes == ""){

            document.formulario.quaisRedes.focus();
            return false;
        }

        document.formalurio.redeSociais.focus();
        return false;

    }
    //quest 28
    if(document.formulario.tempoNetDia == ""){
        document.formulario.tempoNetDia.focus();
        return false;
    }
    return true;
}