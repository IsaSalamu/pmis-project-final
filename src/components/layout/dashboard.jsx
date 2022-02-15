import React, { Component } from 'react'
import FeedChart from '../charts/feedChart'
import MortalityChart from '../charts/MortalityChart'
import UpcomingEvents from '../charts/upcomingEvents'
import VaccinationChart from '../charts/vaccinationChart'
import WaterChart from '../charts/waterChart'
import UploadFile from './uploadFile'


export default class Dashboard extends Component {
    render() {
        return (
            <div className='m-4'>
                
              <div className="row">
                  <div className='col-sm-1'></div>
                  <div className='col-sm-10'>
                  <div className="row">
                    
                    <div className="col-sm-12">

                        <div className="row">
                            <div className='row'>
                    <div className='col-md-4'>
                    <MortalityChart/>


                    </div>
                    <div className='col-md-4'>
                     <WaterChart/>
                    </div>

                    <div className='col-md-4'>
                     <UpcomingEvents/>


                    </div>

                </div>
                        </div>

                        
                    
                    </div>
                    
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-md-6'>
                    <FeedChart/>

                    </div>
                    <div className='col-md-6'>
                    <VaccinationChart/>

                    </div>

                </div>
                
                  </div>
                  <div className='col-sm-1'></div>

                                </div>
            </div>
        )
    }
}
