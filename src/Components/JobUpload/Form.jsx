import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
 constructor(props) {
    super(props);
    this.state = {
      jobtitle: '',
      location: '',
      jobtype: '' ,
      jobsummary: '',
      responsibilities: '',
      requiredskills: ''
    };
 }

 handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
 }

 handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
        jobtitle: '',
        location: '',
        jobtype: '' ,
        jobsummary: '',
        responsibilities: '',
        requiredskills: '',
        submitMeassage: 'New Job Posted Successfully'
      });
 }

 render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <h1>Job Details</h1>
        <div className="Form-field">
          <label htmlFor="jobtitle">Job Title</label>
          <input type="text" name="jobtitle" id="jobtitle" value={this.state.jobtitle} onChange={this.handleChange} required />
        </div>
        <div className="Form-field">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={this.state.location} onChange={this.handleChange} required />
        </div>
        <div className="Form-field">
          <label htmlFor="jobtype">Job Type</label>
          <input type="text" name="jobtype" id="jobtype" value={this.state.jobtype} onChange={this.handleChange} required />
        </div>
        <div className="Form-field">
          <label htmlFor="jobsummary">Job Summary</label>
          <input type="text" name="jobsummary" id="jobsummary" value={this.state.jobsummary} onChange={this.handleChange} required />
        </div>
        <div className="Form-field">
          <label htmlFor="responsibilities">Responsibilities</label>
          <input type="text" name="responsibilities" id="responsibilities" value={this.state.responsibilities} onChange={this.handleChange} required />
        </div>
        <div className="Form-field">
          <label htmlFor="requiredskills">Required Skills</label>
          <input type="text" name="requiredskills" id="requiredskills" value={this.state.requiredskills} onChange={this.handleChange} required />
        </div>
        <button type="submit">Post Job</button>
      </form>
    );
 }
}

export default Form;