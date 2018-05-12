let a =[0, 0, 0, 0, 0, 0, 0, 0, 0];
let contatore = 0;
let vittoria=0;

function sres()
{
  $('#cover').css('visibility', 'visible');
  $('#reset').animate({
    right: '-=10%',
    top: '-=24%',
    height: '+=10%',
    width: '+=12%'} );
    $('#reset').css('font-size', '250%');

}



function reset()
{
contatore=0;
for(let i=0;i<9;i++)
{a[i]=0;
document.getElementById(i).innerHTML ="";}
$('#1o').css('visibility', 'hidden');
$('#2o').css('visibility', 'hidden');
$('#3o').css('visibility', 'hidden');
$('#1v').css('visibility', 'hidden');
$('#2v').css('visibility', 'hidden');
$('#3v').css('visibility', 'hidden');
$('#t1').css('visibility', 'hidden');
$('#t2').css('visibility', 'hidden');
$('#reset').animate({
  width: '15%',
  height: '10%',
  right:'15%',
  top:'50%' });
  $('#reset').css('font-size', '100%');
  $('#win').css('visibility', 'hidden');
  $('#win').css('font-size', '175%');
  $('#faccina').css('visibility', 'hidden');
  $('#cover').css('visibility', 'hidden');
vittoria=0;
};




let x = "<img src=" + '"' + "x.png" + '"' + "style=" + '"' + "width:80%;height:80%;" + '"' +"/>";
let cerchio = "<img src=" + '"' + "cerchio.png" + '"' + "style=" + '"' + "width:80%;height:80%;" + '"' + "/>";
let faccina = "<img src=" + '"' + "faccina.png" + '"' + "style=" + '"' + "width:80%;height:80%;" + '"' + "/>";

function tris(casella) {
  if(a[casella] == 0){      contatore++;}
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

    /**if(a[0]==(contatore%2)+1&&a[1]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {
      $('#1o').css('position','absolute');
      $('#1o').css('border-radius','15px');

      $('#1o').css('width','90%');
      $('#1o').css('height','7%');
      $('#1o').css('top','15%');
      $('#1o').css('left','5%');

      $('#1o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#1o').css('visibility', 'visible');

    }
    else if(a[3]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[5]==(contatore%2)+1)
    {
      $('#2o').css('position','absolute');
      $('#2o').css('border-radius','15px');

      $('#2o').css('width','90%');
      $('#2o').css('height','7%');
      $('#2o').css('top','47%');
      $('#2o').css('left','5%');

      $('#2o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#2o').css('visibility', 'visible');
     }
    else if(a[6]==(contatore%2)+1&&a[7]==(contatore%2)+1&&a[8]==(contatore%2)+1)
    {
      $('#3o').css('position','absolute');
      $('#3o').css('width','90%');
      $('#3o').css('border-radius','15px');
      $('#3o').css('height','7%');
      $('#3o').css('top','78%');
      $('#3o').css('left','5%');
      $('#3o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#3o').css('visibility', 'visible');
    }
    else if(a[0]==(contatore%2)+1&&a[3]==(contatore%2)+1&&a[6]==(contatore%2)+1)
    {
      $('#1v').css('position','absolute');
      $('#1v').css('border-radius','15px');
      $('#1v').css('width','7%');
      $('#1v').css('height','90%');
      $('#1v').css('top','5%');
      $('#1v').css('left','15%');
      $('#1v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#1v').css('visibility', 'visible');
         }
    else if(a[1]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[7]==(contatore%2)+1)
    {
      $('#2v').css('position','absolute');
      $('#2v').css('border-radius','15px');
      $('#2v').css('width','7%');
      $('#2v').css('height','90%');
      $('#2v').css('top','5%');
      $('#2v').css('left','47%');
      $('#2v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#2v').css('visibility', 'visible');
       }
    else if(a[8]==(contatore%2)+1&&a[5]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {
      $('#3v').css('position','absolute');
      $('#3v').css('border-radius','15px');
      $('#3v').css('width','7%');
      $('#3v').css('height','90%');
      $('#3v').css('top','5%');
      $('#3v').css('left','78%');
      $('#3v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#3v').css('visibility', 'visible');
    }
    else if(a[6]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {
      $('#t1').css('position','absolute');
      $('#t1').css('border-radius','15px');
      $('#t1').css('width','7%');
      $('#t1').css('height','100%');
      $('#t1').css('top','0%');
      $('#t1').css('left','47%');
      $('#t1').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#t1').css('transform', 'rotate(45deg)');
      $('#t1').css('visibility', 'visible');
    }
    else if(a[0]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[8]==(contatore%2)+1)
    {
      $('#t2').css('position','absolute');
      $('#t2').css('border-radius','15px');
      $('#t2').css('width','7%');
      $('#t2').css('height','100%');
      $('#t2').css('top','0%');
      $('#t2').css('left','47%');
      $('#t2').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#t2').css('transform', 'rotate(315deg)');
      $('#t2').css('visibility', 'visible');    }

      else if(a[0]!=0&&a[1]!=0&&a[2]!=0&&a[3]!=0&&a[4]!=0&&a[5]!=0&&a[6]!=0&&a[7]!=0&&a[8]!=0)
      {
        document.getElementById("win").innerHTML ="PAREGGIO" ;
        $('#win').css('visibility', 'visible');
        $('#faccina').css('visibility', 'visible');

        $('#reset').animate({
          right: '+=20%',
          top: '-=40%',
          height: '+=70%',
          width: '+=24%'} );
          $('#reset').css('font-size', '400%');
        }*/

switch((contatore%2)+1) {
    case 1:
    if(a[0]==(contatore%2)+1&&a[1]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {
      vittoria=1;
      $('#1o').css('position','absolute');
      $('#1o').css('border-radius','15px');
      $('#1o').css('width','90%');
      $('#1o').css('height','7%');
      $('#1o').css('top','15%');
      $('#1o').css('left','5%');
      $('#1o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#1o').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
    }
     if(a[3]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[5]==(contatore%2)+1)
    {vittoria=1;

      $('#2o').css('position','absolute');
      $('#2o').css('border-radius','15px');
      $('#2o').css('width','90%');
      $('#2o').css('height','7%');
      $('#2o').css('top','47%');
      $('#2o').css('left','5%');
      $('#2o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#2o').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
}
    if(a[6]==(contatore%2)+1&&a[7]==(contatore%2)+1&&a[8]==(contatore%2)+1)
    {vittoria=1;

      $('#3o').css('position','absolute');
      $('#3o').css('width','90%');
      $('#3o').css('border-radius','15px');
      $('#3o').css('height','7%');
      $('#3o').css('top','78%');
      $('#3o').css('left','5%');
      $('#3o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#3o').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
}
    if(a[0]==(contatore%2)+1&&a[3]==(contatore%2)+1&&a[6]==(contatore%2)+1)
    {vittoria=1;

      $('#1v').css('position','absolute');
      $('#1v').css('border-radius','15px');
      $('#1v').css('width','7%');
      $('#1v').css('height','90%');
      $('#1v').css('top','5%');
      $('#1v').css('left','15%');
      $('#1v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#1v').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
      }
    if(a[1]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[7]==(contatore%2)+1)
    {vittoria=1;

      $('#2v').css('position','absolute');
      $('#2v').css('border-radius','15px');
      $('#2v').css('width','7%');
      $('#2v').css('height','90%');
      $('#2v').css('top','5%');
      $('#2v').css('left','47%');
      $('#2v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#2v').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
 }
    if(a[8]==(contatore%2)+1&&a[5]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {vittoria=1;

      $('#3v').css('position','absolute');
      $('#3v').css('border-radius','15px');
      $('#3v').css('width','7%');
      $('#3v').css('height','90%');
      $('#3v').css('top','5%');
      $('#3v').css('left','78%');
      $('#3v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#3v').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
}
    if(a[6]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {vittoria=1;

      $('#t1').css('position','absolute');
      $('#t1').css('border-radius','15px');
      $('#t1').css('width','7%');
      $('#t1').css('height','100%');
      $('#t1').css('top','0%');
      $('#t1').css('left','47%');
      $('#t1').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#t1').css('transform', 'rotate(45deg)');
      $('#t1').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
}
    if(a[0]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[8]==(contatore%2)+1)
    {vittoria=1;

      $('#t2').css('position','absolute');
      $('#t2').css('border-radius','15px');
      $('#t2').css('width','7%');
      $('#t2').css('height','100%');
      $('#t2').css('top','0%');
      $('#t2').css('left','47%');
      $('#t2').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#t2').css('transform', 'rotate(315deg)');
      $('#t2').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER X" ;
      $('#win').css('visibility', 'visible');
}

      else if(a[0]!=0&&a[1]!=0&&a[2]!=0&&a[3]!=0&&a[4]!=0&&a[5]!=0&&a[6]!=0&&a[7]!=0&&a[8]!=0& vittoria==0)
      {
        vittoria=1;
        document.getElementById("win").innerHTML ="PAREGGIO" ;
        $('#win').css('font-size', '+=100%');
        $('#win').css('visibility', 'visible');
        $('#faccina').css('visibility', 'visible');
        }
        if (vittoria==1)
        {
          sres();
        }

        break;



    case 2:
    if(a[0]==(contatore%2)+1&&a[1]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {vittoria=1;

      $('#1o').css('position','absolute');
      $('#1o').css('border-radius','15px');
      $('#1o').css('width','90%');
      $('#1o').css('height','7%');
      $('#1o').css('top','15%');
      $('#1o').css('left','5%');
      $('#1o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#1o').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');

    }
    if(a[3]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[5]==(contatore%2)+1)
    {vittoria=1;

      $('#2o').css('position','absolute');
      $('#2o').css('border-radius','15px');
      $('#2o').css('width','90%');
      $('#2o').css('height','7%');
      $('#2o').css('top','47%');
      $('#2o').css('left','5%');
      $('#2o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#2o').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');
  }
    if(a[6]==(contatore%2)+1&&a[7]==(contatore%2)+1&&a[8]==(contatore%2)+1)
    {vittoria=1;

      $('#3o').css('position','absolute');
      $('#3o').css('width','90%');
      $('#3o').css('border-radius','15px');
      $('#3o').css('height','7%');
      $('#3o').css('top','78%');
      $('#3o').css('left','5%');
      $('#3o').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#3o').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');
  }
    if(a[0]==(contatore%2)+1&&a[3]==(contatore%2)+1&&a[6]==(contatore%2)+1)
    {vittoria=1;

      $('#1v').css('position','absolute');
      $('#1v').css('border-radius','15px');
      $('#1v').css('width','7%');
      $('#1v').css('height','90%');
      $('#1v').css('top','5%');
      $('#1v').css('left','15%');
      $('#1v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#1v').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');

   }
    if(a[1]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[7]==(contatore%2)+1)
    {vittoria=1;

      $('#2v').css('position','absolute');
      $('#2v').css('border-radius','15px');
      $('#2v').css('width','7%');
      $('#2v').css('height','90%');
      $('#2v').css('top','5%');
      $('#2v').css('left','47%');
      $('#2v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#2v').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');
  }
    if(a[8]==(contatore%2)+1&&a[5]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {vittoria=1;

      $('#3v').css('position','absolute');
      $('#3v').css('border-radius','15px');
      $('#3v').css('width','7%');
      $('#3v').css('height','90%');
      $('#3v').css('top','5%');
      $('#3v').css('left','78%');
      $('#3v').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#3v').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');
  }
    if(a[6]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[2]==(contatore%2)+1)
    {vittoria=1;

      $('#t1').css('position','absolute');
      $('#t1').css('border-radius','15px');
      $('#t1').css('width','7%');
      $('#t1').css('height','100%');
      $('#t1').css('top','0%');
      $('#t1').css('left','47%');
      $('#t1').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#t1').css('transform', 'rotate(45deg)');
      $('#t1').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');
  }
    if(a[0]==(contatore%2)+1&&a[4]==(contatore%2)+1&&a[8]==(contatore%2)+1)
    {vittoria=1;

      $('#t2').css('position','absolute');
      $('#t2').css('border-radius','15px');
      $('#t2').css('width','7%');
      $('#t2').css('height','100%');
      $('#t2').css('top','0%');
      $('#t2').css('left','47%');
      $('#t2').css('background', 'linear-gradient(to right, #FF0000 , yellow)');
      $('#t2').css('transform', 'rotate(315deg)');
      $('#t2').css('visibility', 'visible');
      document.getElementById("win").innerHTML ="WINNER PLAYER O" ;
      $('#win').css('visibility', 'visible');

  }

      else if(a[0]!=0&&a[1]!=0&&a[2]!=0&&a[3]!=0&&a[4]!=0&&a[5]!=0&&a[6]!=0&&a[7]!=0&&a[8]!=0& vittoria==0)
      {vittoria=1;

        document.getElementById("win").innerHTML ="PAREGGIO" ;
        $('#win').css('font-size', '+=100%');
        $('#win').css('visibility', 'visible');
        $('#faccina').css('visibility', 'visible');
        }
        if (vittoria==1)
        {
          sres();
        }
        break;

}
};
