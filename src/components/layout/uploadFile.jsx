import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'
import { Table } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
export default class UploadFile extends Component {
    state={
        batchInfo:[],
        batchHeaders:[],
    
    }

    dataHndler = (list, listb)=>{
        this.setState({
            batchHeaders: listb,
            batchInfo: list
        })
    }

    render() {
        let batchInfo = this.state.batchInfo
        let batchHeaders = this.state.batchHeaders
        
        return (
            <div>
             
             <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-2'>
                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{marginBottom:"10px"}}>
                <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
                <label className="btn btn-outline-primary" for="btncheck1">
                    <FaIcons.FaPlus/> New
                </label>

                
                </div>
                </div>
                <div className='col-md-2'>
               
                <CSVReader onFileLoaded={(data)=> this.dataHndler(data.slice(1), data[0])}/>

                </div>
                <div className='col-md-4'></div>

             </div>
                <br/>
                <div>
                <Table striped bordered hover size="sm">
  <thead className="table table-primary">
    <tr>
        {
           batchHeaders.map((data, key)=>{
               return <th>{data}</th>
               
           })
        }
      
    </tr>
  </thead>
  <tbody>
        {
            batchInfo.map((posi, index)=>{
                return (<tr>
                    {
                        posi.map((data, key)=>{
                            return <td>{data}</td>
                        })
                    }
                </tr>)
            })
        }
  </tbody>
</Table>
                </div>
                
            </div>
        )
    }
}
