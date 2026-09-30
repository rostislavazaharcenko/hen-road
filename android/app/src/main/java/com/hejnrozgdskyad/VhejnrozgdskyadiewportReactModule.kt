package com.hejnrozgdskyad

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VhejnrozgdskyadiewportReactModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "VhejnrozgdskyadiewportBannana"

    @ReactMethod
    fun navhejnrozgdskyadigate(url: String, promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity == null || url.isBlank()) {
                promise.resolve(false)
                return
            }

            VhejnrozgdskyadiewportBridge.navhejnrozgdskyadigate(activity, url)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }

    @ReactMethod
    fun hhejnrozgdskyadide(promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity != null) {
                VhejnrozgdskyadiewportBridge.hhejnrozgdskyadide(activity)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }
}
