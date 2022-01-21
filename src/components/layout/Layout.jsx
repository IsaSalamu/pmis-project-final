import React, { Component } from 'react'
import {Accordion,Tab, Row, Nav, Col} from 'react-bootstrap'
import Dashboard from './dashboard'
import FeedEntry from './FeedEntry'
import Vaccine from './candling'
import StockData from './StockData'
import FooterComponent from './footerComponent'


export default class Layout extends Component {
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="dash">
  <Row>
    <Col sm={3} className='col-bg-color height-css'>
      <Nav variant="pills" className="flex-column margin-css">
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

                                <Nav.Item>
                      <Nav.Link eventKey="poultry3">Batch information</Nav.Link>
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
          
          <FeedEntry/>
        </Tab.Pane>

        <Tab.Pane eventKey="vacci">
          <Vaccine/>
        </Tab.Pane>
         

        <Tab.Pane eventKey="poultry1">
              Infor for feed
          </Tab.Pane>

          <Tab.Pane eventKey="poultry2">
             
          </Tab.Pane>

          <Tab.Pane eventKey="poultry3">
              <StockData/>
          </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            <FooterComponent/>
            </div>
        )
    }
}
