
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const initialState = {
    name: "",
    location: ""

}

class NewStrainForm extends Component {

state = {

}

// validate = () => {
//     let nameError = "";
//     let emailError = "";
//     // let passwordError = "";
//
//     if (!this.state.name) {
//       nameError = "name cannot be blank";
//     }
//
//     if (!this.state.email.includes("@")) {
//       emailError = "invalid email";
//     }
//
//     if (emailError || nameError) {
//       this.setState({ emailError, nameError });
//       return false;
//     }
//
//     return true;
//   };



changeHandler = (e) => {

    e.preventDefault()

    // const isValid = this.validate();
    //
    //     if (isValid) {
    //       console.log(this.state);
    //       // clear form
    //       this.setState(initialState);
    //     }




        this.setState({ strain: {
    ...this.state.strain,
    user_id: e.target.parentElement.parentElement.getAttribute("user"),
    [e.target.name]: e.target.value

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

    const dispensariesOptions = () => {

        let dispensaries = []

        if(this.props.user.dispensaries){
            dispensaries = this.props.user.dispensaries
        }else{
            return <h1> No Dispensary </h1>
        }
        return dispensaries.map(dispensary => {
            return <option value={dispensary.id} >{dispensary.namespace}</option>;
            })
        }



    return(

        <Segment raised>
                <input
                  type="file"
                  placeholder="avatar"
                  value={this.state.email}
                  onChange={this.changeHandler}
                />

            <img id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></img>

            <div class="ui form" encType="multipart/form-data" user={this.props.user.id}  >
            <h3>New Strain </h3>
             <form onSubmit={e => this.theSubmitHandler(e)} >

             <label>Name:</label>
               <input
                 type="text"
                 name="strain_name"
                 value={this.state.state}
                 onChange={this.changeHandler}
               />
           <br></br>
           <label> Location: </label>
            <select name="dispensary"  onChange={this.changeHandler}>
                <option value="error">Choose Which Location</option>
                {dispensariesOptions()}
             </select>
           <br></br>
           <label>Type:</label>
               <select name="type" id="type" onChange={this.changeHandler}>
                   <option value="error">Choose the Type</option>
       <option value="Sativa">Sativa</option>
       <option value="Indica" >Indica </option>
       <option value="Hybrid">Hybrid</option>
   </select>
   <br></br>
   <label>Description:</label>
       <input
         type="text"
         name="description"
         value={this.state.state}
         onChange={this.changeHandler}
       />
                   <button>Submit</button>
             </form>

         </div>
         </Segment>

    )
}






}

export default NewStrainForm
