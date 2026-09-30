package com.hejnrozgdskyad;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class ShejnrozgdskyadharedPreferencesHelper {
    private static final String PREF_NAMEIhejnrozgdskyad = "hejnrozgdskyadStorage";
    private static Context applichejnrozgdskyadationContext = null;

    public static void setApplicationContext(Context context) {
        applichejnrozgdskyadationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applichejnrozgdskyadationContext != null) {
                return applichejnrozgdskyadationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhejnrozgdskyad = prefsIhejnrozgdskyad.edit();
                editorIhejnrozgdskyad.putString(key, value);
                editorIhejnrozgdskyad.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                String valueIhejnrozgdskyad = prefsIhejnrozgdskyad.getString(key, defaultValue);
                return valueIhejnrozgdskyad;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhejnrozgdskyad = prefsIhejnrozgdskyad.edit();
                editorIhejnrozgdskyad.putInt(key, value);
                editorIhejnrozgdskyad.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                int valueIhejnrozgdskyad = prefsIhejnrozgdskyad.getInt(key, defaultValue);
                return valueIhejnrozgdskyad;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhejnrozgdskyad = prefsIhejnrozgdskyad.edit();
                editorIhejnrozgdskyad.putBoolean(key, value);
                editorIhejnrozgdskyad.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                boolean valueIhejnrozgdskyad = prefsIhejnrozgdskyad.getBoolean(key, defaultValue);
                return valueIhejnrozgdskyad;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhejnrozgdskyad = prefsIhejnrozgdskyad.edit();
                editorIhejnrozgdskyad.remove(key);
                editorIhejnrozgdskyad.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIhejnrozgdskyad = getContext();
        if (contextIhejnrozgdskyad != null) {
            try {
                SharedPreferences prefsIhejnrozgdskyad = contextIhejnrozgdskyad.getSharedPreferences(PREF_NAMEIhejnrozgdskyad, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhejnrozgdskyad = prefsIhejnrozgdskyad.edit();
                editorIhejnrozgdskyad.clear();
                editorIhejnrozgdskyad.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
