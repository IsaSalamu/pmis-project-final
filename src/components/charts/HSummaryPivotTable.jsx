import React,{useEffect, useState} from 'react'
import Api from '../layout/apiController'
import  Chart  from 'react-apexcharts'

export default function HSummaryPivotTable() {
    const [eventsData, getEventsData] = useState([]) //hook
    let folder = []
    let categoryFolder = []

    const [analytics, getAppAnalytics] = useState([])
    const [categories, getAppAnalyticsCAtegories] = useState([])

    useEffect(() => {
        Api.getAnalyticsPivot().then(data=>{
            // console.log(data);
            data.rows.map(seriesData=>{
                folder.push(seriesData[2])
            })
        })
        getAppAnalytics(folder)
    },[analytics])

    useEffect(() => {
        Api.getAnalyticsPivot().then(analyticsData => {

            analyticsData.rows.map(data => {
                categoryFolder.push(data[1])
            })
        })
        getAppAnalyticsCAtegories(categoryFolder)
    },[categories])


    // plot graph
    const series = [
        {
            name: "Temperature in Fahrenheit", //will be displayed on the y-axis
            data: analytics
        }
    ];
    const options = {
        title:{
            text: "HSummary Data",
            align: "center"

        },
        chart: {
            id: "simple-bar"
        },
        xaxis: {
            categories: categories //will be displayed on the x-asis
        }
    };

  return (
    <div>
            <Chart options={options} type="bar" series={series} width="500px" />
        
    </div>
  )
}
