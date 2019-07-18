
import React, {Component} from 'react'
import {Card,Form, Label, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class StrainForm extends Component {

state = {
    newStrain:{
        Name: '',
        Mental:  '000',
        Physical: '000',
        Velocity: '000',
        Flavor: '000',
        Overall: '000'
    },
    oldStrain: {}
}


changeHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    e.target.files?
    this.setState({strain:{
        image: e.target.files[0]
    }
},  () => {
console.log('from true statement and saving file from change handler',this.state)})
     : this.setState({ strain: {
    ...this.state.strain,
    [e.target.placeholder]: e.target.value
}}, () => {
console.log('from else if',this.state)
})

}

handleAvatar = (e) => {
    e.preventDefault()
    console.log(e.target.files)
    this.setState({
        avatar: e.target.files[0]
    },  () => {
console.log('from handle avatar',this.state)})
}


theSubmitHandler = (e) => {

    e.preventDefault()

    let token = localStorage.getItem('token')
    let strain_id = this.props.strain.id


    console.log("the state once submit handler is hit", this.state)
    this.props.submitHandler(this.state, token, strain_id);
    this.setState({
        newStrain :{
            Mental:  '000',
            Physical: '000',
            Velocity: '000',
            Flavor: '000',
            Overall: '000'
        }
    });
};


handleChange = (e) => {
this.setState({
    personaility_type: e.target.value
})
}



render() {

    return(

        <div class="ui form" encType="multipart/form-data">
             <form onSubmit={this.theSubmitHandler}>
             <label>name:</label>
               <input
                 type="text"
                 placeholder="name"
                 value={this.state.strainname}
                 onChange={this.changeHandler}
               />
           <label>Mental:</label>
               <input
                 type="password"
                 placeholder="password"
                 value={this.state.password}
                 onChange={this.changeHandler}
               />
           <label>Physical:</label>
               <input
                 type="date"
                 placeholder="dob"
                 onChange={this.changeHandler}
               />
           <label>Email:</label>
               <input
                 type="text"
                 placeholder="email"
                 value={this.state.email}
                 onChange={this.changeHandler}
               />
                   <button>Sign Up</button>
             </form>

         </div>

    )
}
}

export default StrainForm
