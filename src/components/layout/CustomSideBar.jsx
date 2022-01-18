import React, { Component } from 'react'
import {Accordion, Card} from 'react-bootstrap'
export default class CustomSideBar extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    {/* <Accordion.Header>Dashboard</Accordion.Header> */}
    <Accordion.Header>
      Dashboard
    </Accordion.Header>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Incubator</Accordion.Header>
    <Accordion.Body>
   
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>Poultry</Accordion.Header>
    <Accordion.Body>
       laboris nisi ut aliquip ex ea
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
        )
    }
}
