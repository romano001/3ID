package model;
public class CellNotEmptyException extends Exception {
    final private int id;
    public CellNotEmptyException(int id) {        
        super("Cell with id "+id+" isn't empty");
        this.id = id;
    }
    public int getId() {
        return id;
    }
}
