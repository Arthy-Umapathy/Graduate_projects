package com.example.restrainer.datasources

import com.example.restrainer.datamodels.AppInfo

object AppsDataSource{
    val apps = ArrayList<AppInfo>();

    init{
        initializeApps();
    }

    private fun initializeApps(){
        var app = AppInfo("App 1", "I am app 1.")
        apps.add(app)
        app = AppInfo("App 2","I am app 2.")
        apps.add(app)
        app = AppInfo("App 3","I am app 3.")
        apps.add(app)
        app = AppInfo("App 4","I am app 4.")
        apps.add(app)
    }
}