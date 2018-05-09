

let a =[0, 0, 0, 0, 0, 0, 0, 0, 0];
let contatore = 0;
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
    if(a[casella] ==2)
    document.getElementById(casella).innerHTML =x;    

    else if (a[casella] == 1)
        document.getElementById(casella).innerHTML =cerchio;
};


