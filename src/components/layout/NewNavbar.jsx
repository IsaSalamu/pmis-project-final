import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LogoImage from "../images/pmis.png"
import Api from "./apiController"

export default function NewNavbar() {
  const [prog, getProgram] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    Api.getTheTrackedEntityPrograms().then(program => {
      getProgram(program.programs)

    })
  }, [prog])

  const saveProgramId = (e) => {
    localStorage.setItem("programId", JSON.stringify(e.target.value))
    navigate("/clients-list")
  }
  return (
    <div className='nav nav-css p-3 w-100'>
      <div className='w-100 d-flex nav2-css'>
        <img className='logo-css' src={LogoImage} style={{ marginLeft: "40px" }} width="70" />
        <span style={{ fontSize: "18px", color: "whitesmoke" }}>

        </span>
        <div className="d-flex">

          <span className="d-inline-block">
            <span className="badge poststatus">Post Results</span>

            <span className="btn bg_color position-relative" style={{ marginRight: "10px" }}>
              <FaIcons.FaUserCircle color='white' />

            </span>
          </span>


          <span className="btn bg_color position-relative" style={{ marginRight: "20px" }}>
            <FaIcons.FaEnvelope color='white' />

            <span style={{ marginTop: "5px" }} className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-info">
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

            <select className="form-select form-select-css p-1" aria-label="Hatchery" onChange={saveProgramId}>
              <option value="xWB78Xl4SV0" className='fl'>Programs</option>
              {
                prog.map((pg, key) => {

                  return <option key={key} value={pg.id} className='fl'>{pg.displayName}</option>
                })
              }

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
    </div>
  )
}
