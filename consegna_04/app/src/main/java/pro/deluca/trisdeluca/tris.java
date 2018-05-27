package pro.deluca.trisdeluca;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class tris extends AppCompatActivity {
    WebView wv;

    //pulsante indietro
    @Override
    public void onBackPressed(){
        if(wv.canGoBack()) {
            wv.goBack();
        }else{
            super.onBackPressed();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tris);
        wv=(WebView)findViewById(R.id.wv);
        //attivo javascript
        wv.getSettings().setJavaScriptEnabled(true);
        wv.setFocusable(true);
        //grafica
        wv.setFocusableInTouchMode(true);
        wv.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        wv.getSettings().setDomStorageEnabled(true);
        wv.getSettings().setDatabaseEnabled(true);
        wv.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
        //indirizzo
        wv.loadUrl("https://deluca.pro/wvtris");
        wv.setWebViewClient(new WebViewClient());
    }
}
