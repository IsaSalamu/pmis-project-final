import React, { Component } from 'react'
import { Table, Modal, Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import HatcheryForm from './hatcheryForm'
import CSVReader from 'react-csv-reader'
export default class FeedEntry extends Component {
  state={
    show: false,
    data: []
  }

  handleShow = () =>{
    this.setState({show : true})
  }

handleClose = () =>{
  this.setState({show : false})
}

handleSave = () =>{
  this.setState({data:[23, 45,11]})
}
    render() {
        return (
            <div>
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
                 
                 <HatcheryForm data={this.state.data}/>

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


                    <Table striped bordered hover size="sm">
  <thead className="table table-primary">
    <tr>
      <th>Edit</th>
      <th>Date of Entry</th>
      <th>Offloading Date</th>
      <th>Hatchery</th>
      <th>No. of Eggs</th>
      <th>Setter No.</th>
      <th>Owner</th>
      <th>Operator</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
          <FaIcons.FaEdit/>
      </td>
      <td>12/03/2021</td>
      <td>30/03/2021</td>
      <td>Long White</td>
      <td>60</td>
      <td>2</td>
      <td>Mr Sadulo</td>
      <td>Victor Khozi</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
        
      </td>
      <td>11/03/2021</td>
      <td>29/03/2021</td>
      <td>Model</td>
      <td>20</td>
      <td>1</td>

      <td>Edwin Gondwe</td>
      <td>Issa Salamu</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>17/03/2021</td>
      <td>05/04/2021</td>
      <td>Long Brown</td>
      <td>83</td>
      <td>2</td>
      <td>Mary JaFali</td>
      <td>Victor Khozi</td>
    </tr>

    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>12/03/2021</td>
      <td>30/03/2021</td>
      <td>Long White</td>
      <td>60</td>
      <td>2</td>

      <td>Mr Sadulo</td>
      <td>Victor Khozi</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>11/03/2021</td>
      <td>29/03/2021</td>
      <td>Model</td>
      <td>20</td>
      <td>1</td>
      
      <td>Edwin Gondwe</td>
      <td>Issa Salamu</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>17/03/2021</td>
      <td>05/04/2021</td>
      <td>Long Brown</td>
      <td>83</td>
      <td>3</td>

      <td>Mary JaFali</td>
      <td>Victor Khozi</td>
    </tr>

    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>12/03/2021</td>
      <td>30/03/2021</td>
      <td>Long White</td>
      <td>60</td>
      <td>3</td>

      <td>Mr Sadulo</td>
      <td>Victor Khozi</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>11/03/2021</td>
      <td>29/03/2021</td>
      <td>Model</td>
      <td>20</td>
      <td>1</td>

      <td>Edwin Gondwe</td>
      <td>Issa Salamu</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>17/03/2021</td>
      <td>05/04/2021</td>
      <td>Long Brown</td>
      <td>83</td>
      <td>1</td>

      <td>Mary JaFali</td>
      <td>Victor Khozi</td>
    </tr>

    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>12/03/2021</td>
      <td>30/03/2021</td>
      <td>Long White</td>
      <td>60</td>
      <td>2</td>

      <td>Mr Sadulo</td>
      <td>Victor Khozi</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>11/03/2021</td>
      <td>29/03/2021</td>
      <td>Model</td>
      <td>20</td>
      <td>3</td>

      <td>Edwin Gondwe</td>
      <td>Issa Salamu</td>
    </tr>
    <tr>
      <td>
      <FaIcons.FaEdit/>
          
      </td>
      <td>17/03/2021</td>
      <td>05/04/2021</td>
      <td>Long Brown</td>
      <td>83</td>
      <td>2</td>

      <td>Mary JaFali</td>
      <td>Victor Khozi</td>
    </tr>

    
  </tbody>
</Table>
                    </div>

                </div>
                
            </div>
        )
    }
}
