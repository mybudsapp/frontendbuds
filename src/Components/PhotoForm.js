import React, {Component} from 'react'
import {Card,Form, Label, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {useAlert} from 'react-alert'

class PhotoForm extends Component {

state = {
}


changeHandler = (e) => {
    e.preventDefault();

    this.setState({
        [e.target.placeholder]: e.target.value
    })
    console.log('fromchangehandler', this.state)
}


handleImage = (e) => {
    e.preventDefault();


    this.setState({
        image: e.target.files[0]
    })

    console.log("the handle image has been hit", this.state)

}

theSubmitPhotoHandler = (e) => {

    e.preventDefault()

    let token = localStorage.getItem('token')


    console.log("the state once submit handler is hit", this.state)
    this.props.submitPhotoHandler(this.state, token);
    this.setState({
            image:'',
            description:''
        }
    )
};




render() {

    return(
        <div class="ui form" encType="multipart/form-data">
             <form onSubmit={this.theSubmitPhotoHandler}>
             <label>Photo</label>
               <input
                 encType="multipart/form-data"
                 type='file'
                 placeholder="photo"
                 onChange={(e) => this.handleImage(e)}
               />
           <label>Caption</label>
               <input
                 type="text"
                 placeholder="description"
                 value={this.state.description}
                 onChange={this.changeHandler}
               />
                   <button>Submit</button>
             </form>

         </div>

    )
}
}

export default PhotoForm
