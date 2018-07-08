import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #ffffff;
    font-weight: 700;
    line-height: 50px;
    font-size: 40px;
    
    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`

class Main extends React.Component {
    render(){
        return (
                <Row>
                    <Col lg={5}>
                        <Repair>
                            Качественный ремонт
                            <span>iphone за 35 минут и гарантия 1 год</span>
                        </Repair>
                    </Col>
                    <Col lg={6} lgOffset={1}>

                    </Col>
                </Row>
        )
    }
}

export default Main;
