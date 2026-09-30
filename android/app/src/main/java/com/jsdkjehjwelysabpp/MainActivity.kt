package com.jsdkjehjwelysabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.hejnrozgdskyad.VhejnrozgdskyadiewportBridge
import com.hejnrozgdskyad.ShejnrozgdskyadharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "hejnrozgdskyadabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cachehejnrozgdskyadPendingSendId(intent)
    cachehejnrozgdskyadPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cachehejnrozgdskyadPendingSendId(intent)
    cachehejnrozgdskyadPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VhejnrozgdskyadiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VhejnrozgdskyadiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachehejnrozgdskyadPendingSendId(intent: Intent?) {
    val sendIhejnrozgdskyadd = intent?.getStringExtra("sendid")
    if (!sendIhejnrozgdskyadd.isNullOrEmpty()) {
      ShejnrozgdskyadharedPreferencesHelper.saveString("pendingSendId", sendIhejnrozgdskyadd)
    }
  }

  private fun cachehejnrozgdskyadPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      ShejnrozgdskyadharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
