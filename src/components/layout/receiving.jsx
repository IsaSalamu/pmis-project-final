
import React  from 'react'
import Api from './apiController'
import { ThreeDots } from 'react-loader-spinner'


export default class ReceivingForm extends React.Component{

        state = {
            formDataElements:[],
            trackedEntityAttributes: [],
            dataValues:{},
            programs: [],
            programId:"xWB78Xl4SV0",
            loading: true
        }

    componentDidMount(){
        this.submitForm()
        this.getPrograms()
        this.getTrackedPrograms()
    }
    

    getPrograms = () =>{
        Api.getTheTrackedEntityAttributesPrograms(this.state.programId).then(data=>{
            let ff = ""
            this.setState({trackedEntityAttributes: data.programTrackedEntityAttributes,
                 loading: false})
            
        })
    }
    getTrackedPrograms = () =>{
        Api.getTheTrackedEntityPrograms().then(data=>{
            this.setState({programs : data.programs, loading : false})
        })
    }
    
    submitForm =(event)=>{
        
        console.log(this.state.dataValues);
    }

    submitToRecieving =(event)=>{
        this.setState({dataValues: event.target.value})
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
                           
                            
                            <input type="number" className="form-control" id={entity.trackedEntityAttribute.id} aria-describedby={entity.displayName} placeholder={entity.displayName} onChange={this.submitToRecieving}/>
                            
                        </div>
                    )
                }else if(entity.valueType.toLowerCase() === "phone_number"){
                    return (
                        <div className="mb-3" key={key}>
                           
                            
                            <input type="number" className="form-control" id={entity.trackedEntityAttribute.id} aria-describedby={entity.displayName}
                             placeholder={entity.displayName} onChange={this.submitToRecieving}/>
                            
                        </div>
                    )
                }else{
                    return (
                        <div className="mb-3" key={key}>
                            <input type={entity.valueType.toLowerCase()} className="form-control" id={entity.trackedEntityAttribute.id}
                             aria-describedby={entity.displayName} placeholder={entity.displayName} onChange={this.submitToRecieving}/>
                        </div>
                    )
                }
               
               
              
            })
        }
        let loadingFunction = ()=>{
            return (this.state.loading?<ThreeDots color="#00BFFF" height={80} width={80} /> :<div className='row'>
                <div className='col-md-6'>
                    <button type='button' className='form-control btn-info' style={{color:"whitesmoke"}}
                     onClick={this.submitForm}>Save and continue</button>
                </div>
                <div className='col-md-6'>
                    <button type='button' className='form-control btn-info' style={{color:"whitesmoke"}}>Save and add New</button>
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