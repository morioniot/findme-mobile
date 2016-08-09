package com.findme.background;

import android.app.IntentService;
import android.content.Intent;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;

public class HelloService extends IntentService {

    private static final String TAG = "HelloService";
    public static final String BROADCAST_ACTION = "com.findme.background.BROADCAST";
    public static final String RESULT_DATA = "com.findme.background.RESULT";

    public HelloService() {super("HelloService");}

    @Override
    protected void onHandleIntent(Intent intent) {
        Log.d(TAG, "Accessing the intent handler");
        String text = intent.getStringExtra(BackgroundModule.MESSAGE_IN);
        text = "Hello " + text;
        Intent localIntent = new Intent(BROADCAST_ACTION);
        localIntent.putExtra(RESULT_DATA, text);
        LocalBroadcastManager.getInstance(this).sendBroadcast(localIntent);
    }
}
