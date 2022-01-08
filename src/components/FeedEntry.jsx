import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
export default class FeedEntry extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12" style={{textAlign:"center"}}>

                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{marginBottom:"10px"}}>
                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btncheck1">
                    <FaIcons.FaPlus/> New
                </label>

                
                </div>


                    <Table striped bordered hover size="sm">
  <thead className="table table-primary">
    <tr>
      <th>Modify</th>
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
