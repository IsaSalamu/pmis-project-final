import React, { useState, useEffect } from 'react'
import Api from "../layout/apiController"
import  Chart  from 'react-apexcharts'
export default function Fertility() {
    const [eventsData, getEventsData] = useState([]) //hook
    let folder = []
    let categoryFolder = []

    const [analytics, getAppAnalytics] = useState([])
    const [categories, getAppAnalyticsCAtegories] = useState([])

    useEffect(() => {
        Api.getAnalytics().then(analyticsData => {

            analyticsData.rows.map(data => {
                folder.push(data[2])
            })           
        })
        getAppAnalytics(folder)

    },[analytics])
    useEffect(() => {
        Api.getAnalytics().then(analyticsData => {

            analyticsData.rows.map(data => {
                categoryFolder.push(data[1])
            })
        })
        getAppAnalyticsCAtegories(categoryFolder)
    },[categories])

    useEffect(() => {

        Api.getTheTrackedEIDataValues().then(data => {
            getEventsData(data.trackedEntityInstances)
            
        })

    }, [eventsData])

    // plot graph
    const series = [
        {
            name: "Temperature in Fahrenheit", //will be displayed on the y-axis
            data: analytics 
        }
    ];

    const options = {
        title:{
            text: "H_Damaged Eggs Rate",
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
            <Chart options={options} type="bar" series={series} width="100%" />
        </div>
    )
}
