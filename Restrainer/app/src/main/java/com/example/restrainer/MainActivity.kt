package com.example.restrainer

import android.app.Activity
import android.content.Intent
import android.content.pm.ApplicationInfo
import android.content.pm.PackageManager
import android.content.pm.ResolveInfo
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView

import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}


//class MainActivity : AppCompatActivity(){
//
//    public override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
////        setContentView(R.layout.activity_main)
//        val pm = this.packageManager
//        val packages: List<ApplicationInfo> =
//            pm.getInstalledApplications(PackageManager.GET_META_DATA)
//
//        for (packageInfo in packages) {
//            Log.d(
//                "log",
//                "Installed package :" + packageInfo.loadLabel(pm)
//            )
//            Log.d("log", "Source dir : " + packageInfo.sourceDir)
//            Log.d(
//                "log",
//                "Launch Activity :" + pm.getLaunchIntentForPackage(packageInfo.packageName)
//            )
//        }
//    }
//}
//        var data: TextView? = null
//        var image1: ImageView? = null
//        var holdlayout: LinearLayout? = null
//        var l1: View? = null
//        private var results: ArrayList<String>? = null
//        var list: List<ResolveInfo>? = null
//        var result: TextView? = null
//        var str = ""
//        var icon: Drawable? = null
//        public override fun onCreate(savedInstanceState: Bundle?) {
//            super.onCreate(savedInstanceState)
//            setContentView(R.layout.activity_main)
//            l1 = findViewById(R.id.Layout1)
//            results = ArrayList()
//            val pm = this.packageManager
//            val intent = Intent(Intent.ACTION_MAIN, null)
//            intent.addCategory(Intent.CATEGORY_LAUNCHER)
//            list = pm.queryIntentActivities(intent, 0)
//            for (rInfo in list!!) {
//                str = """
//                ${rInfo.activityInfo.applicationInfo.loadLabel(pm)}
//
//                """.trimIndent()
//                results!!.add(
//                    rInfo.activityInfo.applicationInfo.loadLabel(pm)
//                        .toString()
//                )
//                Log.w(
//                    "Installed Applications", rInfo.activityInfo.applicationInfo
//                        .loadLabel(pm).toString()
//                )
//                icon = rInfo.activityInfo.applicationInfo.loadIcon(pm)
//                holdlayout = LinearLayout(applicationContext)
//                holdlayout!!.orientation = LinearLayout.HORIZONTAL
//                data = TextView(applicationContext)
//                data!!.text = str
//                image1 = ImageView(applicationContext)
//                image1!!.setBackgroundDrawable(icon)
//                (holdlayout as ViewGroup).addView(image1)
//                (holdlayout as ViewGroup).addView(data)
//                (l1 as ViewGroup?)!!.addView(holdlayout)
//            }
//        }
//    }