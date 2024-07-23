import React, { Component } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Assessment from './Assessment';

const AssessmentsList=[
  {
    id:1,
    name:'CODING CHALLENGE',
    description:'Solve the given basic codes to crack the challenge',
  },
  {
    id:2,
    name:'CODING CHALLENGE',
    description:'Solve the given advanced codes to crack the challenge',
  },
  {
    id:3,
    name:'PROJECT SUBMISSION',
    description:'Go through the projct details and submit the project',
  },
  {
    id:4,
    name:'PROJECT QUIZ',
    description:'An exiting quiz that lets you crack the challenge',
  },
  {
    id:5,
    name:'LODE ASSISSMENT',
    description:'Follow the assissment requirements and crack the challenge',
  },
  {
    id:6,
    name:'LIVE ASSISSMENT',
    description:'Crack the live assissment to get the internship',
  },
  {
    id:7,
    name:'PORTOOLO ASSISSMENT',
    description:'Follow the assissment requirements and crack the challenge',
  },
]
export default class AssesmentTasks extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div> 

            {!isAuthenticated ? (
              <div className="login-con">
                   <p className='landing-head'>If you already have an account ...login to view ASSESSMENTS else register...</p>
    
              <div className='login-register-con'>
                <Button as={Link} to="/login" className='button1'>
                  Login
                </Button>
                <Button as={Link} to="/register" className='button2'>
                  Register
                </Button>
              </div>
              </div>
            ) : (
    
        <div className='bg-con'>       
        <h1 className='landing-head'>Assessments</h1>
        <ul className='assessments-con'>{
          AssessmentsList.map((eachAssessment)=>(
           <Assessment  assessmentDetails={eachAssessment} key={eachAssessment.id}/>
          ))
          }</ul>
      </div>)
  }
      </div>
    )
}
}
