import React, { useEffect, useState } from 'react'
import Api from "./apiController"

export default function Recieve() {
    const [data, trackedentityInstanceData] = useState(null)
    const [stages, programStagesFunction] = useState([])
    const [formField, programStagesDataElementFields] = useState([])

    useEffect(() => {
        let tei = localStorage.getItem("teiId")
        let orgUId = localStorage.getItem("orgUitId")
        let pgId = localStorage.getItem("programId")

        Api.getTrackerEntityInstance(JSON.parse(tei), JSON.parse(pgId), JSON.parse(orgUId)).then(instance => {
            // console.log(instance.attributes);
            trackedentityInstanceData(instance.attributes)
        })
    }, [data])

    useEffect(() => {
        let progId = localStorage.getItem("programId")
        Api.getProgramStagesAndDataElementsAndProgram(JSON.parse(progId)).then(programs => {
            // console.log(programs.programStages);
            programStagesFunction(programs.programStages)
        })
    }, [stages])

    const displayForm = (e) => {
        stages.map((data) => {
            if (data.id === e.target.id) {
                programStagesDataElementFields(data.programStageDataElements)
                console.log(data.programStageDataElements);
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

                            return <div className="card mb-3 card-css text-center pointer" style={{ width: "16rem" }} onClick={displayForm}>
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

                    <input class="form-control" type="text" placeholder="DataElement displayName" aria-label="default input example" />
                    </div>
                    
                </div>
                <div className='col-sm-2'></div>
            </div>
        </div>
    )
}
