package model;
public class CellNotInRangeException extends Exception {
    public CellNotInRangeException() {
    }
    public CellNotInRangeException(String msg) {
        super(msg);
    }
}
