import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Api from './apiController'
import Recieve from './recieve'

export default class ListOfClients extends Component {
    state = {
        tEI_Values:[],
    }
    componentDidMount(){
        this.getTEI()
    }
    getTEI=()=>{
        Api.getTheTrackedEI().then(tei=>{
            
            this.setState({tEI_Values : tei.rows})
        })
    }

    goToReceivingClass = (e)=>{

        let v = e.target.id
        localStorage.setItem("teiId", JSON.stringify(v))

        console.log(v);
        <Navigate to="/receive"/>
        
    }
  render() {
    return (
      <div className='m-4'>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className='row'>
                       <div className='col-md-2'></div>
                       <div className='col-md-8'>
                       <table class="table table-bordered table-hover custom-css">
                        <thead>
                            <tr>
                            <th scope="col" className='tb-css'>Batch Number</th>
                            <th scope="col" className='tb-css'>Egg Specie</th>
                            <th scope="col" className='tb-css'>Client Name</th>
                            <th scope="col" className='tb-css'>Phone Number</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                                {
                                    this.state.tEI_Values.map((d,j)=>{
                                        
                                        return (
                                        <tr key={j} onClick={this.goToReceivingClass}>
                                        { d.slice(-4).map((p,l)=>{
                                            return <td scope='row' key={l} id={this.state.tEI_Values[j][0].split(",")[0]}>
                                                {p}
                                            </td>
            
                                            })}
                                        </tr>
                                        )
                                    })
                                    
                                }
                            
                            
                        </tbody>
                        
                        </table>
                       </div>
                       <div className='col-md-2'></div>
                   
                   </div>
  
      </div>
    )
  }
}
