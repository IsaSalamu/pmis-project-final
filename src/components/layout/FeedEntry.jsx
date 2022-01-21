import React, { Component } from 'react'
import { Table, Modal, Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import HatcheryForm from './hatcheryForm'
export default class FeedEntry extends Component {
  state={
    show: false
  }

  handleShow = () =>{
    this.setState({show : true})
  }

handleClose = () =>{
  this.setState({show : false})
}
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12" style={{textAlign:"center"}}>

                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{marginBottom:"10px"}}>
                <input type="button" className="btn-check" id="btncheck1" autocomplete="off"/>
                <label className="btn btn-outline-primary" for="btncheck1" onClick={this.handleShow}>
                    <FaIcons.FaPlus/> New
                    
                </label>

                
                </div>

              <Modal show={this.state.show} aria-labelledby="contained-modal-title-vcenter"
                centered onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hatchery Data Entry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 
                 <HatcheryForm/>

                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
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
