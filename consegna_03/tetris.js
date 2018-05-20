var cella=[0,0,0,0,0,0,0,0,0,0];
var turno=false;
var bot=false;
let stop=false;
function c(num)
{
	if(cella[num]==0&&!stop)
	{
		if(turno)cella[num]=1;
		else cella[num]=2;
		rielabora();
	}
};
function rielabora()
{
	for(let i=1;i<=9;i++)
	{
		if(cella[i]==0)$("#"+i).html('<img src="NULL.png"></img>');
		else if(cella[i]==1)$("#"+i).html('<img src="X.png"></img>');
		else if(cella[i]==2)$("#"+i).html('<img src="O.png"></img>');
	}
	turno=!turno;
	if(bot&&!turno&&libera())
	{
		autoBot();
		turno=!turno;
	}
	testVinto();
}
function testVinto()
{
	//orizzontale
	for(let i=1;i<=7;i+=3)if(cella[i]==cella[i+1]&&cella[i+1]==cella[i+2]&&cella[i]!=0)vinto(cella[i]);
	//verticale
	for(let i=1;i<=3;i++)if(cella[i]==cella[i+3]&&cella[i+3]==cella[i+6]&&cella[i]!=0)vinto(cella[i]);
	//orizzontale
	if(cella[1]==cella[5]&&cella[5]==cella[9]&&cella[1]!=0)vinto(cella[1]);
	if(cella[3]==cella[5]&&cella[5]==cella[7]&&cella[3]!=0)vinto(cella[3]);
	if(!libera())vinto(0);
}
function vinto(vincitore)
{
	stop=true;
	if(vincitore==1)alert("HA VINTO CROCE");
	else if(vincitore==2)alert("HA VINTO CERCHIO");
	else if(vincitore==0)alert("PARI");
}
function res(){
	cella=[0,0,0,0,0,0,0,0,0,0];
	turno=false;
	stop=false;
	rielabora();
}
function mod(){
	bot=!bot;
	if(bot)$("#modB").text("1P");
	else $("#modB").text("2P");
}
function autoBot(){
	let num;
	do{
		num=Math.round(Math.random() * (9 - 1) + 1);
	}while(cella[num]!=0);
	cella[num]=2;
	$("#"+num).html('<img src="O.png"></img>');
}
function libera()
{
	for(let i=1;i<=9;i++)if(cella[i]==0)return true;
	return false;
}
