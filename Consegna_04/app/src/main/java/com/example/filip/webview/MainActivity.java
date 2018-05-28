package com.example.filip.webview;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView pagina = findViewById(R.id.pagina);
        pagina.getSettings().setJavaScriptEnabled(true);
        pagina.loadUrl("http://saccon.altervista.org/Consegna03/pagina.html");
    }
}
