var persona={};

function partecognome(cognome)
{
    var contcons=0;
    var dim=cognome.length;
    var ris="";
    for(var i=0;i<dim;i++)
    {
        if(cognome[i]=='a'||cognome[i]=='e'||cognome[i]=='i'||cognome[i]=='o'||cognome[i]=='u'){}
        else if(contcons<3)
        {
            ris=ris+cognome[i];
            contcons++;
        }
    }
    if(ris.length<3) 
    {
        for(var i=0;i<dim;i++)
        {
            if(cognome[i]=='a'||cognome[i]=='e'||cognome[i]=='i'||cognome[i]=='o'||cognome[i]=='u') ris =ris +cognome[i];
        }
    }
    if(ris.length==2) ris=ris+'x';
    return ris;
}


function partenome(nome)
{
    var contcons=0;
    var consonanti="";
    var vocali="";
    var dim =nome.length;
    var ris="";
    for(var i=0;i<dim&&ris.length<3;i++)
    {
        if(nome[i]!='a'&&nome[i]!='e'&&nome[i]!='i'&&nome[i]!='o'&&nome[i]!='u')
        {
            contcons++;
            consonanti=consonanti+nome[i];
            if(contcons ==1||contcons==3||contcons==4)
            {
                ris=ris+nome[i];
            }
        }else{
            vocali=vocali+nome[i];
        }
    }
    if(ris.length==3){}
    else if(ris.length<4&&consonanti.length>=3)
    {
        ris="";
        for(var i=0;i<3;i++)
        {
            ris=ris+consonanti[i];
        }
    }else{
        ris=consonanti;
        ris=ris+vocali[0];
    }

    return ris;
}
function parteanno(anno)
{

    var ris="";
    ris=ris+anno[anno.length-2];
    ris=ris+anno[anno.length-1];
    return ris;
    
}
function partemese(mese)
{
    if(mese==1||mese==01)return 'A';
    else if(mese==2||mese==02) return 'B';
    else if(mese==3||mese==03) return 'C';
    else if(mese==4||mese==04) return 'D';
    else if(mese==5||mese==05) return 'E';
    else if(mese==6||mese==06) return 'H';
    else if(mese==7||mese==07) return 'L';
    else if(mese==8||mese==08) return 'M';
    else if(mese==9||mese==09) return 'P';
    else if(mese==10) return 'R';
    else if(mese==11) return 'S';
    else if(mese==12) return 'T';
}
function partegiornosesso(giorno,sesso)
{
    

    if(sesso=='f') {giorno=parseInt(giorno);return giorno+40;}
    else if(giorno<9)return "0"+giorno;
    else return giorno;
}
function genera(){

    let codiceficale=partecognome(persona.cognome);
codiceficale=codiceficale+partenome(persona.nome);
codiceficale=codiceficale+parteanno(persona.anno);
codiceficale=codiceficale+partemese(persona.mese);
codiceficale=codiceficale+partegiornosesso(persona.giorno,persona.sesso);
return codiceficale;
}