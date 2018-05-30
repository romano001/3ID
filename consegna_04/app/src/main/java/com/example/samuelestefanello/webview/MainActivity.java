package com.example.samuelestefanello.webview;

import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

import java.io.File;

public class MainActivity extends AppCompatActivity {

    WebView webview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webview = (WebView) findViewById(R.id.webview);
        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setBuiltInZoomControls(true);



        //File lFile = new File(Environment.getExternalStorageDirectory() + "/tris/tris.html");
        //webview.loadUrl("https/google.com/");//"file:///" + lFile.getAbsolutePath());

        webview.loadUrl("http://samuelestefanello.altervista.org/Tris1.html");
    }
}
