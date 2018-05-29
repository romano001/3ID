package com.example.utente.tictactoemobile;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView vistaWeb=(WebView) findViewById(R.id.vistapagina);
        vistaWeb.getSettings().setJavaScriptEnabled(true);
        String url = "http://romanodavide.altervista.org/TicTacToeMobile/TicTacToe.html";
        vistaWeb.loadUrl(url);
    }
}
