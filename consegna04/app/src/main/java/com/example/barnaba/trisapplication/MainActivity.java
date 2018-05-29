package com.example.barnaba.trisapplication;

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
        pagina.loadUrl("http://rallotris2.altervista.org/tris4.html");
    }
}
