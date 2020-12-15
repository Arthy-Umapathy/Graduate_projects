package com.example.restrainer.viewmodels

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.MutableLiveData
import com.example.restrainer.datamodels.AppInfo
import com.example.restrainer.datasources.AppsDataSource

class AppsViewModel(application: Application):AndroidViewModel(application){
    val appsList : MutableLiveData<List<AppInfo>> = MutableLiveData()

    init{
        loadApps()
    }
    private fun loadApps(){
        appsList.value = AppsDataSource.apps
    }

}