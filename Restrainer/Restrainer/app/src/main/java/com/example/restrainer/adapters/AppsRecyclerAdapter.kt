package com.example.restrainer.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.restrainer.R
import com.example.restrainer.datamodels.AppInfo

class AppsRecyclerAdapter() : RecyclerView.Adapter<AppsRecyclerAdapter.ViewHolder>() {
    private var apps = emptyList<AppInfo>()
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val itemView = layoutInflater.inflate(R.layout.apps_fragment,parent,false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return apps.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val app:AppInfo = apps[position]
        holder.appTitle?.text = app.title
        holder.packageName?.text = app.body
        holder.appPosition = position
    }

    inner class ViewHolder(itemView: View):RecyclerView.ViewHolder(itemView!!){
        val appTitle = itemView?.findViewById<TextView>(R.id.list_app_name)
        val packageName = itemView?.findViewById<TextView>(R.id.app_package)
        var appPosition = 0
    }

    fun setApps(apps: List<AppInfo>){
        this.apps = apps
        notifyDataSetChanged()
    }
}