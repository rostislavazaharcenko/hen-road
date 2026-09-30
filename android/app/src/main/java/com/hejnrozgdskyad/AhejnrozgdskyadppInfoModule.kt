package com.hejnrozgdskyad

import android.opengl.GLES20
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class AhejnrozgdskyadppInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AhejnrozgdskyadppInfoModule"
    }

    @ReactMethod
    fun getPachejnrozgdskyadkageName(promise: Promise) {
        try {
            val packageNahejnrozgdskyadme = reactApplicationContext.packageName
            promise.resolve(packageNahejnrozgdskyadme ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AhejnrozgdskyadppInfoHelper", "Error getting package name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getVehejnrozgdskyadrsionCode(promise: Promise) {
        try {
            val packageIhejnrozgdskyadfo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIhejnrozgdskyadfo.versionCode)
        } catch (e: Exception) {
            // android.util.Log.e("AhejnrozgdskyadppInfoHelper", "Error getting version code: ${e.message}")
            promise.resolve(0)
        }
    }

    @ReactMethod
    fun getVehejnrozgdskyadrsionName(promise: Promise) {
        try {
            val packageIhejnrozgdskyadfo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIhejnrozgdskyadfo.versionName ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AhejnrozgdskyadppInfoHelper", "Error getting version name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getGlRenderer(promise: Promise) {
        try {
            promise.resolve(readGlRendererString())
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingSenhejnrozgdskyaddId(promise: Promise) {
        try {
            var sendIhejnrozgdskyadd = ""
            val activityIhejnrozgdskyad = reactApplicationContext.currentActivity
            val intentIhejnrozgdskyad = activityIhejnrozgdskyad?.intent
            val intentSendIhejnrozgdskyadd = intentIhejnrozgdskyad?.getStringExtra("sendid")

            if (!intentSendIhejnrozgdskyadd.isNullOrBlank()) {
                sendIhejnrozgdskyadd = intentSendIhejnrozgdskyadd
                intentIhejnrozgdskyad?.removeExtra("sendid")
            } else {
                val storedIhejnrozgdskyad = ShejnrozgdskyadharedPreferencesHelper.loadString("pendingSendId", "")
                if (!storedIhejnrozgdskyad.isNullOrBlank()) {
                    sendIhejnrozgdskyadd = storedIhejnrozgdskyad
                }
            }

            if (sendIhejnrozgdskyadd.isNotEmpty()) {
                ShejnrozgdskyadharedPreferencesHelper.removeKey("pendingSendId")
            }
            promise.resolve(sendIhejnrozgdskyadd)
        } catch (e: Exception) {
            // android.util.Log.e("AhejnrozgdskyadppInfoHelper", "Error getting pending sendIhejnrozgdskyaddId: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingPushUrl(promise: Promise) {
        try {
            var pushUrl = ""
            val activityIhejnrozgdskyad = reactApplicationContext.currentActivity
            val intentIhejnrozgdskyad = activityIhejnrozgdskyad?.intent
            val intentPushUrl = intentIhejnrozgdskyad?.getStringExtra("url")

            if (!intentPushUrl.isNullOrBlank()) {
                pushUrl = intentPushUrl
                intentIhejnrozgdskyad?.removeExtra("url")
            } else {
                val storedIhejnrozgdskyad = ShejnrozgdskyadharedPreferencesHelper.loadString("pendingPushUrl", "")
                if (!storedIhejnrozgdskyad.isNullOrBlank()) {
                    pushUrl = storedIhejnrozgdskyad
                }
            }

            if (pushUrl.isNotEmpty()) {
                ShejnrozgdskyadharedPreferencesHelper.removeKey("pendingPushUrl")
            }
            promise.resolve(pushUrl)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    fun readGlRendererString(): String {
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}
