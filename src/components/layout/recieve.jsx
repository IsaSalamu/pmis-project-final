import React, { useEffect, useState } from 'react'
import ReceivingStage from '../posts/ReceivingStage'
import Api from "./apiController"

export default function Recieve() {
    const [data, trackedentityInstanceData] = useState(null)
    const [allEvents, getAllTheEvents] = useState([])
    const [allEventsValueId, getAllTheIds] = useState("")
    const [stages, programStagesFunction] = useState([])
    const [eventId, setEventId] = useState("")
    const [formField, programStagesDataElementFields] = useState([])

    const [receivingId, setReceivingId] = useState({
        h_number_of_eggs_set_in_hatchery: ""
    })

    const [death, setDeaths] = useState({
        age_in_weeks: "",
        number_dead: ""
    })

    const [deseases, setDeseases] = useState({
        affected_birds: "",
        disease_condition: "",
        symptoms: ""
    })

    const [laying, setLaying] = useState({
        p_number_of_bird_not_laying: "",
        p_number_of_birds_laying: ""
    })

    const [phaseOut, setPhaseOut] = useState({
        number_of_phased_out_birds: ""
    })

    const [collectionStage, setCollectionStage] = useState({
        htc_total_cost_of_eggs: "",
        person_collecting_chicks: "",
        the_amount_paid_for_the_chicks: "",
        the_balance_a_customer_has_to_the_farm: "",

    })
    const [chickStage, setChickStage] = useState({
        number_of_chick_with_deformities: "",
        number_of_eggs_hatched: "",
        number_of_eggs_picked_but_not_hatched: "",
        number_of_health_chick: ""
    })
    const [formIdsCandling, setIdValueCandling] = useState({
        h_number_of_eggs_damaged: "",
        number_of_eggs_developed: "",
        number_of_eggs_loaded: "",
        number_of_eggs_missing: "",
        number_of_eggs_transferred_to_hatcher: "",
        number_of_eggs_undeveloped: ""
    })

    useEffect(() => {
        Api.getAllEvents().then(events => {
            getAllTheEvents(events.events)
        })
    }, [allEvents])

    useEffect(() => {
        allEvents.map(ev => {
            Api.getEventByStageProgram(ev.event).then(eventById => {
                let orgUId = localStorage.getItem("orgUitId")
                let pgId = localStorage.getItem("programId")
                let pgStage = localStorage.getItem("stg_id")
                // console.log(pgId +" prog "+eventById.program);
                if (eventById.program === JSON.parse(pgId) && eventById.orgUnit === JSON.parse(orgUId) && eventById.programStage === JSON.parse(pgStage) && eventById.trackedEntityInstance === JSON.parse(localStorage.getItem("teiId"))) {
                    // console.log("id found : ", eventById.event);
                    localStorage.setItem("evenId", JSON.stringify(eventById.event))
                    setEventId(eventById.event)

                } else {

                }
                // getAllTheEventsValues(eventById)
            })
        })
    })
    const [formIdsReceiving, setIdValueReceiving] = useState({
        // number_of_eggs_loaded:"",

    })

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

    }, [data])

    useEffect(() => {
        let pgId = localStorage.getItem("programId")

        Api.getProgramStagesAndDataElementsAndProgram(JSON.parse(pgId)).then(programs => {
            programStagesFunction(programs.programStages)
        })

    }, [stages])





    const displayForm = (e) => {
        // let setAllIds = {}
        stages.map((data) => {
            localStorage.setItem("stg_id", JSON.stringify(e.target.id))
            if (data.id === e.target.id) {

                programStagesDataElementFields(data.programStageDataElements)
                // data.programStageDataElements.map(getIds => {
                //     setAllIds[getIds.dataElement.name.replace(/-/g, "_").toLowerCase().replace(/ /g, "_")] = ""
                // })

            }
        })
        

    }

    const setContents = (event) => {

        setDeaths({
            ...death,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })
        setDeseases({
            ...deseases,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })
        setLaying({
            ...laying,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })

        setPhaseOut({
            ...phaseOut,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })

        getAllTheIds(
            event.target.id
        )
        setReceivingId({
            ...receivingId,
            [event.target.name]: event.target.value
        })

        setIdValueCandling({
            ...formIdsCandling,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })

        setChickStage({
            ...chickStage,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })

        setCollectionStage({
            ...collectionStage,
            [event.target.name]: {
                dataElement: event.target.id,
                value: event.target.value
            }
        })
    }

    const saveReceive = () => {

        if (receivingId.h_number_of_eggs_set_in_hatchery === "" || receivingId.h_number_of_eggs_set_in_hatchery === null || receivingId.h_number_of_eggs_set_in_hatchery === undefined) {

        } else {
            let stg_id = JSON.parse(localStorage.getItem("stg_id"))

            let payload = [{
                "dataElement": allEventsValueId,
                "value": receivingId.h_number_of_eggs_set_in_hatchery
            }]

            let events =
            {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": eventId,
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_id,
                "dataValues": payload,
                "storedBy": "admin"
            }

            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert("Imported failed...")

                }
            })

        }
    }

    const saveLaying = () => {

        if (laying.p_number_of_birds_laying === "" || laying.p_number_of_birds_laying === null || laying.p_number_of_birds_laying === undefined) {

        } else if (laying.p_number_of_bird_not_laying === "" || laying.p_number_of_bird_not_laying === null || laying.p_number_of_bird_not_laying === undefined) {

        }
        else {
            let stg_id = JSON.parse(localStorage.getItem("stg_id"))

            let payload = [laying.p_number_of_bird_not_laying, laying.p_number_of_birds_laying]

            let events =
            {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": eventId,
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_id,
                "dataValues": payload,
                "storedBy": "admin"
            }

            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert("Imported failed...")

                }
            })

        }
    }

    const saveCandling = () => {
        if (formIdsCandling.h_number_of_eggs_damaged === "" || formIdsCandling.h_number_of_eggs_damaged === null || formIdsCandling.h_number_of_eggs_damaged === undefined) {

        }
        else if (formIdsCandling.number_of_eggs_developed === "" || formIdsCandling.number_of_eggs_developed === null || formIdsCandling.number_of_eggs_developed === undefined) {

        } else if (formIdsCandling.number_of_eggs_loaded === "" || formIdsCandling.number_of_eggs_loaded === null || formIdsCandling.number_of_eggs_loaded === undefined) {

        } else if (formIdsCandling.number_of_eggs_missing === "" || formIdsCandling.number_of_eggs_missing === null || formIdsCandling.number_of_eggs_missing === undefined) {

        } else if (formIdsCandling.number_of_eggs_transferred_to_hatcher === "" || formIdsCandling.number_of_eggs_transferred_to_hatcher === null || formIdsCandling.number_of_eggs_transferred_to_hatcher === undefined) {

        } else if (formIdsCandling.number_of_eggs_undeveloped === "" || formIdsCandling.number_of_eggs_undeveloped === null || formIdsCandling.number_of_eggs_undeveloped === undefined) {

        }
        else {
            let stg_id = JSON.parse(localStorage.getItem("stg_id"))
            let payload = [formIdsCandling.h_number_of_eggs_damaged, formIdsCandling.number_of_eggs_developed, formIdsCandling.number_of_eggs_loaded, formIdsCandling.number_of_eggs_missing, formIdsCandling.number_of_eggs_transferred_to_hatcher, formIdsCandling.number_of_eggs_undeveloped]


            let events =
            {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": eventId,
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_id,
                "dataValues": payload,
                "storedBy": "admin"
            }

            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert(res.message)

                }
            })
        }
    }

    // getting today's date to be used as an enrollment and incident date
    const getTodaysDate = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
    }

    const saveChickStage = () => {
        if (chickStage.number_of_chick_with_deformities === "" || chickStage.number_of_chick_with_deformities === null || chickStage.number_of_chick_with_deformities === undefined) {

        }
        else if (chickStage.number_of_eggs_hatched === "" || chickStage.number_of_eggs_hatched === null || chickStage.number_of_eggs_hatched === undefined) {

        } else if (chickStage.number_of_eggs_picked_but_not_hatched === "" || chickStage.number_of_eggs_picked_but_not_hatched === null || chickStage.number_of_eggs_picked_but_not_hatched === undefined) {

        } else if (chickStage.number_of_eggs_picked_but_not_hatched === "" || chickStage.number_of_eggs_picked_but_not_hatched === null || chickStage.number_of_eggs_picked_but_not_hatched === undefined) {

        } else if (chickStage.number_of_health_chick === "" || chickStage.number_of_health_chick === null || chickStage.number_of_health_chick === undefined) {

        } else {
            let stg_id = JSON.parse(localStorage.getItem("stg_id"))
            let payload = [chickStage.number_of_chick_with_deformities, chickStage.number_of_eggs_hatched, chickStage.number_of_eggs_picked_but_not_hatched, chickStage.number_of_health_chick]


            let events =
            {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": eventId,
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_id,
                "dataValues": payload,
                "storedBy": "admin"
            }

            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert(res.message)

                }
            })
        }
    }

    const saveCollection = () => {
        if (collectionStage.htc_total_cost_of_eggs === "" || collectionStage.htc_total_cost_of_eggs === null || collectionStage.htc_total_cost_of_eggs === undefined) {

        } else if (collectionStage.person_collecting_chicks === "" || collectionStage.person_collecting_chicks === null || collectionStage.person_collecting_chicks === undefined) {

        } else if (collectionStage.the_amount_paid_for_the_chicks === "" || collectionStage.the_amount_paid_for_the_chicks === null || collectionStage.the_amount_paid_for_the_chicks === undefined) {

        } else if (collectionStage.the_balance_a_customer_has_to_the_farm === "" || collectionStage.the_balance_a_customer_has_to_the_farm === null || collectionStage.the_balance_a_customer_has_to_the_farm === undefined) {

        } else {

            let stg_i = JSON.parse(localStorage.getItem("stg_id"))

            let payload = [collectionStage.htc_total_cost_of_eggs, collectionStage.person_collecting_chicks, collectionStage.the_amount_paid_for_the_chicks, collectionStage.the_balance_a_customer_has_to_the_farm]
            
            let events = {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": JSON.parse(localStorage.getItem("evenId")),
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_i,
                "dataValues": payload,
                "storedBy": "admin"
            }
            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert(res.message)

                }
            })

        }
    }
    const saveDeaths = () => {
        if (death.age_in_weeks === "" || death.age_in_weeks === null || death.age_in_weeks === undefined) {

        } else if (death.number_dead === "" || death.number_dead === null || death.number_dead === undefined) {

        } else {

            let stg_i = JSON.parse(localStorage.getItem("stg_id"))

            let payload = [death.age_in_weeks, death.number_dead]
            
            let events = {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": JSON.parse(localStorage.getItem("evenId")),
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_i,
                "dataValues": payload,
                "storedBy": "admin"
            }
            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert(res.message)

                }
            })

        }
    }
    const savePhaseOut = () => {
        if (phaseOut.number_of_phased_out_birds === "" || phaseOut.number_of_phased_out_birds === null || phaseOut.number_of_phased_out_birds === undefined) {

        } else {

            let stg_i = JSON.parse(localStorage.getItem("stg_id"))

            let payload = [phaseOut.number_of_phased_out_birds]
            
            let events = {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": JSON.parse(localStorage.getItem("evenId")),
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_i,
                "dataValues": payload,
                "storedBy": "admin"
            }
            Api.postTrackerEntityDataElements(events).then(res => {

                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert(res.message)

                }
            })

        }
    }

    const saveDeaseses = () => {
        if (deseases.affected_birds === "" || deseases.affected_birds === null || deseases.affected_birds === undefined) {

        } else if (deseases.disease_condition === "" || deseases.disease_condition === null || deseases.disease_condition === undefined) {

        } else if (deseases.symptoms === "" || deseases.symptoms === null || deseases.symptoms === undefined) {

        } else {

            let stg_i = JSON.parse(localStorage.getItem("stg_id"))

            let payload = [deseases.affected_birds, deseases.disease_condition, deseases.symptoms]

            let events = {
                "program": JSON.parse(localStorage.getItem("programId")),
                "orgUnit": "wKFFg76w4Wf",
                "event": JSON.parse(localStorage.getItem("evenId")),
                "trackedEntityInstance": JSON.parse(localStorage.getItem("teiId")),
                "programStage": stg_i,
                "dataValues": payload,
                "storedBy": "admin"
            }
            Api.postTrackerEntityDataElements(events).then(res => {
                console.log(res);
                if (res.httpStatusCode === 200) {
                    alert(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 200)
                } else {
                    alert(res.message)

                }
            })

        }
    }

    const saveContents = (e) => {
        e.preventDefault()
        saveReceive()
        saveCollection()
        saveCandling()
        saveChickStage()
        saveLaying()
        saveDeaths()
        saveDeaseses()
        savePhaseOut()
    }

    return (
        <div>
            <div className='row m-2'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <div className='pg-css d-flex justify-content-between w-100'>
                        {stages.map((stage, key) => {

                            return <div key={key} id={stage.id} className="card m-2 p-1 card-css text-center pointer" style={{ width: "16rem" }} onClick={displayForm}>
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


                            formField.length > 0 ? formField.map((dataElement, key) => {

                                return <input key={key} name={dataElement.dataElement.name.replace(/-/g, "_").toLowerCase().replace(/ /g, "_")} id={dataElement.dataElement.id} className="form-control m-1" type={dataElement.dataElement.valueType} placeholder={dataElement.dataElement.name} aria-label="input" onChange={setContents} />
                            }) : null
                        }
                    </div>
                    {
                        formField.length > 0 ? <button className='btn btn-secondary form-control m-1 btn-css' onClick={saveContents}>Save</button> : ""
                    }

                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
    )
}
