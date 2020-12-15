package com.example.restrainer.datasources

import android.content.Context
import android.content.Intent
import android.content.pm.ResolveInfo
import android.util.Log
import com.example.restrainer.datamodels.AppInfo

object AppsDataSource {
    val apps = ArrayList<AppInfo>();
    private var context: Context? = null

    fun setContext(context: Context?) {
        this.context = context
    }
    init {
        initializeApps();
    }

    private fun initializeApps() {
        var results: ArrayList<String>?
        var list: List<ResolveInfo>? = null
        var str = ""
        results = ArrayList()
        val pm = context?.packageManager
        val intent = Intent(Intent.ACTION_MAIN, null)
        intent.addCategory(Intent.CATEGORY_LAUNCHER)
        if (pm != null) {
            list = pm.queryIntentActivities(intent, 0)
        }
        for (rInfo in list!!) {
            if (pm!=null) {
                str = """
                ${rInfo.activityInfo.applicationInfo.loadLabel(pm)}

                """.trimIndent()
                results!!.add(
                    rInfo.activityInfo.applicationInfo.loadLabel(pm)
                        .toString()
                )
                var app = AppInfo(
                    rInfo.activityInfo.applicationInfo.loadLabel(pm)
                        .toString(), rInfo.activityInfo.applicationInfo.loadIcon(pm)
                )
                Log.w(
                    "Installed Applications", rInfo.activityInfo.applicationInfo
                        .loadLabel(pm).toString()
                )
                apps.add(app)

            }
//        var app = AppInfo("App 1", "I am app 1.")
//        apps.add(app)
//        app = AppInfo("App 2","I am app 2.")
//        apps.add(app)
//        app = AppInfo("App 3","I am app 3.")
//        apps.add(app)
//        app = AppInfo("App 4","I am app 4.")
//        apps.add(app)
        }
    }
}