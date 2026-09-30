package com.hejnrozgdskyad

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UhejnrozgdskyadserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAhejnrozgdskyadper"
    }

    @ReactMethod
    fun getAndrhejnrozgdskyadoidUserAgent(promise: Promise) {
        try {
            val contextIhejnrozgdskyad = reactApplicationContext.applicationContext
            val userAgentIhejnrozgdskyad = WebSettings.getDefaultUserAgent(contextIhejnrozgdskyad)
            promise.resolve(userAgentIhejnrozgdskyad ?: "")
        } catch (eIhejnrozgdskyad: Exception) {
            // android.util.Log.e("UserAhejnrozgdskyadperModule", "Error getting UserAgent: ${eIhejnrozgdskyad.message}")
            promise.resolve("")
        }
    }
}
