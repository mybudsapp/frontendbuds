
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class NewDispensaryForm extends Component {

state = {

}


changeHandler = (e) => {



    e.preventDefault()
    console.log(this.state)
    e.target.files?
    this.setState({dispensary:{
        image: e.target.files[0]
    }
},  () => {
console.log('from true statement and saving file from change handler',this.state)})
     : this.setState({ dispensary: {
    ...this.state.dispensary,
    [e.target.placeholder]: e.target.value,
    user_id: e.target.parentElement.parentElement.getAttribute("user")
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



    console.log("the state once submit handler is hit", this.state)
    this.props.submitHandler(this.state, token);

    // gotta make the set the new state for new dispensarh
    // this.setState({
    //     newStrain :{
    //         Mental:  '000',
    //         Physical: '000',
    //         Velocity: '000',
    //         Flavor: '000',
    //         Overall: '000'
    //     }
    // })
    ;
};






render() {

    return(

        <Segment raised>

                <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"></img>

            <div class="ui form" encType="multipart/form-data" user={this.props.user.id}>
            <h3>New Dispensary</h3>
             <form onSubmit={e => this.theSubmitHandler(e)} >

             <label>State:</label>
               <input
                 type="text"
                 placeholder="state"
                 value={this.state.state}
                 onChange={this.changeHandler}
               />
           <label>City:</label>
               <input
                 type="text"
                 placeholder="city"
                 value={this.state.city}
                 onChange={this.changeHandler}
               />
           <label>Name Space:</label>
               <input
                 type="text"
                 placeholder="namespace"
                 onChange={this.changeHandler}
               />
           <label>Description:</label>
               <input
                 type="text"
                 placeholder="description"
                 value={this.state.email}
                 onChange={this.changeHandler}
               />
               <label>Avatar</label>
                   <input
                     type="text"
                     placeholder="email"
                     value={this.state.email}
                     onChange={this.changeHandler}
                   />
                   <button>Submit</button>
             </form>

         </div>
         </Segment>

    )
}






}

export default NewDispensaryForm
