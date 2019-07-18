import React, {Component} from 'react'




class Login extends Component{


state ={ username:'', password_digest:''}

 changeHandler = e => {
   this.setState({
     [e.target.placeholder]: e.target.value
   });
 };

 submitHandler = e => {
   e.preventDefault();
   this.props.loginHandler(this.state);
   this.setState({
     username: "",
     password_digest: ""
   });
 };

 render() {
   return (
       <div class="ui form">
     <form onSubmit={this.submitHandler}>
         <label>Username</label>
       <input
         type="text"
         placeholder="username"
         value={this.state.username}
         onChange={this.changeHandler}
       />
         <label>Password</label>
       <input
         type="password"
         placeholder="password_digest"
         value={this.state.password_digest}
         onChange={this.changeHandler}
       />
   <button>Log-in</button>
   </form>
</div>
   );
 }
}


export default Login
