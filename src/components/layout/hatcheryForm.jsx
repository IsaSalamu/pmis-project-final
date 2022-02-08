
import React  from 'react'
import Api from './apiController'
import { Table, Modal, Button } from 'react-bootstrap'
export default class HatcheryForm extends React.Component{

   
        state = {
            formProgramStageDataElements:[],
            program: "",
            orgUnit:"",
            programStage:"",
            dataValues:[],
            setter_number:"",number_of_eggs_set_in_hatchery:""
        }
   

    componentDidMount(){
        this.getProgramStageDataElements()
        this.saveForm()

      
    }

    getProgramStageDataElements = ()=>{
        Api.getProgramStagesAndDataElements().then(programstages_DataElemets=>{
            console.log(programstages_DataElemets.programStages);
            this.setState({
                formProgramStageDataElements: programstages_DataElemets.programStages,
                program : programstages_DataElemets.id,
                orgUnit:programstages_DataElemets.organisationUnits[0].id,
                programStage : programstages_DataElemets.programStages[0].id
            })
        })
    }
    saveForm =()=>{
        let {setter_number, number_of_eggs_set_in_hatchery} = this.state
        let payload = [setter_number, number_of_eggs_set_in_hatchery]
        
    }
    

    saveDataElements =(event)=>{

                this.setState({
                    [event.target.name] : {"dataElement":event.target.id, "value":event.target.value}
                })
            
    }

    render(){
        let progrmStagesData = this.state.formProgramStageDataElements
        let forms =()=>{
           return progrmStagesData.map((pg, key)=>{
                if (pg.id==="BqPkDKSL8sS") {
                   return pg.programStageDataElements.map((de, key)=>{
                        return (
                        <div className="mb-3" key={key}>
                        
                            <input type={de.dataElement.valueType.toLowerCase()} className="form-control" name={de.dataElement.name.toLowerCase().split("h-")[1].replace(/\s/g,'_')} id={de.dataElement.id} aria-describedby={de.dataElement.name} placeholder={de.dataElement.name} onChange={this.saveDataElements} />
                            
                        </div>
                    )
                   })
               }
           })
        }
        
       
        return(
            <>
                <div className=''>
                
                    <form>
                        {
                            forms()
                        }
                
                        <Button variant="primary" onClick={this.handleSave}>
                            Save
                        </Button>
                        </form>
              
                </div>
           
            </>
        )
    }
}