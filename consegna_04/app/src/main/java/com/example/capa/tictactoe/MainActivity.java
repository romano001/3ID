package com.example.capa.tictactoe;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import model.*;
public class MainActivity extends AppCompatActivity {
    private Button[] buttons;
    private char lastMatchStart = 'o';
    private TicTacToe game = new TicTacToe(lastMatchStart);
    private int counterX = 0;
    private int counterO = 0;
    private TextView tvx;
    private TextView tvo;
    private TextView turno;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findButtons();
        setListeners();
        tvx = findViewById(R.id.counterX);
        tvo = findViewById(R.id.counterO);
        turno = findViewById(R.id.turno);
        tvx.setText(new Integer(counterX).toString());
        tvo.setText(new Integer(counterO).toString());
        turno.setText(getString(R.string.whose_round,new Character(game.getCurrentMoving()).toString().toUpperCase()));
    }
    protected void setListeners() {
        if(buttons!=null) {
            for(int i = 0 ; i < 9 ; i++) {
                int finalI = i;
                buttons[i].setOnClickListener((View view)-> {
                    makeMove(finalI);
                });
            }
        }
    }
    protected void makeMove(int i) {
        try {
            game.makeMove(i);
            turno.setText(getString(R.string.whose_round,new Character(game.getCurrentMoving()).toString().toUpperCase()));
            drawTable();
            char result = game.checkWinner();
            if(result!=0) {
                AlertDialog.Builder adb = new AlertDialog.Builder(MainActivity.this);
                adb.setCancelable(false);
                adb.setPositiveButton(R.string.new_round, (dialog, which) -> {
                    lastMatchStart = (lastMatchStart=='o') ? 'x' : 'o';
                    game.reset(lastMatchStart);
                    drawTable();
                    tvx.setText(new Integer(counterX).toString());
                    tvo.setText(new Integer(counterO).toString());
                    turno.setText(getString(R.string.whose_round,new Character(game.getCurrentMoving()).toString().toUpperCase()));
                });
                adb.setNeutralButton(R.string.new_game, (dialog, which) -> {
                    lastMatchStart = 'o';
                    game.reset('o');
                    drawTable();
                    counterO=0;
                    counterX=0;
                    tvx.setText(new Integer(counterX).toString());
                    tvo.setText(new Integer(counterO).toString());
                    turno.setText(getString(R.string.whose_round,new Character(game.getCurrentMoving()).toString().toUpperCase()));
                });
                adb.setNegativeButton(R.string.exit_app, (dialog, which) -> {
                   finish();
                });
                if(result=='-') {
                   adb.setMessage(R.string.parity);
                }
                else if(result=='x') {
                    adb.setMessage(R.string.winX);
                    counterX++;
                }
                else if(result=='o') {
                    adb.setMessage(R.string.winO);
                    counterO++;
                }
                adb.show();
            }
        } catch (CellNotEmptyException e) {
            Toast.makeText(getApplicationContext(),"Seleziona una cella vuota!",Toast.LENGTH_SHORT).show();
        } catch (CellNotInRangeException e) {
            e.printStackTrace();
        }
    }
    protected void drawTable() {
        char[] cells = game.getCells();
        for(int i=0 ; i<9 ; i++) {
            char c = cells[i];
            Button b = buttons[i];
            switch(c) {
                case 'o': b.setBackgroundResource(R.drawable.o);break;
                case 'x': b.setBackgroundResource(R.drawable.x);break;
                case '-': b.setBackgroundResource(R.drawable.empty);break;
            }
        }
    }
    protected void findButtons() {
        buttons = new Button[9];
        for(int i = 0 ; i < 9 ; i++) {
            String id = "button"+i;
            int res = getResources().getIdentifier(id,"id",getPackageName());
            Button b = findViewById(res);
            buttons[i] = b;
        }
    }
}
