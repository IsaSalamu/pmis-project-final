import React, { Component } from 'react'
import CustomSideBar from './CustomSideBar'
import {Button, Card} from 'react-bootstrap'
import NewChart from './charts/chart1'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
              <div className="">
                <div className="row">
                    
                    <div className="col-sm-12">

                        <div className="row">
                        <Card style={{width:"16rem", marginRight:"10px"}}>
                    
                        <Card.Body>
                            <Card.Title>Motality</Card.Title>
                                <Card.Text>
                                <button type="button" className="btn btn-primary">
                                Dead <span className="badge bg-danger">24</span>
                                </button>
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>

                        <Card style={{width:"16rem", marginRight:"10px"}}>
                    
                        <Card.Body>
                            <Card.Title>Feed</Card.Title>
                            <Card.Text>
                                11kg left
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>


                        <Card style={{width:"16rem", marginRight:"10px"}}>
                    
                        <Card.Body>
                            <Card.Title>Egg Fertility</Card.Title>
                            <Card.Text>
                                75% 
                                pie chart aside
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>

                        <Card style={{width:"16rem"}}>
                    
                        <Card.Body>
                            <Card.Title>Vaccination</Card.Title>
                            <Card.Text>
                            To be changed
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                        </div>

                        <NewChart/>
                    
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}