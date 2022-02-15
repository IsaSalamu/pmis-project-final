import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegiserClient from './registerCliet'
import ListOfClients from './listOfClients'
export default class Navbar extends Component {
  render() {
    return (
      
      <div className='disp-nav'>
      
        <div>
        <nav className="navbar navbar-light fixed-top bg_color">
          <div className="container-fluid">
            <a className="navbar-brand" style={{ color: "whitesmoke" }}>Poultry Information Management System</a>

            <div className="d-flex">

                <span className="d-inline-block">
                  <span class="badge poststatus">Post Results</span>

                  <span className="btn bg_color position-relative" style={{ marginRight: "10px" }}>
                    <FaIcons.FaUserCircle color='white' />

                  </span>
                </span>
              

              <span className="btn bg_color position-relative" style={{ marginRight: "20px" }}>
                <FaIcons.FaEnvelope color='white' />

                <span style={{ marginTop: "5px" }} className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-info">
                  0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </span>

            </div>
          </div>
          <div className='row' style={{ width: "100%" }}>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
              <div className='d-flex p-2 justify-content-center'>
               
                <select class="form-select form-select-css p-1" aria-label="Hatchery">
                  <option value="1" className='fl'>Programs</option>
                  <option value="1" className='fl'>Hatchery Information</option>
                  <option value="2" className='fl'>Poultry Information</option>
                  <option value="3" className='fl'>Client Information</option>
                </select>

                <Link to="/clients-list">
                  <span className='btn btn-outline-light p-1'>Lists</span>
                </Link>
                <Link to="/register">
                  <span className='btn btn-outline-light p-1'>Register</span>
                </Link>
                <Link to="/dashboard">
                  <span className='btn btn-outline-light p-1'>Dashboad</span>
                </Link>

              </div>
            </div>
            <div className='col-sm-4'></div>

          </div>

        </nav>
        </div>
       
      </div>
    )
  }
}
