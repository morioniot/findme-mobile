package com.findme.background;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class BackgroundReceiver extends BroadcastReceiver {

    public void onReceive(Context context, Intent intent) {
        String finalText = intent.getStringExtra(HelloService.RESULT_DATA);
        Toast.makeText(context, finalText, Toast.LENGTH_SHORT).show();
    }
}
