import React, { Component } from 'react'
import { Table, Modal, Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import Api from './apiController'
import CSVReader from 'react-csv-reader'
export default class Receiving extends Component {
  constructor(props) {
    super(props)
    this.state={
      show: false,
      data: [],
      formProgramStageDataElements:[],
      program: "",
      orgUnit:"",
      programStage:"",
      setter_number:"",number_of_eggs_set_in_hatchery:""
    }

  }
  componentDidMount(){
    this.getProgramStageDataElements()
    // this.handleSave()
  }

  handleShow = () =>{
    this.setState({show : true})
  }

  getTodaysDate =() =>{
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}

handleClose = () =>{
  this.setState({show : false})
}

handleSave = () =>{
  let {setter_number, number_of_eggs_set_in_hatchery} = this.state
  let payload = [number_of_eggs_set_in_hatchery, setter_number]
  let events = 
    {
      "program":"xWB78Xl4SV0",
      "orgUnit":"wKFFg76w4Wf",
      "eventDate": this.getTodaysDate(),
      "trackedEntityInstance": "RIQgKpS15my",
      "programStage": "BqPkDKSL8sS",
      "dataValues": payload
    }
    Api.postTrackerEntityDataElements(events).then(res=>{
      console.log(res);
    })
}
getProgramStageDataElements = ()=>{
  Api.getProgramStagesAndDataElements().then(programstages_DataElemets=>{
      // console.log(programstages_DataElemets.programStages);
      this.setState({
          formProgramStageDataElements: programstages_DataElemets.programStages,
          program : programstages_DataElemets.id,
          orgUnit:programstages_DataElemets.organisationUnits[0].id,
          programStage : programstages_DataElemets.programStages[0].id
      })
  })
}

saveDataElements =(event)=>{

          this.setState({
              [event.target.name] : {"dataElement":event.target.id, "value":event.target.value}
          })   
}
    render() {
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
        return (
            <div>
              <br/>
              <br/>
              <br/>
                <div className="row">
                    <div className="col-sm-12" style={{textAlign:"center"}}>
                    <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-2'>
                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{marginBottom:"10px"}}>
                <input type="button" className="btn-check" id="btncheck1" autocomplete="off"/>
                <label className="btn btn-outline-primary" for="btncheck1" onClick={this.handleShow}>
                    <FaIcons.FaPlus/> New
            
                </label>

                </div>
                </div>
                <div className='col-md-2'>
               
                <CSVReader onFileLoaded={(data)=> this.dataHndler(data.slice(1), data[0])}/>

                </div>
                <div className='col-md-4'></div>

             </div>
                   
              <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter" centered onHide={this.handleClose} backdropClassName='static'>
                <Modal.Header closeButton>
                  <Modal.Title>Hatchery Data Entry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 
                 {
                   forms()
                 }

                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleSave}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>

                    </div>

                </div>
                
            </div>
        )
    }
}
