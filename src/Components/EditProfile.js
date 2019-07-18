import React, {Component} from "react";
import {Card,Form, Label, Button} from 'semantic-ui-react'
import Avatar from 'react-avatar'
import StrainCard from "./StrainCard"


class EditProfile extends Component {

    state={
        user: {
            username: null,
            bio: null,
            personality_type : null,
            location : null
        }
    }

    componentDidMount = () => {
        console.log('')
    }

    changeHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        e.target.files?
        this.setState({user:{
            avatar: e.target.files[0]
        }
    },  () => {
    console.log('from true statement and saving file from change handler',this.state)})
         : this.setState({ user: {
        ...this.state.user,
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
        let user_id = this.props.user.id


        console.log("the state once submit handler is hit", this.state)
        this.props.submitHandler(this.state, token, user_id);
        this.setState({
            user :{
                username: "",
                bio: "",
                avatar: "",
                personality_type: "",
                location : ""
            }
        });
    };


    handleChange = (e) => {

    this.setState({
        personaility_type: e.target.value
    })
}


    render(){
        const options = [
            { key: 's', text: 'Sativa', value: 'Sativa' },
            { key: 'i', text: 'Indica', value: 'Indica' },
            { key: 'h', text: 'Hybrid', value: 'Hybrid' },
        ]
        console.log("in edit profile" , this.props.user, this.state)
        return(

            <React.Fragment>
            <Card fluid>
              <Card.Content textAlign="center">
                 <h1>{this.props.user.username}</h1>
                     <div class="ui small image">
                             {this.props.avatar? <img src={this.props.avatar.url} name={this.props.user.username}/> : <Avatar name={this.props.username}/>}
                         </div>
                 <h2>{this.props.user.location}</h2>
                 <h3>{this.props.user.bio}</h3>
              </Card.Content>
            </Card>
            <Form id={this.props.user.id} encType="multipart/form-data">
          <Form.Group widths='equal'>

          <Form.Input fluid label='Avatar' encType="multipart/form-data" placeholder='avatar' type='file' value={this.state.user.avatar} onChange={(e) => this.handleAvatar(e)}/>
            <Form.Input fluid label='Username' placeholder='username' value={this.state.user.username} onChange={(e) => this.changeHandler(e)}/>
            <Form.Input fluid label='Location' placeholder='location' value={this.state.user.location} onChange={(e) => this.changeHandler(e)}/>
            <Form.Select fluid label='Personality Type' options={options} placeholder='personality type' onChange={(e) => this.changeHandler(e)} />
          </Form.Group>
          <Form.TextArea label='Bio' placeholder='bio' value={this.state.user.bio} onChange={(e) => this.changeHandler(e)} />
          <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>
        </Form>
      </React.Fragment>
        )
    }


}


export default EditProfile;
