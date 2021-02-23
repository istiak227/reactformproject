import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit() {
    alert(`Registered Successfully ${this.state.firstName} ${this.state.lastName} You are Going to ${this.state.location}`)
  }
  render() {
    const { firstName, lastName, age, gender, location } = this.state
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="First Name" name="firstName" value={firstName} /><br />
          <input onChange={this.handleChange} placeholder="Last Name" name="lastName" value={lastName} /><br />
          <input onChange={this.handleChange} placeholder="Age" name="age" value={age} /><br />
          <label>
            <input onChange={this.handleChange} type="radio" name="gender" value="male" checked={gender==="male"} /> Male
          </label>
          <label>
            <input onChange={this.handleChange} type="radio" name="gender" value="female" checked={gender==="female"} /> Female
          </label><br/>
          <label>
            Select Your Location: 
            <select name="location" onChange={this.handleChange} value={location}>
              <option value="Malaysia">Malaysia</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
            </select>
          </label><br />
          <button>Submit</button>
        </form>
        <hr/>
        <h1>Entered Information:</h1>
        <h2>Your Name: {firstName} {lastName}</h2>
        <h2>Your Age: {age}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Place You Want to Visit: {location}</h2>
      </main>
    )
  }
}

export default App;
