import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFilter, faEye, faPrint } from '@fortawesome/free-solid-svg-icons'
import Calendar from './customs/Calender';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div style={{ width: '100%', backgroundColor: '#d9d9d9', height: '900px' }}>
          <div style={{ height: '60px', width: '100%' }}>
            <Row>
              <Col xs="7" style={{ paddingTop: '10px' }}>
                <Button style={{ backgroundColor: '#00B87C', marginRight: '15px', marginLeft: '35px' }}>Create Shift</Button>
                <Button style={{ backgroundColor: '#fff', color: '#00B87C' }}>Add Activity</Button>
              </Col>

              <Col xs="5" style={{ paddingTop: '15px' }}>
                <Row>
                  <Col xs="3" style={{ color: '#999999', }}>
                    <FontAwesomeIcon icon={faUsers} color='#999999' style={{ marginRight: '10px' }} />
                    Add Team
                  </Col>
                  <Col xs="3" style={{ color: '#999999' }}>
                    <FontAwesomeIcon icon={faFilter} color='#999999' style={{ marginRight: '10px' }} />
                    Filter
                  </Col>
                  <Col xs="3" style={{ color: '#999999' }}>
                    <FontAwesomeIcon icon={faEye} color='#999999' style={{ marginRight: '10px' }} />
                    View
                  </Col>
                  <Col xs="3" style={{ color: '#999999' }}>
                    <FontAwesomeIcon icon={faPrint} color='#999999' style={{ marginRight: '10px' }} />
                    Print
                  </Col>
                </Row>

              </Col>
            </Row>
          </div>
          <div style={{ width: '100%' }}>
            <Calendar />
          </div>
        </div>
      </>
    );
  }
}
