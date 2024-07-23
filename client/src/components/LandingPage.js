import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default class LandingPage extends Component {
    render() {
        return (
            <div className='landing-bg-con'>
               <h1 className='landing-head'>Welcome !! Interns and Aspirantss!!</h1>
               <p className='landing-desc'>View the available assessments to achieve the internship..</p>
              <Link to="/assessments"><button className='assessments-button'> Assessmemt Tasks</button></Link> 
            </div>
        )
    }
}
