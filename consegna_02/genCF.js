function vocali(parola) 
{
    var voc = new Array('A','E','I','O','U');
    var conteggio = 0;
    parola = parola.toUpperCase();
    for(let i in parola)
	{
		if(voc.contains(parola[i]))
		{
			conteggio++;
        }
    }
    return conteggio;
}
Array.prototype.contains = function(value)
{
	for( var key in this )
	{
		if( this[key] == value ){
            return true;
        }
    }
    return false;
};
function trovaCodCat(nomeComune)
{
	for(let i=0;i<codCat.length;i++)
		if(codCat[i].cm==nomeComune)
			return codCat[i].cc;
}
function trovaCodPari(car)
{
	for(let i=0;i<pari.length;i++)
		if(pari[i].val==car)
			return parseInt(pari[i].cod);
}
function trovaCodDispari(car)
{
	for(let i=0;i<dispari.length;i++)
		if(dispari[i].val==car)
			return parseInt(dispari[i].cod);
}
function trovaCarControllo(somma)
{
	for(let i=0;i<pari.length;i++)
		if(pari[i].cod==somma)
			return pari[i].val;
}

$(".contact100-form-btn").click(function(){
	$.getScript("datiCF.js");
	let nome=$("input#formNome").val();
	let cognome=$("input#formCognome").val();
	let gg=$("select#formGiorno").val();
	let mm=$("select#formMese").val();
	let anno=$("input#formAnno").val();
	let comune=$("input#formProvincia").val();
	let sesso=$('input[name=sesso]:checked', '#cf').val();
	let codMese = ["A","B","C","D","E","H","L","M","P","R","S","T"];
	//tutte le stringhe minuscole e senza spazi
	nome=nome.toUpperCase();
	cognome=cognome.toUpperCase();
	nome=nome.replace(' ','');
	comune=comune.toUpperCase();
	var ris="tessera.html?nome="+nome+"&cognome="+cognome+"&data="+gg+"/"+mm+"/"+anno+"&pr="+comune+"&sesso="+sesso+"&cod=";
	//salvo dati sugli input
	cognome=cognome.replace(' ','');
	let lungn=nome.length;
	let lungc=cognome.length;
	let vocn=vocali(nome);
	let consn=lungn-vocn;
	let vocc=vocali(cognome);
	let consc=lungc-vocc;
	let vocnome=[];
	let consnome=[];
	let voccognome=[];
	let conscognome=[];
	let codice=[];
	var voc = new Array('A','E','I','O','U');
	for(let i=0;i<lungn;i++)
	{
		if(voc.contains(nome[i]))
		{
			vocnome.push(i);
        }
		else 
		{
			consnome.push(i);
		}
	}
	for(let i=0;i<lungc;i++)
	{
		if(voc.contains(cognome[i]))
		{
			voccognome.push(i);
        }
		else 
		{
			conscognome.push(i);
		}
	};
	//elaborazione cognome
	if (consc>=3){
			codice[0]=cognome[conscognome[0]];
			codice[1]=cognome[conscognome[1]];
			codice[2]=cognome[conscognome[2]];
			}
	if (consc==2){
			codice[0]=cognome[conscognome[0]];
			codice[1]=cognome[conscognome[1]];
			codice[2]=cognome[voccognome[0]];
			}		
	if (consc==1&&vocc>=2){
			codice[0]=cognome[conscognome[0]];
			codice[1]=cognome[voccognome[0]];
			codice[2]=cognome[voccognome[1]];	
	}
	if (consc==1&&vocc==1){
			codice[0]=cognome[conscognome[0]];
			codice[1]=cognome[voccognome[0]];
			codice[2]='X';
	}
	if (consc==0&&vocc==2){
			codice[0]=cognome[voccognome[0]];
			codice[1]=cognome[voccognome[1]];
			codice[2]='x';
	}
	else { //caso limite in caso sia inserito un cognome con il solo scopo di testare il programma 
			codice[3]='X';
			codice[4]='X';
			codice[5]='X';	
	}
	//elaborazione nome
	if (consn>=4){
			codice[3]=nome[consnome[0]];
			codice[4]=nome[consnome[2]];
			codice[5]=nome[consnome[3]];
			}
	else if (consn==3){
			codice[3]=nome[consnome[0]];
			codice[4]=nome[consnome[1]];
			codice[5]=nome[consnome[2]];
			}		
	else if (consn==1&&vocn>=2){
			codice[3]=nome[consnome[0]];
			codice[4]=nome[vocnome[0]];
			codice[5]=nome[vocnome[1]];	
	}
	else if (consn==2&&vocn!=0){
			codice[3]=nome[consnome[0]];
			codice[4]=nome[consnome[1]];
			codice[5]=nome[vocnome[1]];	
	}
	else if (consn==1&&vocn==1){
			codice[3]=nome[consnome[0]];
			codice[4]=nome[vocnome[0]];
			codice[5]='X';
	}
	else if (vocn==2&&consn==0){
			codice[3]=nome[vocnome[0]];
			codice[4]=nome[vocnome[1]];
			codice[5]='X';
	}
	else { //caso limite in caso sia inserito un nome con il solo scopo di testare il programma 
			codice[3]='X';
			codice[4]='X';
			codice[5]='X';	
	}
	//elaborazione anno
	codice.push(anno.toString()[anno.toString().length-2]);
	codice.push(anno.toString()[anno.toString().length-1]);
	//elaborazione mese
	codice.push(codMese[mm-1]);
	//elaborazione sesso
	if(sesso=='M')
	{
		if(gg<10)
		{
			codice.push("0");
			codice.push(gg);
		}
		else 
		{
			codice.push(gg.toString()[0]);
			codice.push(gg.toString()[1]);
		}
	}
	else 
		codice.push(gg+40);
	//elaborazione provincia
	codice.push(trovaCodCat(comune).toString()[0]);
	codice.push(trovaCodCat(comune).toString()[1]);
	codice.push(trovaCodCat(comune).toString()[2]);
	codice.push(trovaCodCat(comune).toString()[3]);
	//carattere di controllo
	let sommap=0;
	let sommad=0;
	for(let i=1;i<15;i+=2){ //somma pari
		sommap+=trovaCodPari(codice[i]);
	}
	for(let i=0;i<15;i+=2){ //somma dispari
		sommad+=trovaCodDispari(codice[i]);
	}
	sommap+=sommad;
	sommap=sommap%26;
	codice.push(trovaCarControllo(sommap));
	ris=ris+codice;
	window.open(ris);
});