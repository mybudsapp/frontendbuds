import React, {Component} from 'react'
import {Card,Form, Label, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class PhotoForm extends Component {

state = {
    newPhoto:{
        image:'',
        description:''
    }
}


changeHandler = (e) => {
    e.preventDefault()

    e.target.files?
    this.setState({ newPhoto:{
        image: e.target.files[0]
    }
},  () => { [e.target.placeholder]: e.target.value })
     : this.setState({ Photo: {
    ...this.state.Photo,
    [e.target.placeholder]: e.target.value
}}, () => {
console.log('from else if',this.state)
})

}


theSubmitHandler = (e) => {

    e.preventDefault()

    let token = localStorage.getItem('token')
    let photo_id = this.props.Photo.id


    console.log("the state once submit handler is hit", this.state)
    this.props.submitHandler(this.state, token, Photo_id);
    this.setState({
        newPhoto :{
            image:'',
            description:''
        }
    });
};




render() {

    return(
        <div class="ui form" encType="multipart/form-data">
             <form onSubmit={this.theSubmitHandler}>
             <label>Photo</label>
               <input
                 type='file'
                 placeholder="photo"
                 value={this.state.newPhoto.image}
                 onChange={this.changeHandler}
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
