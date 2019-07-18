import React, {Component} from 'react'
import { useAlert } from 'react-alert'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class Signup extends Component {
 state = {
   username: "",
   password: "",
   dob: "",
   email:""
 };



 changeHandler = e => {
   this.setState({
     [e.target.placeholder]: e.target.value
   });
 };

 theSubmitHandler = (e) => {
     e.preventDefault()
     this.props.submitHandler(this.state);
     this.setState({
         username: "",
         password: "",
         dob: "",
         email:""
     });
 };

componentDidCatch = (error, info) => {
    alert(error)
}

 render() {


   return (
       <Segment style={{ padding: '8em 0em' }} vertical>
         <Grid container stackable verticalAlign='middle'>
           <Grid.Row>
             <Grid.Column width={8}>
               <Header as='h3' style={{ fontSize: '2em' }}>
                 Register Your Account
               </Header>
               <p style={{ fontSize: '1.33em' }}>
                 Password Should At Least Be 6 Characters
               </p>
               <p style={{ fontSize: '1.33em' }}>
                 Email Should Be An Actual Email
               </p>
               <Header as='h3' style={{ fontSize: '2em' }}>
                 Must Be At Least 21 Years Old 
               </Header>
             </Grid.Column>
             <Grid.Column floated='right' width={6}>
                 <div class="ui form">
                     <form onSubmit={this.theSubmitHandler}>
                         <label>Username:</label>
                         <input
                             type="text"
                             placeholder="username"
                             value={this.state.username}
                             onChange={this.changeHandler}
                             />
                         <label>Password:</label>
                         <input
                             type="password"
                             placeholder="password"
                             value={this.state.password}
                             onChange={this.changeHandler}
                             />
                         <label>Date of Birth:</label>
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
             </Grid.Column>
           </Grid.Row>
           <Grid.Row>
             <Grid.Column textAlign='center'>
               <Button size='huge'>Go Back</Button>
             </Grid.Column>
           </Grid.Row>
         </Grid>
       </Segment>

   );
 }
}

export default Signup;
