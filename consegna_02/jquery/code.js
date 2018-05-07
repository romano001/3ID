function calcola() {
    document.getElementById("Totale").innerHTML = "";

    var nome = document.getElementById("Nome").value.toUpperCase();
    var cognome = document.getElementById("Cognome").value.toUpperCase();
    var anno = document.getElementById("Anno").value;
    var mese = document.getElementById("Mese").value;
    var comune = document.getElementById("Comune").value;
    var sesso = document.getElementById("Sesso").value;
    var giorno = document.getElementById("Giorno").value;
    if (sesso == "F") {
        giorno = parseInt(giorno) + 40;
    }



    var VocaliNome = nome.replace(/[^AEIOU]/gi, '');
    var VocaliCognome = cognome.replace(/[^AEIOU]/gi, '');
    var ConsonantiNome = nome.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, '');
    var ConsonantiCognome = cognome.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, '');
    CaratteriPari = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
    CaratteriDispari = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    IndiceControllo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //Nome
    var FNome = "";
    supporto = ConsonantiNome;
    if (ConsonantiNome.length >= 4) {
        FNome = ConsonantiNome.charAt(0) + ConsonantiNome.charAt(2) + ConsonantiNome.charAt(3);
    } else {
        supporto = supporto + VocaliNome;
        supporto = supporto + 'XXX';
        FNome = supporto.substr(0, 3);
    }
    //Cognome
    var FCognome = "";
    var supporto = ConsonantiCognome + VocaliCognome + 'XXX';
    FCognome = supporto.substr(0, 3);
    //anno
    anno = anno[anno.length - 2] + anno[anno.length - 1];

    var FCodiceFiscale = FCognome + FNome + anno + mese + giorno + comune;

    var pari = "";
    var dispari = "";

    for (var i = 0; i < FCodiceFiscale.length; i += 2) {
        pari = pari + FCodiceFiscale[i];
    }

    for (var i = 1; i < FCodiceFiscale.length; i += 2) {
        dispari = dispari + FCodiceFiscale[i];
    }


    var Somma = 0;
    var a = 0;

    for (var x = 0; x < pari.length; x++) {
        a = 0;
        while (pari[x] != IndiceControllo[a]) {
            a++;
        }
        Somma = Somma + CaratteriPari[a];
    }

    for (var x = 0; x < dispari.length; x++) {
        a = 0;
        while (dispari[x] != IndiceControllo[a]) {
            a++;
        }
        Somma = Somma + CaratteriDispari[a];
    }
    var Resto = Somma % 26;
    FCodiceFiscale = FCodiceFiscale + IndiceControllo[Resto + 10];
    document.getElementById("Totale").innerHTML = FCodiceFiscale;
};
