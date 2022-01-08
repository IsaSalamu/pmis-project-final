import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'
export default class Navbar extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-light bg-primary">
                  <div className="container-fluid">
                    <a className="navbar-brand" style={{color:"whitesmoke"}}>Poultry Management Information System</a>

                    <div className="d-flex">
                          <OverlayTrigger placement="left-start" overlay={<Tooltip id="tooltip-disabled" >Admin</Tooltip>}>
                            <span className="d-inline-block">
                              <span  className="btn btn-primary position-relative" style={{marginRight:"10px"}}>
                                <FaIcons.FaUserCircle/>

                              </span>
                            </span>
                          </OverlayTrigger>
                        
                        <span  className="btn btn-primary position-relative" style={{marginRight:"20px"}}>
                            <FaIcons.FaEnvelope/>

                            <span style={{marginTop:"10px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                              0
                              <span className="visually-hidden">unread messages</span>
                            </span>
                      </span>
                          {/* <FaIcons.FaBars/> */}
                      
                    </div>
                  </div>
              </nav>
            </div>
        )
    }
}
