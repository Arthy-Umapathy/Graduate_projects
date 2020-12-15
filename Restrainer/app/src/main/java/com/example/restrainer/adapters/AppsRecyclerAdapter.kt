package com.example.restrainer.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.example.restrainer.R
import com.example.restrainer.datamodels.AppInfo
import com.example.restrainer.fragements.CellClickListener

class AppsRecyclerAdapter(private val apps: List<AppInfo>, private val context: CellClickListener) : RecyclerView.Adapter<AppsRecyclerAdapter.ViewHolder>() {

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
        holder.packageName.setImageDrawable(app.body)
        holder.appPosition = position
        holder.appTitle.setOnClickListener { context.onCellClickListener(app.title) }
        }

    inner class ViewHolder(itemView: View):RecyclerView.ViewHolder(itemView!!){
        val appTitle = itemView?.findViewById<TextView>(R.id.list_app_name)
        var packageName = itemView?.findViewById<ImageView>(R.id.app_image)
        var appPosition = 0
    }

}