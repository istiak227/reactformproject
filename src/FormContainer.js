import React, { Component } from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          location: "",
          dietRestriction: {
            isHalal: false,
            noPork: false,
            isVegan: false
          }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? 
          this.setState(currentState => {
            return {
              dietRestriction: {
                ...currentState.dietRestriction,
                [name]: checked
              }
            }
          }
        )
        : this.setState({
          [name]: value
        })
      }
      handleSubmit() {
        alert(`Registered Successfully ${this.state.firstName} ${this.state.lastName} You are Going to ${this.state.location}`)
      }

    render() {
        return (
            <FormComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
        )
    }
}

export default FormContainer