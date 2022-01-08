import React, { Component } from 'react'
import {Accordion, Card,Tab, Row, Nav, Col} from 'react-bootstrap'
import Dashboard from './dashboard'
import FeedEntry from './FeedEntry'
import Vaccine from './candling'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="dash">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="dash">Dashboard</Nav.Link>
        </Nav.Item>

          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Hatchery</Accordion.Header>

                  <Accordion.Body>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Eggs</Nav.Link>
                          </Nav.Item>  <Nav.Item>
                      <Nav.Link eventKey="vacci">Candling</Nav.Link>
                        </Nav.Item>  <Nav.Item>

                        <Nav.Link eventKey="second">Offload</Nav.Link>

                    </Nav.Item>
                  </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="1">
                <Accordion.Header>Poultry</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Item>
                      <Nav.Link eventKey="poultry1">Feed</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                      <Nav.Link eventKey="poultry2">Vaccination</Nav.Link>
                                </Nav.Item>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>

          
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
          <Tab.Pane eventKey="dash">
              <Dashboard/>
          </Tab.Pane>
        <Tab.Pane eventKey="first">
          {/* <Sonnet /> */}
          <FeedEntry/>
        </Tab.Pane>

        <Tab.Pane eventKey="vacci">
          {/* <Sonnet /> */}
          <Vaccine/>
        </Tab.Pane>

        <Tab.Pane eventKey="second">
          {/* <Sonnet /> */}
          <p>Data to be populated</p>
        </Tab.Pane>

        <Tab.Pane eventKey="poultry1">
              Infor for feed
          </Tab.Pane>

          <Tab.Pane eventKey="poultry2">
              Infor for Vaccination
          </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            </div>
        )
    }
}
