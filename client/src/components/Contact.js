import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'


export default class Contact extends Component {
  render() {
    return (
      <div className='contact-con'>
        <h1 className='landing-head'></h1>
        <Container fluid className="p-4">
            <h1 className='landing-head'>Contact US</h1>
                  <p className='landing-desc'>LinedIn:www.linkedIn.com</p>
                  <p className='landing-desc'>Phone Number:9999999999</p>
                  <p className='landing-desc'>Gmail:usergmail.com</p>
        </Container>
      </div>
    )
  }
}
