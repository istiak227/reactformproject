import React, { Component} from 'react'

class AppExample extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      LastName: "",
      isFriendly: false,
      gender: "",
      favColor: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  handleSubmit() {

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Normal Input Fields */}
        <input 
          onChange={this.handleChange} 
          type="text" 
          placeholder="first Name" 
          name = "firstName"
          value = {this.state.firstName}
        /><br />
        <input 
          onChange={this.handleChange} 
          type="text" 
          placeholder="Last Name" 
          name = "LastName"
          value = {this.state.LastName}
        /><br />

        {/* text area fields */}
        <textarea value="Some Default Value" onChange={this.handleChange} /> <br />

        {/* Checkbox fields */}
        <label>
          <input 
            onChange={this.handleChange}
            name="isFriendly"
            checked={this.state.isFriendly}
            type="checkbox"
          /> is Friendly?
        </label> <br />

        {/* Radio fields */}
        <label>
          <input 
            onChange={this.handleChange}
            name="gender"
            checked={this.state.gender === "male"}
            type="radio"
            value = "male"
          /> Male
        </label><br />
        <label>
          <input 
            onChange={this.handleChange}
            name="gender"
            checked={this.state.gender === "female"}
            type="radio"
            value = "female"
          /> Female
        </label> <br />

        {/* Select fields */}
        <label>Favourite Color: </label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name= "favColor"
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
        </select>

        <h1>{this.state.firstName} {this.state.LastName} </h1>
        <h2> You are a {this.state.gender}</h2>
        <h2> You Favourite Color is  {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )
  }
}

export default AppExample;
