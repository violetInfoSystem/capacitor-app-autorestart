package com.violetinfosystems.appautorestart;

import android.content.Intent;
import android.os.Handler;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AppAutoRestart")
public class AppAutoRestartPlugin extends Plugin {

    public void enableAutoRestart(PluginCall call) {
        Intent intent = getActivity().getBaseContext()
                .getPackageManager()
                .getLaunchIntentForPackage(getActivity().getPackageName());
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        Handler handler = new Handler();
        handler.postDelayed(() -> {
            getActivity().startActivity(intent);
        }, 1000);

        call.resolve();
    }

    public void disableAutoRestart(PluginCall call) {
        call.resolve();
    }
}