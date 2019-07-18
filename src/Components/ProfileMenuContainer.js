import React from "react";
import {Gallery, Friends, Strains} from '../Components/ProfilePages.js'
import {Segment, Container, Card, Image} from 'semantic-ui-react'
import ProfileMenuDisplay from '../Components/ProfileMenuDisplay'


export default class ProfileMenuContainer extends React.Component {

  state = {
      user: {
          friendships:[],
          strain_reviews:[],
          gallery:[]
      },
    pages: <Gallery />
  };

  componentDidMount = (props) => {
      this.setState({
          user: this.props.user
      })
  }

  handleClick = (e) => {
console.log(e.target.id)
    if(e.target.id === "gallery"){
        this.setState({
            pages: <Gallery/>
        })
    }else if (e.target.id === "friends"){
        this.setState({
            pages: <Friends/>
        })
    }else if(e.target.id === "strains"){
        this.setState({
            pages: <Strains/>
        })
    }
    }


  render() {

// {
//   if(this.state.pages === 'friends'){
//        this.props.user.friendships.map((friend) => {
//   const friendsToDisplay =
//     <Card key={friend.id}>
//         <Image src={friend.avatar.url} avatar/>
//         <p>{friend.username}</p>
//     </Card>
// })
// } else if (this.state.pages === 'gallery'){
//     this.props.user.gallery.map((photo) => {
// const photosToDisplay =
// <Card key={photo.id}>
//   <Image src={photo.image} avatar/>
//   <p>{photo.description}</p>
// </Card>
// })
// } else if (this.state.pages === 'Strains') {
//     this.props.user.strainreviews.map((strain) => {
// const strainsToDisplay =
// <Card key={strain.id}>
//   <Image src={strain.image} avatar/>
//   <p>{strain.description}</p>
// </Card>
// })
// }
// }

//     {this.state.user? <div>
//      if(this.state.pages === 'friends'){
//            this.props.user.friendships.map((friend) => {
//       return(<Card key={friend.id}>
//             <Image src={friend.avatar.url} avatar/>
//             <p>{friend.username}</p>
//         </Card>)
//     })
//     }
//     else if(this.state.pages === 'gallery'){
//         this.props.user.gallery.map((photo) => {
//     return(<Card key={photo.id}>
//       <Image src={photo.image} avatar/>
//       <p>{photo.description}</p>
//     </Card>)
//     })
// }else if(this.state.pages === 'strains') {
//         this.props.user.strainreviews.map((strain) => {
//     return(<Card key={strain.id}>
//       <Image src={strain.image} avatar/>
//       <p>{strain.description}</p>
//     </Card>)
//     })
//     }
// </div> : null}

    const detailsToDisplay = <div>{this.state.pages}</div>
        console.log('within profile menu container', this.props, this.state)

    return(
        <Container>
        <div className="ui four item menu" onClick={(e) => this.handleClick(e)}>
              <a className="item active" id="gallery">
                <i className="photo large icon" id="gallery"/>
              </a>

              <a className="item" id="friends">
                <i className="user large icon" id="friend"/>
              </a>

              <a className="item" id="strains">
                <i className="leaf large icon" id="strain"/>
              </a>
              </div>
        <ProfileMenuDisplay display={detailsToDisplay}/>
        </Container>
    )

}
}
