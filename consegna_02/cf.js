function calcola() {
    document.getElementById("cffinito").innerHTML = "";  

    let nome = document.getElementById("cfnome").value.toUpperCase();
    let cognome = document.getElementById("cfcognome").value.toUpperCase();
    let comune = document.getElementById("selcomune").value;
    let anno = document.getElementById("selanno").value;
    let mese = document.getElementById("selmese").value;
    let sesso = document.getElementById("selcomune").value;

    if (sesso == "F") { var giorno = document.getElementById("selgiorno").value + 40; }
    else { var giorno = document.getElementById("selgiorno").value; }


    let lNome="";
    let lCognome="";
    let lungN = nome.length;
    let lungC = cognome.length;
    let c;

    //Nome
    for (let i = 0; i < lungN && lNome.length < 3; i++) {
        c = nome[i];
        if (c != 'A' && c != 'E' && c != 'I' && c != 'O' && c != 'U') {
            lNome = lNome + c;
        }
    }
    for (let i = 0; i < lungN && lNome.length < 3;i++) {
            c = nome[i];
            if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                lNome = lNome + c;
            }
    }
    while (lNome.length < 3) {
        lNome = lNome + 'X';
    }

    //Cognome
    for (let i = 0; i < lungC && lCognome.length < 3; i++) {
        c = cognome[i];
        if (c != 'A' && c != 'E' && c != 'I' && c != 'O' && c != 'U') {
            lCognome = lCognome + c;
        }
    }
    for (let i = 0; i < lungC && lCognome.length < 3; i++) {
        c = cognome[i];
        if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
            lCognome = lCognome + c;
        }
    }
    while (lCognome.length < 3) {
        lCognome = lCognome + 'X';
    }
    //anno
    anno = anno[anno.length - 2] + anno[anno.length - 1];

    let codfinale = lCognome + lNome + anno + mese + giorno + comune;

    let pari = "";
    let dispari = "";

    for (let i= 0; i < codfinale.length; i+=2){
        pari=pari +codfinale[i];
    }

    for (let i= 1; i < codfinale.length ; i+=2){
        dispari =dispari+codfinale[i];
    }

    carVer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    pesopari = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17, 19, 21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23];
    pesodispari = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

    let somma = 0;
    let q = 0;

    for (let p = 0; p < pari.length; p++) {
        q = 0;
        while (pari[p] != carVer[q]) {q++;}
        somma = somma + pesopari[q];
    }

    for (let p = 0; p < dispari.length; p++) {
        q = 0;
        while (dispari[p] != carVer[q]) { q++; }
        somma = somma + pesodispari[q];
    }
    let resto = somma % 26;
    codfinale = codfinale + carVer[resto + 10];
    document.getElementById("cffinito").innerHTML =codfinale;  
};
