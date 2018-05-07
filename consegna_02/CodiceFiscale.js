/*dichiarazione oggetto codice fiscale*/
var CF = {};

/*funzione che conta le consonanti all' interno di una stringa*/
function contaConsonanti(s)
{
    let consonanti = "";
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u')
        {
             consonanti = consonanti + s[i];
        }
    }
    return consonanti;
}


/*funzione che ritorna il cognome codificato*/
function codificaCognome(cognome)
{
  cognome = cognome.toLowerCase();
    let l = cognome.length;
    let cognomeCodificato = "";
    if(l < 3)
    {
        cognomeCodificato = cognome;
        while(cognomeCodificato.length < 3)
        {
            cognomeCodificato = cognomeCodificato + "x";
        }
    }
    else if(contaConsonanti(cognome).length >= 3)
    {
        cognomeCodificato = contaConsonanti(cognome)[0] + contaConsonanti(cognome)[1] + contaConsonanti(cognome)[2];
    }
    else if(contaConsonanti(cognome).length < 3)
    {
        cognomeCodificato = contaConsonanti(cognome);
        let i = 0;
        let ripetizioni = cognomeCodificato.length;
        while(i < l && ripetizioni < 3)
        {
            if(cognome[i] == 'a' || cognome[i] == 'e' || cognome[i] == 'i' || cognome[i] == 'o' || cognome[i] == 'u')
            {
                cognomeCodificato = cognomeCodificato + cognome[i];
                ripetizioni++;
            }
            i++;
        }
    }
    return cognomeCodificato;
}



function codificaNome(nome)
{
  nome = nome.toLowerCase();
    let l = nome.length;
    let nomeCodificato = "";
    if(l < 3)
    {
        nomeCodificato = nome;
        while(nomeCodificato.length < 3)
        {
            nomeCodificato = nomeCodificato + 'x';
        }
    }
    else if(contaConsonanti(nome).length == 3)
    {
        nomeCodificato = contaConsonanti(nome);
    }
    else if(contaConsonanti(nome).length >= 4)
    {
        nomeCodificato = contaConsonanti(nome)[0] + contaConsonanti(nome)[2]+ contaConsonanti(nome)[3];
    }
    else if(contaConsonanti(nome).length < 3)
    {
        nomeCodificato = contaConsonanti(nome);
        let i = 0;
        let ripetizioni = nomeCodificato.length;
        while(i < l && ripetizioni < 3)
        {
            if(nome[i] == 'a' || nome[i] == 'e' || nome[i] == 'i' || nome[i] == 'o' || nome[i] == 'u')
            {
                nomeCodificato = nomeCodificato + nome[i];
                ripetizioni++;
            }
            i++;
        }
    }
    return nomeCodificato;
}



function codificaAnno(anno)
{
    let annoCodificato = anno[2] + anno[3];
    return annoCodificato;
}


function codificaMese(mese)
{
  mese = mese.toLowerCase();
    let meseCodificato = "";
    if(mese == "gennaio" || mese == "01" || mese =="1")
    {
        meseCodificato = 'A';
    }
    else if(mese == "febbraio" || mese == "02" || mese =="2")
    {
        meseCodificato = 'B';
    }
    else if(mese == "marzo" || mese == "03" || mese =="3")
    {
        meseCodificato = 'C';
    }
    else if(mese == "aprile" || mese == "04" || mese =="4")
    {
        meseCodificato = 'D';
    }
    else if(mese == "maggio" || mese == "05" || mese =="5")
    {
        meseCodificato = 'E';
    }
    else if(mese == "giugno" || mese == "06" || mese =="6")
    {
        meseCodificato = 'H';
    }
    else if(mese == "luglio" || mese == "07" || mese =="7")
    {
        meseCodificato = 'L';
    }
    else if(mese == "agosto" || mese == "08" || mese =="8")
    {
        meseCodificato = 'M';
    }
    else if(mese == "settembre" || mese == "09" || mese =="9")
    {
        meseCodificato = 'P';
    }
    else if(mese == "ottobre" || mese == "10")
    {
        meseCodificato = 'R';
    }
    else if(mese == "novembre" || mese == "11")
    {
        meseCodificato = 'S';
    }
    else if(mese == "dicembre" || mese == "12")
    {
        meseCodificato = 'T';
    }
    return meseCodificato;
}



function codificaGiorno(giorno)
{
  CF.sesso = CF.sesso.toUpperCase();
    let giornoCodificato = "";
    if(CF.sesso == "DONNA" || CF.sesso == "FEMMINA" || CF.sesso == "F")
    {
        giornoCodificato = parseInt(giorno) + 40;
    }
    else if(CF.sesso == "UOMO" || CF.sesso == "MASCHIO" || CF.sesso == "M")
    {
      giornoCodificato = giorno;
    }
    return giornoCodificato;
}

function codificaComune(comune)
{
  comune = comune.toLowerCase();
    let comuneCodificato = "";
    if(comune == "aosta")
    {
      comuneCodificato = "A326";
    }
    else if(comune == "torino")
    {
        comuneCodificato = "L219";
    }
    else if(comune == "venezia")
    {
          comuneCodificato = "L736";
    }
    else if(comune == "campobasso")
    {
          comuneCodificato = "B519";
    }
    else if(comune == "l'aquila")
    {
          comuneCodificato = "A345";
    }
    else if(comune == "milano")
    {
          comuneCodificato = "F205";
    }
    else if(comune == "genova")
    {
          comuneCodificato = "D969";
    }
    else if(comune == "trento")
    {
          comuneCodificato = "L378";
    }
    else if(comune == "peruia")
    {
            comuneCodificato = "G478";
    }
    else if(comune == "ancona")
    {
          comuneCodificato = "A271";
    }
    else if(comune == "roma")
    {
          comuneCodificato = "H501";
    }
    else if(comune == "napoli")
    {
          comuneCodificato = "F839";
    }
    else if(comune == "palermo")
    {
          comuneCodificato = "G273";
    }
    else if(comune == "bari")
    {
          comuneCodificato = "A662";
    }
    else if(comune == "potenza")
    {
          comuneCodificato = "G942";
    }
    else if(comune == "bologna")
    {
          comuneCodificato = "A944";
    }
    else if(comune == "cagliari")
    {
          comuneCodificato = "B354";
    }
    else if(comune == "catanzaro")
    {
          comuneCodificato = "C352";
    }
    else if(comune == "trieste")
    {
          comuneCodificato = "L424";
    }
    else if(comune == "firenze")
    {
          comuneCodificato = "D612";
    }
    else if(comune == "mirano")
    {
          comuneCodificato = "F241";
    }
    return comuneCodificato;
}

var dispari = {
    0: 1,
    1: 0,
    2: 5,
    3: 7,
    4: 9,
    5: 13,
    6: 15,
    7: 17,
    8: 19,
    9: 21,
    A: 1,
    B: 0,
    C: 5,
    D: 7,
    E: 9,
    F: 13,
    G: 15,
    H: 17,
    I: 19,
    J: 21,
    K: 2,
    L: 4,
    M: 18,
    N: 20,
    O: 11,
    P: 3,
    Q: 6,
    R: 8,
    S: 12,
    T: 14,
    U: 16,
    V: 10,
    W: 22,
    X: 25,
    Y: 24,
    Z: 23
  }

  var pari = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
     K: 10,
     L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
    R: 17,
    S: 18,
    T: 19,
     U: 20,
     V: 21,
     W: 22,
     X: 23,
     Y: 24,
     Z: 25
  }
var tavola = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function calcolaSec(semi)
{
    var i, val = 0;
    for (i = 0;i < 15;i++) {
      var c = semi[i];
      if (i % 2)
        val += pari[c];
      else
        val += dispari[c];
    }
    val = val % 26;
    return tavola.charAt(val);
}
