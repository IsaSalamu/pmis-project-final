
import React  from 'react'
import Api from './apiController'
import { ThreeDots } from 'react-loader-spinner'


export default class ReceivingForm extends React.Component{

        state = {
            formDataElements:[],
            trackedEntityAttributes: [],
            programs: [],
            trackedEntityId: "",
            programOption:[],
            optiondisplayname: "",
            programId:"xWB78Xl4SV0",
            orgUnit: "",
            loading: true,
            // initialising all form fileds for trackedEntityAttributes
            client_name:"", client_phone_number:"", batch_number:"", poultry_specie:""
        }

    componentDidMount(){
        this.getTrackedEntityAttributesPrograms()
        this.getTrackedPrograms()
        this.getOptions()
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
    // send the payload(tracked entity instance and the enrollment) to the server
    submitForm =()=>{
        let {batch_number, client_name, client_phone_number, poultry_specie} = this.state
        
        let payload = [ batch_number,poultry_specie, client_name, client_phone_number]
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
            "enrollments": enroll
            }
            
        Api.postTrackerEntity(final_payload).then(res=>{
            if (res.httpStatusCode === 200 ) {
                <ThreeDots color="#00BFFF" height={80} width={80}/>
                alert(res.message+"\n"+res.response.importSummaries[0].importCount.imported +" payload has been uploaded!")
            }else{
                alert("Error occured!")
                console.log(res);
            }
        })
    
    }

    submitToRecieving =(event)=>{
        this.setState({
            [event.target.name] : {"attribute":event.target.id,"value":event.target.value}
        })
    }



    setProgramId = (event) =>{
        this.setState({programId : event.target.value })
    }

    render(){
        let tracked = this.state.trackedEntityAttributes
        let forms =()=>{
           return tracked.map((entity, key)=>{
              
                if (entity.valueType.toLowerCase()==="integer") {
                    return (
                        <div className="mb-3" key={key}>
                           
                            <input type="number" name={entity.displayShortName.toLowerCase().split(" ")[2]} className="form-control" 
                            id={entity.trackedEntityAttribute.id} aria-describedby={entity.displayName} placeholder={entity.displayName} 
                            onChange={this.submitToRecieving} required/>
                            
                        </div>
                    )
                }else
                 if(entity.trackedEntityAttribute.id === "ltJO9UJSMFQ"){
                    return (
                        <>
                    <select class="form-select" id={entity.trackedEntityAttribute.id} name={this.state.optiondisplayname.toLowerCase().split(" ")[0]+"_"+this.state.optiondisplayname.toLowerCase().split(" ")[1]} aria-label="Default select example" onChange={this.submitToRecieving}>
                    {
                       this.state.programOption.map((opt, key)=>{
                        return <option value={opt.name}>{opt.name}</option>
                       })
                    }
                        
                </select><br/></>)
                
                }
                if(entity.valueType.toLowerCase() === "phone_number"){
                    return (
                        <div className="mb-3" key={key}>
                           
                            
                            <input type="number" name={entity.displayShortName.toLowerCase().split(" ")[2]}  className="form-control" id={entity.trackedEntityAttribute.id} aria-describedby={entity.displayName}
                             placeholder={entity.displayName} onChange={this.submitToRecieving} required/>
                            
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
            <>
                <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                <select class="form-select" aria-label="Default select example" onChange={this.setProgramId}>
                    {
                        entityPrograms()
                    }
                        
                </select>
                </div>
                <div className='col-md-4'></div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                    <form>
                        {
                            forms()
                        }

                        {
                            loadingFunction()
                        }
                        </form>
                    </div>
                    <div className='col-md-3'></div>

                   
              
                </div>
           
            </>
        )
    }
}