comuni = "";
$(document).ready(function(){
    $.getJSON('https://raw.githubusercontent.com/matteocontrini/comuni-json/master/comuni.json',(data,status)=>{
        if(status=="success")
        {
            comuni = data;
        }
    });
});
function calcolaMese(mese){
    let ch;
    switch(mese)
    {
        case '01': ch='A';break;
        case '02': ch='B';break;
        case '03': ch='C';break;
        case '04': ch='D';break;
        case '05': ch='E';break;
        case '06': ch='H';break;
        case '07': ch='L';break;
        case '08': ch='M';break;
        case '09': ch='P';break;
        case '10': ch='R';break;
        case '11': ch='S';break;
        case '12': ch='T';break;
    }
    return ch;
}
function calcolaGiorno(giorno,sesso)
{
    if(giorno<=31&&giorno>=0&&sesso!="")
    {
        let ret = parseInt(giorno);
        if(sesso=="f")
        {
            ret+=40;
        }
        return ret;
    }
}
function calcolaAnno(anno)
{
    return anno[2]+anno[3];
}
function calcolaComune(comune)
{
    if(comuni!="")
    {
        let search = comune;
        search = search.toUpperCase();
        let i;
        for(i=0;i<comuni.length;i++)
        {
            if(comuni[i].nome.toUpperCase()==search)
            {
                return comuni[i].codiceCatastale;
            }
        }
        if(i==comuni.length)
        {
            alert("Comune non trovato!");
            return "????";
        }
    }else{
        alert("Tabella comuni non caricata correttamente!");
        return "????";
    }
}
function estraiConsonanti(str) {
    return str.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, '');
}
  
function estraiVocali(str) {
    return str.replace(/[^AEIOU]/gi, '');
}  
function calcolaCognome(cognome) {
    let ret = estraiConsonanti(cognome);
    ret += estraiVocali(cognome);
    ret += "XXX";
    ret = ret.slice(0, 3);
    return ret.toUpperCase();
}  
function calcolaNome(nome) {
    let ret = estraiConsonanti(nome);
    if (ret.length >= 4) {
        ret =
        ret.charAt(0) +
        ret.charAt(2) +
        ret.charAt(3)
    } else {
      ret += estraiVocali(nome);
      ret += "XXX";
      ret = ret.slice(0, 3);
    } 
    return ret.toUpperCase();
}
var checkdigitDispari = {
    0: 1,  1: 0,  2: 5,  3: 7,  4: 9,  5: 13, 6: 15, 7: 17, 8: 19,
    9: 21, A: 1,  B: 0,  C: 5,  D: 7,  E: 9,  F: 13, G: 15, H: 17,
    I: 19, J: 21, K: 2,  L: 4,  M: 18, N: 20, O: 11, P: 3,  Q: 6,
    R: 8,  S: 12, T: 14, U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23
  }
  
  var checkdigitPari = {
    0: 0,  1: 1,   2: 2,  3: 3,   4: 4,  5: 5,  6: 6,  7: 7,  8: 8,
    9: 9,  A: 0,   B: 1,  C: 2,   D: 3,  E: 4,  F: 5,  G: 6,  H: 7,
    I: 8,  J: 9,   K: 10, L: 11,  M: 12, N: 13, O: 14, P: 15, Q: 16,
    R: 17, S: 18,  T: 19, U: 20,  V: 21, W: 22, X: 23, Y: 24, Z: 25
  }
var tavolaCheckdigit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function calcolaSec(semi)
{
    var i, val = 0;
    for (i = 0;i < 15;i++) {
      var c = semi[i];
      if (i % 2)
        val += checkdigitPari[c];
      else
        val += checkdigitDispari[c];
    }
    val = val % 26;
    return tavolaCheckdigit.charAt(val);
}
const calcolaCodice = ()=>
{
    let nome = $('#nome').val();
    let cognome = $('#cognome').val();
    let comune = $('#comune').val();
    let sesso = $('#sesso').val();
    let data = $('#data').val();
    let v = data.split("-");
    let giorno = v[0];
    let mese = v[1];
    let anno = v[2];
    let semi = calcolaCognome(cognome)+
    calcolaNome(nome)+
    calcolaAnno(anno)+
    calcolaMese(mese)+
    calcolaGiorno(giorno,sesso)+
    calcolaComune(comune);
    return semi + calcolaSec(semi);
}