import React, { useState, useEffect } from 'react';
import Api from "../layout/apiController"
import Chart from 'react-apexcharts'
import ChartModule from './ChartModule';


function Hatcherycharts(props) {
    const [indicators, setIndicators] = useState([])
    const [visualisations, setVisualisations] = useState([])
    const [allVisualisations, setAllVisualisations] = useState([])
    const [allVisualisations2, setAllVisualisations2] = useState([])
    const [fullData, setFullData] = useState([])
    const [fullData2, setFullData2] = useState([])
    const [name, setName] = useState("")


    useEffect(() => {
        Api.getProgramIndicatorGroup().then(data => {

            setIndicators(
                ...indicators,
                data
            )

        })
    }, [indicators])

    useEffect(() => {
        Api.getVisualisations().then(data => {

            setVisualisations(
                data.visualizations
            )

        })
    }, [visualisations])

    const datafunction = () => {
        let holder = []
        let holder2 = []


        visualisations.map(visuals => {

            Api.getVisualisationById(visuals.id).then(visual => {
                if (visuals.displayName === visual.name) {
                    return visual.rows[0].dimension === "pe" || visual.columns[0].dimension === "dx" ? Api.getAnalyticsData(visual.rows[0].items[0].id, visual.columns[0].items[0].id, visual.filters[0].items[0].id).then(analyticsD => {

                        Object.values(analyticsD.metaData.items).map(chartName => {

                            if (chartName.name === visual.name) {

                                analyticsD.rows.map(data => {
                                    holder.push(data[2])
                                    holder2.push(data[1])
                                })
                            }
                        })

                        setAllVisualisations(holder)
                        setFullData(holder2)
                    }) : null;
                }
            })

        })

    }


    datafunction()
    return (
        <div>
            <ChartModule series={allVisualisations} category={fullData} />

        </div>
    );
}

export default Hatcherycharts;