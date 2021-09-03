import React from 'react'
import { Row, Col, } from 'reactstrap';
import './calendar.module.css'
import download from '../../assets/user.png'




function Colunms({ children, color, height, divider }) {
    return (
        <>
            <div style={{ height: divider, width: '1px', backgroundColor: '#7D7D7D', display: 'flex', alignSelf: 'center' }}></div>
            <Col style={{
                height: height,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: color,
            }}>
                {children}
            </Col>
        </>
    )
}
function CalenderTop() {
    return (
        <div style={{ height: '60px', width: '100%', backgroundColor: '#fff', marginBottom: '10px' }}>
            <Row>
                <Col xs="2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h5 style={{ color: 'black' }}>September</h5>
                </Col>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5 style={{ color: '#00B87C' }}>1</h5>
                    <h6 style={{ color: '#00B87C' }}>Monday</h6>
                </Colunms>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5>2</h5>
                    <h6>Tuesday</h6>
                </Colunms>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5>3</h5>
                    <h6>Wednesday</h6>
                </Colunms>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5>4</h5>
                    <h6>Thursday</h6>
                </Colunms>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5>5</h5>
                    <h6>Friday</h6>
                </Colunms>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5>6</h5>
                    <h6>Saturday</h6>
                </Colunms>
                <Colunms height={'60px'} divider={'40px'}>
                    <h5>7</h5>
                    <h6>Friday</h6>
                </Colunms>



            </Row>
        </div>
    )
}
function CalenderBody() {
    return (
        <div style={{ height: '70px', width: '100%', backgroundColor: '#fff', borderBottom: '1px solid #7D7D7D' }}>
            <Row>
                <Col xs="2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#d9d9d9' }}>
                    <img src={download} alt="Girl" style={{ height: '40px', width: '40px', borderRadius: '20px', marginRight: '10px', }} />
                    <h6>Toyyibahh</h6>

                </Col>
                <Colunms height={'70px'} color={'#ff9970'} divider={'70px'}>
                    <h6>Make a schedule have color</h6>
                </Colunms>
                <Colunms height={'70px'} divider={'70px'}>

                </Colunms>
                <Colunms height={'70px'} divider={'70px'}>

                </Colunms>
                <Colunms height={'70px'} color={'#ffff80'} divider={'70px'}>
                    <h6>Colors are working</h6>
                </Colunms>
                <Colunms height={'70px'} divider={'70px'}>

                </Colunms>
                <Colunms height={'70px'} divider={'70px'}>

                </Colunms>
                <Colunms height={'70px'} divider={'70px'}>
                </Colunms>
            </Row>
        </div>
    )
}

export default function Calender() {
    return (
        <div>
            <CalenderTop />
            <CalenderBody />
            <CalenderBody />
        </div>
    )
}
