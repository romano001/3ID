let a =[0, 0, 0, 0, 0, 0, 0, 0, 0];
let contatore = 0;
function reset()
{
contatore=0;
for(let i=0;i<9;i++)
{a[i]=0;
document.getElementById(i).innerHTML ="";}
};

let x = "<img src=" + '"' + "x.png" + '"' + "style=" + '"' + "width:80%;height:80%;" + '"' +"/>";
let cerchio = "<img src=" + '"' + "cerchio.png" + '"' + "style=" + '"' + "width:80%;height:80%;" + '"' + "/>";

function tris(casella) {
    contatore++;
    if (contatore%2 == 0 && a[casella] == 0) {
        a[casella] = 1;
    }
    else if (contatore%2 ==1  && a[casella] == 0)
    {
        a[casella] = 2;
    }
    if(a[casella] ==1)
    document.getElementById(casella).innerHTML =x;

    else if (a[casella] == 2)
        document.getElementById(casella).innerHTML =cerchio;

    if(a[1]==1&&a[2]==1&&a[3]==1)
    {
      alert("Hai vinto X");
    }
    if(a[4]==1&&a[5]==1&&a[6]==1)
    {
      alert("Hai vinto X");
    }
    if(a[7]==1&&a[8]==1&&a[9]==1)
    {
      alert("Hai vinto X");
    }
    if(a[1]==1&&a[4]==1&&a[7]==1)
    {
      alert("Hai vinto X");
    }
    if(a[2]==1&&a[5]==1&&a[8]==1)
    {
      alert("Hai vinto X");
    }
    if(a[9]==1&&a[6]==1&&a[3]==1)
    {
      alert("Hai vinto X");
    }
    if(a[7]==1&&a[5]==1&&a[3]==1)
    {
      alert("Hai vinto X");
    }
    if(a[1]==1&&a[5]==1&&a[9]==1)
    {
      alert("Hai vinto X");
    }


///OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    if(a[1]==2&&a[2]==2&&a[3]==2)
    {
      alert("Hai vinto O");
    }
    if(a[4]==2&&a[5]==2&&a[6]==2)
    {
      alert("Hai vinto O");
    }
    if(a[7]==2&&a[8]==2&&a[9]==2)
    {
      alert("Hai vinto O");
    }
    if(a[1]==2&&a[4]==2&&a[7]==2)
    {
      alert("Hai vinto O");
    }
    if(a[2]==2&&a[5]==2&&a[8]==2)
    {
      alert("Hai vinto O");
    }
    if(a[9]==2&&a[6]==2&&a[3]==2)
    {
      alert("Hai vinto O");
    }
    if(a[7]==2&&a[5]==2&&a[3]==2)
    {
      alert("Hai vinto O");
    }
    if(a[1]==2&&a[5]==2&&a[9]==2)
    {
      alert("Hai vinto O");
    }
};
