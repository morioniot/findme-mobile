package com.findme.background;

import android.content.Intent;
import android.content.IntentFilter;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

public class BackgroundModule extends ReactContextBaseJavaModule {

  public static final String MESSAGE_IN = "MESSAGE_IN";
  private static final String TAG = "BackgroundModule";
  private BackgroundReceiver receiver;

  public BackgroundModule(ReactApplicationContext reactContext) {
      super(reactContext);
      receiver = new BackgroundReceiver();
      IntentFilter filter = new IntentFilter(HelloService.BROADCAST_ACTION);
      LocalBroadcastManager.getInstance(reactContext).registerReceiver(receiver, filter);
  }

  @Override
  public String getName() {
      return "Background";
  }

  @ReactMethod
  public void transformInBackground(String input) {
      Log.d(TAG, "Accessing the transform method");
      ReactContext reactContext = getReactApplicationContext();
      Intent intent = new Intent(reactContext, HelloService.class);
      intent.putExtra(MESSAGE_IN, input);
      reactContext.startService(intent);
  }

  @ReactMethod
  public void show(String input) {
      ReactContext reactContext = getReactApplicationContext();
      Toast.makeText(reactContext, "Hello " + input, Toast.LENGTH_SHORT).show();
  }
}
