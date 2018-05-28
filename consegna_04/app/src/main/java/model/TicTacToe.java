package model;
public class TicTacToe {
    private char[] cells;
    private int moves;
    private char whoMoves;
    public TicTacToe(char whoMoves) {
        cells = new char[9];
        moves = 0;
        this.whoMoves = whoMoves;
        for(int i = 0; i<9 ; i++) {
            cells[i] = '-';
        }
    }
    public char getCurrentMoving() {
        return whoMoves;
    }
    public TicTacToe() {
        this('x');
    }
    @Override
    public String toString() {
        String s="";
        for(int i = 0; i<9 ; i++) {
            s += cells[i];
        }
        return s;
    }
    public char[] getCells() {
        return cells.clone();
    }
    public void makeMove(int id) throws CellNotEmptyException, CellNotInRangeException {
        if(id>=0&&id<=8) {
            if(cells[id]=='-') {
                cells[id] = whoMoves;
                this.moves++;
                whoMoves = (whoMoves=='o') ? 'x' : 'o';
            } else {
                throw new CellNotEmptyException(id);
            }
        } else {
            throw new CellNotInRangeException();
        }
    }
    public char checkWinner() {
        char winCheck = (whoMoves=='o') ? 'x' : 'o';
        if(
            cells[0]==winCheck&&cells[1]==winCheck&&cells[2]==winCheck ||
            cells[3]==winCheck&&cells[4]==winCheck&&cells[5]==winCheck ||
            cells[6]==winCheck&&cells[7]==winCheck&&cells[8]==winCheck ||
            /* colonne */
            cells[0]==winCheck&&cells[3]==winCheck&&cells[6]==winCheck ||
            cells[1]==winCheck&&cells[4]==winCheck&&cells[7]==winCheck ||
            cells[2]==winCheck&&cells[5]==winCheck&&cells[8]==winCheck ||
            /* diagonali */
            cells[0]==winCheck&&cells[4]==winCheck&&cells[8]==winCheck ||
            cells[2]==winCheck&&cells[4]==winCheck&&cells[6]==winCheck
                ){
            return winCheck;
        }
        if(moves>8) {
                return '-';
        } else {
            return 0;
        }
    }
    public void reset(char wm) {
        moves = 0;
        this.whoMoves = wm;
        for(int i = 0; i<9 ; i++) {
            cells[i] = '-';
        }
    }
}
