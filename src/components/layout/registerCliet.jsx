
import React  from 'react'
import Api from './apiController'
import { ThreeDots } from 'react-loader-spinner'
import $ from "jquery"


export default class RegiserClient extends React.Component{

        state = {
            program_stages : [],
            formDataElements:[],
            trackedEntityAttributes: [],
            programs: [],
            trackedEntityId: "",
            programOption:[],
            optiondisplayname: "",
            incubatorOptionDisplayname:"",
            programId:"xWB78Xl4SV0",
            orgUnit: "",
            incubatoroptions:[],
            loading: true,
         

            // initialising all form fileds for trackedEntityAttributes
            client_name:"", client_phone_number:"", incubator_numbers:"", poultry_specie:""
        }

    
    componentDidMount(){
        this.getTrackedEntityAttributesPrograms()
        this.getTrackedPrograms()
        this.getOptions()
        this.getIncubatorOptions()
        this.programStageFunction()
      
    
    }
    
// requesting all tracked entities under the current/selected program tracker
    getTrackedEntityAttributesPrograms = () =>{
        Api.getTheTrackedEntityAttributesPrograms(this.state.programId).then(data=>{
            
            this.setState({trackedEntityAttributes: data.programTrackedEntityAttributes, trackedEntityId: data.trackedEntityType.id, orgUnit : data.organisationUnits.id,
                 loading: false})
            
        })
    }

    // getting options from option-set so that we display type of birds
    getOptions = () =>{
        Api.getOptionSets().then(option =>{
            
            this.setState({programOption : option.options, optiondisplayname : option.displayName})
        })
    }
    getIncubatorOptions =()=>{
        Api.getOptionSetsIncubators().then(incubatorOption=>{
            // console.log(incubatorOption.options);
            this.setState({incubatoroptions: incubatorOption.options, incubatorOptionDisplayname : incubatorOption.displayName})
        })
    }
// getting all tracker programms to be assigned in the options menu
    getTrackedPrograms = () =>{
        Api.getTheTrackedEntityPrograms().then(data=>{
            this.setState({programs : data.programs, loading : false})
        })
    }

    // getting today's date to be used as an enrollment and incident date
    getTodaysDate =() =>{
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date;
    }


    programStageFunction(){
        let stages = []
        let pStages = []
        Api.getTheTrackedEntityAttributesPrograms().then(programStages =>{
            stages = programStages.programStages
        })

        stages.map(stage =>{
           return pStages.push({
                "program":"xWB78Xl4SV0",
                "orgUnit":"wKFFg76w4Wf",
                "eventDate":this.getTodaysDate(),
                "programStage":stage.id,
            })
        })
       return this.setState({program_stages: pStages})
        

    }
    // send the payload(tracked entity instance and the enrollment) to the server
    submitForm =()=>{
        
        console.log(this.state.program_stages);
        let {incubator_numbers, client_name, client_phone_number, poultry_specie} = this.state
        
        let payload = [ incubator_numbers,poultry_specie, client_name, client_phone_number]
        let enroll = [{
                "orgUnit":"wKFFg76w4Wf",
                "program":"xWB78Xl4SV0",
                "enrollmentDate":this.getTodaysDate(),
                "incidentDate": this.getTodaysDate()
                }]

           let final_payload = {
            "trackedEntityType": this.state.trackedEntityId,
            "orgUnit": "wKFFg76w4Wf",
            "attributes": payload,
            "enrollments": enroll,
            // "events": this.state.program_stages
            }
// calling the fuction from api controller which returns the promise, then this function get the json data from the promise
        Api.postTrackerEntity(final_payload).then(res=>{
            if (res.httpStatusCode === 200 ) {
                
                alert(res.message+"\n"+res.response.importSummaries[0].importCount.imported +" payload has been uploaded!")
            }else{
                alert("Error occured!")
                console.log(res);
            }
        })
    
    }
// setting attributes values and ids from the form inputs
// this is an onchange function which detect the value change from the field and keep it for post 
    submitToRecieving =(event)=>{
        this.setState({
            [event.target.name] : {"attribute":event.target.id, "value":event.target.value}
        })
    }
// a function that is gettting id from the hatchery program
    setProgramId = (event) =>{
        this.setState({programId : event.target.value })
    }

    
   

    render(){
        let tracked = this.state.trackedEntityAttributes
        let forms =()=>{
           return tracked.map((entity, key)=>{
              
                if (entity.trackedEntityAttribute.id === "n6tzsG2QpJY") {
                    return (
                        <>

                                <div className='row'>
                                <div className='col-md-4' style={{textAlign:"left"}}>
                                <label for="incubator" >Incubator Number</label>
                                </div>
                                <div className='col-md-8'>
                        <select class="form-select" id={entity.trackedEntityAttribute.id} name={this.state.incubatorOptionDisplayname.toLowerCase().split(" ")[0]+"_"+this.state.incubatorOptionDisplayname.toLowerCase().split(" ")[1]} aria-label="Batch number" onChange={this.submitToRecieving}>
                        <option>0</option>
                        
                        {
                           this.state.incubatoroptions.map((optio, key)=>{
                            return <option value={optio.name}>

                                        {optio.name}
                            
                                    </option>
                           })
                        }
                            
                    </select>
                    </div></div>
                    <br/>
                    </>
                                )
                            }else
                            if(entity.trackedEntityAttribute.id === "ltJO9UJSMFQ"){
                                return (
                                    <>

                                <div className='row'>
                                <div className='col-md-4' style={{textAlign:"left"}}>
                                <label for="incubator" >Poultry Specie</label>
                                </div>
                                <div className='col-md-8'>
                    <select class="form-select" id={entity.trackedEntityAttribute.id} name={this.state.optiondisplayname.toLowerCase().split(" ")[0]+"_"+this.state.optiondisplayname.toLowerCase().split(" ")[1]} aria-label="Default select example" onChange={this.submitToRecieving}>
                        <option>Specie</option>
                    {
                       this.state.programOption.map((opt, key)=>{
                        return <option 
                                value={opt.name}>{opt.name}
                        
                        </option>
                       })
                    }
                        
                </select>
                </div></div>
                <br/>
                </>)
                
                }
                if(entity.valueType.toLowerCase() === "phone_number"){
                    return (
                        <div className="mb-3" key={key}>  
                            
                                <input type="number" name={entity.displayShortName.toLowerCase().split(" ")[2]}  className="form-control" id={entity.trackedEntityAttribute.id} aria-describedby={entity.displayName}
                             placeholder={entity.displayName} onChange={this.submitToRecieving} min={0}/>
                            
                            
                            
                        </div>
                    )
                }else{
                    return (
                        <div className="mb-3" key={key}>
                            <input type={entity.valueType.toLowerCase()} name={entity.displayShortName.toLowerCase().split(" ")[2]} className="form-control" id={entity.trackedEntityAttribute.id}
                             aria-describedby={entity.displayName} placeholder={entity.displayName} onChange={this.submitToRecieving} required/>
                        </div>
                    )
                } 
            })
        }
        let loadingFunction = ()=>{
            return (this.state.loading?<ThreeDots color="#00BFFF" height={80} width={80} /> :<div className='row'>
                <div className='col-md-6'>
                    <button type='button' className='form-control btn-info' style={{color:"whitesmoke"}}
                     >Save and continue</button>
                </div>
                <div className='col-md-6'>
                    <button type='button' className='form-control btn-info' style={{color:"whitesmoke"}} onClick={this.submitForm}>Save and add New</button>
                </div>

        </div>     )
        }
        let entityPrograms = ()=>{
            return(this.state.loading?<option>Tracker Programs</option>: this.state.programs.map((program, key)=>{
                return <option value={program.id}>{program.displayName}</option>
                
                }))
        }
        
        return(
            <div className='m-4'>
               
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8' style={{textAlign:"center"}}>
                    <div class="border">
                    <form id='form_id'>
                        {
                            forms()
                        }
 
                        {
                            loadingFunction()
                        }
                        </form>
                    </div>
                    
                    </div>
                    <div className='col-md-2'></div>
                   
                   </div>
            </div>
        )
    }
}