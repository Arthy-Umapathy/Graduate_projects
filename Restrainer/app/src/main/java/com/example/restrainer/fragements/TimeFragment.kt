package com.example.restrainer.fragements

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.widget.Toolbar
import androidx.core.view.get
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.example.restrainer.R
import kotlinx.android.synthetic.main.time_fragment.*


class TimeFragment : Fragment() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        return inflater.inflate(R.layout.time_fragment, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val toolBar = view.findViewById<Toolbar>(R.id.topAppBarAppListFragment)

        toolBar.setNavigationOnClickListener {
            findNavController().navigate(R.id.action_timeFragment_to_appListFagment4)
        }
        val tpHourMin = view.findViewById(R.id.timePicker1) as TimePicker
        tpHourMin.setIs24HourView(true)

        val radioGroup = view.findViewById(R.id.radio_group) as RadioGroup
        radioGroup.setOnCheckedChangeListener { group, checkedId ->
            val radio: RadioButton = view.findViewById(checkedId)
            Toast.makeText(
                view.context, " Rule set for :" +
                        " ${radio.text}" ,
                Toast.LENGTH_LONG
            ).show()
        }
        val button = view.findViewById<Button>(R.id.settime)
        button.setOnClickListener {
            var id: Int = radio_group.checkedRadioButtonId
            if (id != -1) {
                val radio: RadioButton = view.findViewById(id)
                Toast.makeText(
                    view.context, "Rule selected for :" +
                            " ${radio.text}",
                    Toast.LENGTH_SHORT
                ).show()
            } else {
                Toast.makeText(
                    view.context,
                            " Nothing selected",
                    Toast.LENGTH_SHORT
                ).show()
            }

        }
    }
}
