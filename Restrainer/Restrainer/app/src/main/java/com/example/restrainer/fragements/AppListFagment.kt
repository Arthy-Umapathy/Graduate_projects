package com.example.restrainer.fragements

import com.example.restrainer.R
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.widget.Toolbar
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.restrainer.adapters.AppsRecyclerAdapter
import androidx.fragment.app.activityViewModels
import com.example.restrainer.datasources.AppsDataSource
import com.example.restrainer.viewmodels.AppsViewModel
import kotlinx.android.synthetic.main.applist_fragment.*


class AppListFagment : Fragment() {
    private val appsViewModel : AppsViewModel by activityViewModels()
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

        toolBar.setNavigationOnClickListener{
            findNavController().navigate(R.id.action_appListFagment4_to_baseFragment)
        }

        view.findViewById<Button>(R.id.setrule).setOnClickListener{
            findNavController().navigate(R.id.action_appListFagment4_to_timeFragment)
        }

        appListRecyclerView.layoutManager = LinearLayoutManager(activity)
//        appListRecyclerView.adapter = AppsRecyclerAdapter(AppsDataSource.apps)
        val adapter = AppsRecyclerAdapter()
        appListRecyclerView.adapter = adapter
        appsViewModel.appsList.observe(viewLifecycleOwner, Observer { appsList -> appsList?.let { adapter.setApps(it) } })
    }
}

//    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
//        super.onViewCreated(view, savedInstanceState)
//        userInstalledApps =
//            view.findViewById<View>(R.id.installed_app_list) as ListView
//        installedApps = getInstalledApps()
//        installedAppAdapter = AppAdapter(this@AppListFagment, installedApps!!)
//        userInstalledApps!!.adapter = installedAppAdapter
//        userInstalledApps!!.onItemClickListener =
//            OnItemClickListener { adapterView, view, i, l ->
//                val colors =
//                    arrayOf(" Open App", " App Info")
//                val builder: AlertDialog.Builder =
//                    AlertDialog.Builder(activity)
//                builder.setTitle("Choose Action")
//                    .setItems(colors,
//                        DialogInterface.OnClickListener { dialog, which -> // The 'which' argument contains the index position of the selected item
//                            if (which == 0) {
//                                val pm = requireContext().packageManager
//                                val intent = pm.getLaunchIntentForPackage(
//                                    installedApps!![i].packages
//                                )
//                                if (intent != null) {
//                                    startActivity(intent)
//                                } else {
//                                    Toast.makeText(
//                                        activity,
//                                        installedApps!![i].packages + " Error, Please Try Again...",
//                                        Toast.LENGTH_SHORT
//                                    ).show()
//                                }
//                            }
//                            if (which == 1) {
//                                val intent =
//                                    Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
//                                intent.data = Uri.parse(
//                                    "package:" + installedApps!![i].packages
//                                )
//                                Toast.makeText(activity,
//                                    installedApps!![i].packages,
//                                    Toast.LENGTH_SHORT
//                                ).show()
//                                startActivity(intent)
//                            }
//                        })
//                builder.show()
//            }
//
//        //Total Number of Installed-Apps(i.e. List Size)
//        val abc = userInstalledApps!!.count.toString() + ""
//        val countApps = view.findViewById<View>(R.id.countApps) as TextView
//        countApps.text = "Total Installed Apps: $abc"
//        Toast.makeText(activity, "$abc Apps", Toast.LENGTH_SHORT).show()
//    }
//
//    private fun getInstalledApps(): List<AppList> {
//        val pm = requireContext().packageManager
//        val apps: MutableList<AppList> =
//            ArrayList()
//        val packs =
//            pm.getInstalledPackages(0)
//        //List<PackageInfo> packs = getPackageManager().getInstalledPackages(PackageManager.GET_PERMISSIONS);
//        for (i in packs.indices) {
//            val p = packs[i]
//            if (!isSystemPackage(p)) {
//                val appName =
//                    p.applicationInfo.loadLabel(pm).toString()
//                val icon = p.applicationInfo.loadIcon(pm)
//                val packages = p.applicationInfo.packageName
//                apps.add(AppList(appName, icon, packages))
//            }
//        }
//        return apps
//    }
//
//    private fun isSystemPackage(pkgInfo: PackageInfo): Boolean {
//        return pkgInfo.applicationInfo.flags and ApplicationInfo.FLAG_SYSTEM != 0
//    }
//
//    inner class AppAdapter(
//        context: AppListFagment,
//        customizedListView: List<AppList>
//    ) :
//        BaseAdapter() {
//        var layoutInflater: LayoutInflater
//        var listStorage: List<AppList>
//        override fun getCount(): Int {
//            return listStorage.size
//        }
//
//        override fun getItem(position: Int): Any {
//            return position
//        }
//
//        override fun getItemId(position: Int): Long {
//            return position.toLong()
//        }
//
//        override fun getView(
//            position: Int,
//            convertView: View,
//            parent: ViewGroup
//        ): View {
//            var convertView = convertView
//            val listViewHolder: ViewHolder
//            if (convertView == null) {
//                listViewHolder = ViewHolder()
//                convertView = layoutInflater.inflate(R.layout.apps_fragment, parent, false)
//                listViewHolder.textInListView =
//                    convertView.findViewById<View>(R.id.list_app_name) as TextView
//                listViewHolder.imageInListView =
//                    convertView.findViewById<View>(R.id.app_icon) as ImageView
//                listViewHolder.packageInListView =
//                    convertView.findViewById<View>(R.id.app_package) as TextView
//                convertView.tag = listViewHolder
//            } else {
//                listViewHolder = convertView.tag as ViewHolder
//            }
//            listViewHolder.textInListView!!.text = listStorage[position].name
//            listViewHolder.imageInListView!!.setImageDrawable(listStorage[position].icon)
//            listViewHolder.packageInListView!!.text = listStorage[position].packages
//            return convertView
//        }
//
//        internal inner class ViewHolder {
//            var textInListView: TextView? = null
//            var imageInListView: ImageView? = null
//            var packageInListView: TextView? = null
//        }
//
//        init {
//            layoutInflater =
//                context.activity?.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
//            listStorage = customizedListView
//        }
//    }
//
//    inner class AppList(val name: String, var icon: Drawable, val packages: String)
