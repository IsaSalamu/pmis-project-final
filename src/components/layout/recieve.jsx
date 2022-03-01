import React, { useEffect, useState } from 'react'
import Api from "./apiController"

export default function Recieve() {
    const [data, trackedentityInstanceData] = useState(null)
    const [stages, programStagesFunction] = useState([])
    const [formField, programStagesDataElementFields] = useState([])
    
    // getting program stages from dhis2 custom programs
    useEffect(() => {
        let tei = localStorage.getItem("teiId")
        let orgUId = localStorage.getItem("orgUitId")
        let pgId = localStorage.getItem("programId")

        Api.getTrackerEntityInstance(JSON.parse(tei), JSON.parse(pgId), JSON.parse(orgUId))
        .then(instance => {
            // console.log(instance.attributes);
            trackedentityInstanceData(instance.attributes)
        })

        Api.getProgramStagesAndDataElementsAndProgram(JSON.parse(pgId)).then(programs => {
            // console.log(programs.programStages);
            programStagesFunction(programs.programStages)
        })

    }, [data, stages])






    const displayForm = (e) => {
        stages.map((data) => {
            if (data.id === e.target.id) {
                // console.log(data);
                programStagesDataElementFields(data.programStageDataElements)
            }
        })
    }
    return (
        <div>
            <div className='row m-2'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <div className='pg-css d-flex justify-content-between w-100'>
                        {stages.map((stage, key) => {

                            return <div key={key} className="card m-2 p-1 card-css text-center pointer" style={{ width: "16rem" }} onClick={displayForm}>
                                <div className="card-body" id={stage.id}>
                                    {stage.name}
                                </div>
                            </div>

                        })}
                    </div>
                </div>
                <div className='col-sm-2'></div>
            </div>

            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    
                    <div className="mb-2">

                        {
                            
                            
                               formField.length > 0? formField.map((dataElement, key)=>{

                                    return <input key={key} id={dataElement.dataElement.id} className="form-control m-1" type={dataElement.dataElement.valueType} placeholder={dataElement.dataElement.name} aria-label="default input example" />
                                }):null
                        }
                    </div>
                    {
                    formField.length>0?<button className='btn btn-secondary form-control m-1 btn-css'>Save</button> : ""
                    }

                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
    )
}
