package com.example.restrainer.fragements

import android.app.AppOpsManager
import android.app.usage.UsageStats
import android.app.usage.UsageStatsManager
import android.content.Context
import android.content.Intent
import android.content.pm.ResolveInfo
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.os.Process
import android.provider.Settings
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.widget.Toolbar
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.restrainer.R
import com.example.restrainer.adapters.StatsRecyclerAdapter
import com.example.restrainer.datamodels.StatsInfo
import kotlinx.android.synthetic.main.apps_usage_fragment.*
import java.text.SimpleDateFormat
import java.util.*
import kotlin.collections.ArrayList


class UsageStatsFragment : Fragment(){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(

        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.apps_usage_fragment, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
//        app_name = view.findViewById(R.id.app_name)
//        last_used = view.findViewById(R.id.last_usage)
//        screen_time = view.findViewById(R.id.screen_time)

        val toolBar = view.findViewById<Toolbar>(R.id.topAppBarAppListFragment)

        toolBar.setNavigationOnClickListener {
            findNavController().navigate(R.id.action_usageStatsFragment_to_appListFagment4)
        }

        if(checkPermission()){
            val stats = ArrayList<StatsInfo>();
            showUsageStats(stats)
            apps_stats_recyclerview.layoutManager = LinearLayoutManager(activity)
            val adapter = StatsRecyclerAdapter(stats)
            apps_stats_recyclerview.adapter = adapter
        }else{
            startActivity(Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS))
        }
    }

    private fun showUsageStats(stats: ArrayList<StatsInfo>){
        var usagemanager : UsageStatsManager = activity?.getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
        var cal: Calendar = Calendar.getInstance()
        cal.add(Calendar.DAY_OF_MONTH, -1)
        var usageState: List<UsageStats> = usagemanager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY,cal.timeInMillis,System.currentTimeMillis())
        var statsData : String = ""
        for(i in usageState.indices){
            statsData = statsData + "Package Name: " + usageState.get(i).packageName + "\n"+
                    "Last Time Used : "+ convertTime(usageState.get(i).lastTimeUsed) + "\n" +
                    "Describe Contents :"+ usageState.get(i).describeContents() + "\n" +
                    "First Time Stamp : "+convertTime(usageState.get(i).firstTimeStamp) + "\n"
                    "Last Time Stamp : "+convertTime(usageState.get(i).lastTimeStamp) + "\n"
                    "Total Time in Foreground :" +convertTime2(usageState.get(i).totalTimeInForeground) + "\n"
            var stat = StatsInfo(getAppNameFromPackage(usageState.get(i).packageName),
                convertTime(usageState.get(i).lastTimeStamp), convertTime2(usageState.get(i).totalTimeInForeground), getAppIconFromPackage(usageState.get(i).packageName))
            if(stat.appIcon != resources.getDrawable(R.drawable.ic_launcher_foreground)) {
                stats.add(stat)
            }
        }

    }

    private fun getAppNameFromPackage(
        packageName: String
    ): String {
        var list: List<ResolveInfo>? = null
        val intent = Intent(Intent.ACTION_MAIN, null)
        intent.addCategory(Intent.CATEGORY_LAUNCHER)
        val pkgAppsList = this.context?.packageManager
                if(pkgAppsList!=null) {
                    list = pkgAppsList.queryIntentActivities(intent, 0)
                }
        for (app in list!!) {
            if(pkgAppsList != null) {
                if (app.activityInfo.packageName == packageName ) {
                    return app.activityInfo.loadLabel(pkgAppsList).toString()
                }
            }
        }
        var array : List<String> = packageName.split(".")
        return array.get(array.size-1)
    }

    private fun getAppIconFromPackage(
        packageName: String
    ): Drawable {
        var list: List<ResolveInfo>? = null
        val intent = Intent(Intent.ACTION_MAIN, null)
        intent.addCategory(Intent.CATEGORY_LAUNCHER)
        val pkgAppsList = this.context?.packageManager
        if(pkgAppsList!=null) {
            list = pkgAppsList.queryIntentActivities(intent, 0)
        }
        for (app in list!!) {
            if(pkgAppsList != null) {
                if (app.activityInfo.packageName == packageName) {
                    return app.activityInfo.loadIcon(pkgAppsList)
                }
            }
        }
        return resources.getDrawable(R.drawable.ic_launcher_foreground);
    }


    private fun convertTime(lastTimeUsed: Long): String{
        var date : Date = Date(lastTimeUsed)
        var format: SimpleDateFormat = SimpleDateFormat("hh:mm a", Locale.ENGLISH)
        return format.format(date)
    }

    private fun convertTime2(lastTimeused: Long): String{
        var date : Date = Date(lastTimeused)
        var format: SimpleDateFormat = SimpleDateFormat("hh:mm", Locale.ENGLISH)
        return format.format(date)
    }
    private fun checkPermission(): Boolean{
        val appOps = activity?.getSystemService(Context.APP_OPS_SERVICE) as AppOpsManager
        val mode = appOps.checkOpNoThrow(
            "android:get_usage_stats",
            Process.myUid(), requireContext().packageName
        )
        return mode == AppOpsManager.MODE_ALLOWED
    }
}