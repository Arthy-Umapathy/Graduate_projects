package com.example.restrainer.fragements

import android.content.Intent
import android.content.pm.ResolveInfo
import com.example.restrainer.R
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.widget.Toolbar
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.restrainer.adapters.AppsRecyclerAdapter
import com.example.restrainer.datamodels.AppInfo
import kotlinx.android.synthetic.main.applist_fragment.*
import kotlin.collections.ArrayList


class AppListFragment : Fragment(), CellClickListener{
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(

        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.applist_fragment, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val toolBar = view.findViewById<Toolbar>(R.id.topAppBarAppListFragment)

        toolBar.setNavigationOnClickListener {
            findNavController().navigate(R.id.action_appListFagment4_to_baseFragment)
        }

        view.findViewById<Button>(R.id.stats).setOnClickListener{
            findNavController().navigate(R.id.action_appListFagment4_to_usageStatsFragment)
        }

        appListRecyclerView.layoutManager = LinearLayoutManager(activity)
        val apps = ArrayList<AppInfo>();
        initializeApps(apps)
        val adapter = AppsRecyclerAdapter(apps,this)
        appListRecyclerView.adapter = adapter
    }

    private fun initializeApps(apps: ArrayList<AppInfo>) {
        var results: ArrayList<String>?
        var list: List<ResolveInfo>? = null
        var str = ""
        results = ArrayList()
        val pm = this.context?.packageManager
        val intent = Intent(Intent.ACTION_MAIN, null)
        intent.addCategory(Intent.CATEGORY_LAUNCHER)
        if (pm != null) {
            list = pm.queryIntentActivities(intent, 0)
        }
        for (rInfo in list!!) {
            if (pm != null) {
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
                apps.add(app)

            }
        }
    }

    override fun onCellClickListener(title: String?) {
        Toast.makeText(this.context, "Set rule for title: $title", Toast.LENGTH_SHORT).show()
        findNavController().navigate(R.id.action_appListFagment4_to_timeFragment)
    }

}