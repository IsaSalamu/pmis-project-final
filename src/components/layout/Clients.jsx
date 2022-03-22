import React, { useEffect, useState } from 'react'
import Api from './apiController'
import { useNavigate } from "react-router-dom"
export default function Clients() {
    const [tei, teiFunction] = useState([])
    const [teiHeaders, teiHeadersFunction] = useState([])
    const navigate = useNavigate()

    let ppId = localStorage.getItem("programId")

    useEffect(() => {
        Api.getTheTrackedEI(JSON.parse(ppId)).then(t => {
            teiFunction(t.rows)
            
        })
    }, [tei])

    useEffect(() => {
        Api.getTheTrackedEI(JSON.parse(ppId)).then(t => {
            
            teiHeadersFunction(t.headers)
        })
    }, [teiHeaders])

    const goToReceivingClass = (e) => {
        e.preventDefault()
        let v = e.target.id
        localStorage.setItem("teiId", JSON.stringify(v))
        localStorage.setItem("orgUitId", JSON.stringify(tei[0][3]))
        navigate("/receive")
    }
    return (
        <div className='m-4'>

            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <table className="table table-striped  table-hover custom-css">
                        <thead>
                        <tr>
                            {
                                // console.log(teiHeaders.slice(-4)),
                                teiHeaders.length > 0 ? teiHeaders.slice(-4).map((dh, p) => {
                                   
                                    return <th scope='col' className='tb-css' key={p}>
                                        {dh.column}
                                    </th>
                                
                                }) : null

                            }
                                        </tr>
                           
                        </thead>

                        <tbody>

                            {
                                tei.length > 0 ? tei.map((d, j) => {

                                    return (
                                        <tr key={j} onClick={goToReceivingClass}>
                                            {d.slice(-4).map((p, l) => {
                                                return <td scope='row' key={l} id={tei[j][0].split(",")[0]}>
                                                    {p}
                                                </td>

                                            })}
                                        </tr>
                                    )
                                }) : null

                            }


                        </tbody>

                    </table>
                </div>
                <div className='col-md-2'></div>

            </div>

        </div>
    )
}
