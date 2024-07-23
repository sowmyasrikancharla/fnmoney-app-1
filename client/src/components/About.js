import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'


export default class About extends Component {
  render() {
    return (
      <div className='about-con'>
        <Container fluid className="p-4">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className='landing-head'>About Us</h1>
              <p className='landing-desc'>FnMoney.ai is an online AI finance company that offers a comprehensive suite of financial services and software solutions to individuals and businesses. It specializes in providing tools and technologies to streamline various financial processes, including GST (Goods and Services Tax) management, TDS (Tax Deducted at Source) compliance, accounting software, payroll services, and income tax filing.

Website
https://fnmoney.ai</p>
<ul className='landing-desc'>
 <li className='list'>Website:https://fnmoney.ai </li> 
 <li  className='list'>Industry:Financial Services </li> 
 <li  className='list'>Company size: 11-50 employees</li> 
 <li  className='list'>Headquarters: Bengaluru, Karnataka</li> 
 <li  className='list'>Type: Privately Held </li> 
</ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
