import React from 'react';
import axios from 'axios';

// Custom stylesheet
import './App.css';

// Little Twilio logo
import badge from './images/twilio-badge-red.svg';

class App extends React.Component {

  state = {
    messageBody: null,
    recipientNumber: null,
    response: null,
    error: null
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({ 
      ...this.state,
      [name]: value
    })
  }

  onSubmit = () => {
    axios({
      url: '/sendSMS', 
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "messageBody": this.state.messageBody,
        "recipientNumber": this.state.recipientNumber
      }
    })
    .then(res => {
      const response = res.data

      if (response.error) {
        console.log("error detected!")
      }

      this.setState({
        ...this.state,
        response: JSON.stringify(response)
      })
    })
    .catch(error => {


    })
  }

  render() {
    return (
      <div className="App">
        <h1>Twilio SMS Example app</h1>
        <div className="row">
          <label>Message body: </label>
          <input type="text" name="messageBody" onChange={this.handleChange} value={this.state.value} placeholder="Message body here"/>
        </div>
        <div className="row">
          <label>Recipient (in <a href="https://www.twilio.com/docs/glossary/what-e164" target="_blank">E.164</a> Format): </label>
          <input type="text" name="recipientNumber" onChange={this.handleChange} value={this.state.value} placeholder="+11234568900"/>
        </div>
        <div className="row">
          <button onClick={this.onSubmit}>Send SMS</button>
        </div>
        <img className="badge" src={badge} alt="badge"/>
        { this.state.response ? (
          <div className="row">
            <p>Response: {this.state.response}</p>
          </div> 
        ) : ( 
          <p>No response yet! Send a message</p>
        )}
      </div>
    );
  }
}

export default App;
