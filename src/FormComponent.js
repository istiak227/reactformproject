import React from 'react'

const FormComponent = (props) => {
    const { firstName, lastName, age, gender, location, dietRestriction } = props.data
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} placeholder="First Name" name="firstName" value={firstName} /><br />
                <input onChange={props.handleChange} placeholder="Last Name" name="lastName" value={lastName} /><br />
                <input onChange={props.handleChange} placeholder="Age" name="age" value={age} /><br />
                <label>
                    <input onChange={props.handleChange} type="radio" name="gender" value="male" checked={gender==="male"} /> Male
                </label>
                <label>
                    <input onChange={props.handleChange} type="radio" name="gender" value="female" checked={gender==="female"} /> Female
                </label><br/>
                <label>
                    Select Your Location: 
                    <select name="location" onChange={props.handleChange} value={location}>
                        <option value="">--- Please Select a destination ---</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                    </select>
                </label><br />
                <label>
                    <input onChange={props.handleChange} type="checkbox" name="noPork" checked={dietRestriction.noPork} />No Pork
                </label><br />
                <label>
                    <input onChange={props.handleChange} type="checkbox" name="isHalal" checked={dietRestriction.isHalal} />Halal
                </label><br />
                <label>
                    <input onChange={props.handleChange} type="checkbox" name="isVegan" checked={dietRestriction.isVegan} />Vegan
                </label><br />
                <button>Submit</button>
            </form>
            <hr/>
            <h1>Entered Information:</h1>
            <h2>Your Name: {firstName} {lastName}</h2>
            <h2>Your Age: {age}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Place You Want to Visit: {location}</h2>
            
            {/*Display this dietery restriction in a comma separated way */}
            <h2>Your Dietery Restrictions</h2>
            <h3>No Pork {dietRestriction.noPork ? "Yes" : "No"}</h3>
            <h3>Halal {dietRestriction.isHalal ? "Yes" : "No"}</h3>
            <h3>Vegan {dietRestriction.isVegan ? "Yes" : "No"}</h3>
        </main>
    )
}


export default FormComponent