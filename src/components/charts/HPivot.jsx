import React, { useEffect } from 'react'
import Api from '../layout/apiController'

function HPivot() {
    const [pivotSeries, setPivotSeries] = useState([])
    useEffect(()=>{
        Api.getAnalyticsPivot().then(data=>{
            console.log(data.rows);
        })
    })
    return (
        <div>HPivot</div>
    )
}

export default HPivot