/* INIZIALIZZAZIONE */
let container = document.querySelector('#gamecontainer');
let output = document.querySelector('#alert_message');
let alertbox = document.querySelector('#alertbox');
/* gioco */
let celle = [];
function Cella(value,domElement) {
    this.value = value;
    this.domElement = domElement;
}
for(let i = 0 ; i < 9 ; i++) {
    let newCell = document.createElement('div');
    newCell.className = "cell";
    /* container.insertBefore(newCell,container.childNodes[0]); */
    container.appendChild(newCell);
    newCell.setAttribute('onclick',`game.mossa(${i})`);
    celle.push(new Cella('-',newCell));
}
let game = {
    canPlay : false,
    mode: 'friend', /* puó essere computer/friend */
    xImgSrc : 'X.png',
    nextMove: 'o',
    oImgSrc : 'O.png',
    out: output,
    alertbox: alertbox,
    celle: celle,
    mosse: 0,
    inizia: function() {
        this.alertbox.style.backgroundColor = "green";
        this.out.style.color = 'white';
        this.out.innerHTML = `Avvia una nuova partita per giocare`;
    },
    stampa: function(){
        for(let c of this.celle) {
            switch(c.value) {
                case 'x' : c.domElement.style.backgroundImage = `url(${this.xImgSrc})`;break;
                case 'o' : c.domElement.style.backgroundImage = `url(${this.oImgSrc})`;break;
                case '-' : c.domElement.style.backgroundImage = '';break;
            }
        }
        this.alertbox.style.backgroundColor = "blue";
        this.out.style.color = 'white';
        this.out.innerHTML = `Turno del giocatore ${this.nextMove.toUpperCase()}`;
    },
    reset: function(mode) {
        for(let c of this.celle) {
            c.value = '-';
        }
        this.mode = mode;
        this.mosse = 0;
        this.canPlay = true;
        this.stampa();
    },
    checkWinner: function() {
        if(this.mosse===9){
            this.alertbox.style.backgroundColor = "yellow";
            this.out.style.color = 'black';
            this.out.innerHTML = `Pareggio!`;
            this.canPlay = false;
        } else {
            winCheck = (this.nextMove==='o') ? 'x' : 'o';
            if(
                /* righe */
                this.celle[0].value===winCheck&&this.celle[1].value===winCheck&&this.celle[2].value===winCheck ||
                this.celle[3].value===winCheck&&this.celle[4].value===winCheck&&this.celle[5].value===winCheck ||
                this.celle[6].value===winCheck&&this.celle[7].value===winCheck&&this.celle[8].value===winCheck ||
                /* colonne */
                this.celle[0].value===winCheck&&this.celle[3].value===winCheck&&this.celle[6].value===winCheck ||
                this.celle[1].value===winCheck&&this.celle[4].value===winCheck&&this.celle[7].value===winCheck ||
                this.celle[2].value===winCheck&&this.celle[5].value===winCheck&&this.celle[8].value===winCheck ||
                /* diagonali */
                this.celle[0].value===winCheck&&this.celle[4].value===winCheck&&this.celle[8].value===winCheck ||
                this.celle[2].value===winCheck&&this.celle[4].value===winCheck&&this.celle[6].value===winCheck
            ) {                
                for(let c of this.celle) {
                    if(c.value!==winCheck) {
                        c.value='-';
                    }
                }
                this.stampa();
                this.alertbox.style.backgroundColor = "green";
                this.out.style.color = 'black';
                this.out.innerHTML = `Vince il player ${winCheck}`;
                this.canPlay = false;
            }
        }
    },
    mossa: function(id) {
        if(this.canPlay)
        {
            if(this.celle[id].value==='-')
            {
                this.celle[id].value = this.nextMove;
                if(this.nextMove==='o') {
                    this.nextMove = 'x';
                } else {
                    this.nextMove = 'o';
                }
                this.mosse++;
                this.stampa();
                this.checkWinner();
                /* nel caso il secondo giocatore sia il computer faccio una mossa a caso */
                if(this.mode==='computer'&&this.canPlay) {
                    let idCelleVuote = [];
                    let i = 0;
                    for(let c of this.celle) {
                        if(c.value==='-') {
                            idCelleVuote.push(i);
                        }
                        i++;
                    }
                    let idScelta = Math.floor(Math.random()*idCelleVuote.length);
                    let scelta = idCelleVuote[idScelta];
                    this.celle[scelta].value = this.nextMove;
                    if(this.nextMove==='o') {
                        this.nextMove = 'x';
                    } else {
                        this.nextMove = 'o';
                    }
                    this.mosse++;
                    this.stampa();
                    this.checkWinner();
                }
            } else {
                this.alertbox.style.backgroundColor = "red";
                this.out.style.color = 'white';
                this.out.innerHTML = `Cella giá occupata`;
            }
        }
    }
}
document.querySelector('#btn_riavvias').onclick = function(){
    game.reset('friend');
};
document.querySelector('#btn_riavviam').onclick = function(){
    game.reset('computer');
};
game.inizia();