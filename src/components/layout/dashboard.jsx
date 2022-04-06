import React, { Component } from 'react'
import FeedChart from '../charts/feedChart'
import Fertility from '../charts/Fertility'
import Hatcherycharts from '../charts/Hatcherycharts'
import HSummaryPivotTable from '../charts/HSummaryPivotTable'
// import MortalityChart from '../charts/MortalityChart'
import UpcomingEvents from '../charts/upcomingEvents'
import VaccinationChart from '../charts/vaccinationChart'
import WaterChart from '../charts/waterChart'
import UploadFile from './uploadFile'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='m-4'> 
            
                <div className="row">
                    <Hatcherycharts/>
                </div>
              <div className="row">
                  <div className='col-sm-1'></div>
                  <div className='col-sm-10'>
                  <div className="row">             
                    <div className="col-sm-12">
                        <div className="row">
                            <div className='row'>
                    <div className='col-md-4'>
                  
                    </div>
                    <div className='col-md-4'>
                    
                    </div>
                    <div className='col-md-4'>
                   
                    </div>

                </div>
                        </div>         
                    </div>                   
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-md-6'>
                    

                    </div>
                    <div className='col-md-6'>
                 
                    </div>
                </div>            
                  </div>
                  <div className='col-sm-1'></div>
                                </div>
            </div>
        )
    }
}
