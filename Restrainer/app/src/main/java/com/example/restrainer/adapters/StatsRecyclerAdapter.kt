package com.example.restrainer.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.restrainer.R
import com.example.restrainer.datamodels.StatsInfo

class StatsRecyclerAdapter(private val appStats: List<StatsInfo>) : RecyclerView.Adapter<StatsRecyclerAdapter.ViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val itemView = layoutInflater.inflate(R.layout.apps_stats_fragment,parent,false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return appStats.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val app: StatsInfo = appStats[position]
        holder.appTitle?.text = app.name
        holder.lastused?.text = app.lastUsed
        holder.screentiem?.text = app.screenTime
        holder.appIcon.setImageDrawable(app.appIcon)
        holder.appPosition = position
    }

    inner class ViewHolder(itemView: View):RecyclerView.ViewHolder(itemView!!){
        val appTitle = itemView?.findViewById<TextView>(R.id.app_name)
        var lastused = itemView?.findViewById<TextView>(R.id.last_usage)
        var screentiem = itemView?.findViewById<TextView>(R.id.screen_time)
        var appIcon = itemView?.findViewById<ImageView>(R.id.imageView4)
        var appPosition = 0
    }
}