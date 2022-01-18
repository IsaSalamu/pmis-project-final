import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'
import { Table } from 'react-bootstrap'
// import * as FaIcons from 'react-icons/fa'
export default class ReadFileComp extends Component {
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
              
                <CSVReader onFileLoaded={(data)=> this.dataHndler(data.slice(1), data[0])}/>

               
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
