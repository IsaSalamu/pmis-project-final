import React, { useState, useEffect } from 'react'
import APi from "../layout/apiController"
export default function Fertility() {
    const [eventsData, getEventsData] = useState([])
    const [dataGraphDenominator, graphingDenominatorFu] = useState([])
    const [dataGraphNumerator, graphingNumeratorFu] = useState([])
    useEffect(() => {

        APi.getTheTrackedEIDataValues().then(data => {
            getEventsData(data.enrollments)
            // console.log(data.enrollments);
        })

    }, [eventsData])

    useEffect(()=>{

        eventsData.map(j => {
            console.log(j);

            if (j.programStage === "ibJHnzCach8") {
    
                graphingDenominatorFu(j)
    
            }
            // console.log(dataGraphDenominator);
        })
    },[dataGraphDenominator])

    // console.log(dataGraphDenominator);
    return (
        <div>

            Fertility
            {
                // dataGraphDenominator.map((f, l)=>{
                //     return <p>{f.value}</p>
                // })
            }
        </div>
    )
}
