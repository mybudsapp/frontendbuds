import React from "react";
import {Gallery, Friends, Strains} from '../Components/ProfilePages.js'
import {Segment, Container, Card, Image} from 'semantic-ui-react'



const ProfileMenuContainer = (props) => {

//   state = {
//       user: {
//           friendships:[],
//           strain_reviews:[],
//           gallery:[]
//       },
//       display: {},
//     pages: <Gallery />
//   };
//
//   componentDidMount = (props) => {
//       this.setState({
//           user: this.props.user,
//           display: this.props.display
//       }) ;
//
//
//   }
//
//   handleClick = (display) => {
// console.log("!@#!@#!@#444")


    // if(e.target.id === "gallery"){
    //     this.setState({
    //         pages: <Gallery user={this.state.user}/>
    //     })
    // }else if (e.target.id === "friends"){
    //     this.setState({
    //         pages: <Friends friends={this.state.user.friends}/>
    //     })
    // }else if(e.target.id === "strains"){
    //     this.setState({
    //         pages: <Strains/>
    //     })
    // }



// return <div>{this.state.pages}</div>
//
// }





//     let detailsToDisplay = (display) => {
//
//           debugger
//
//           if (display === "Photos"){
//               this.setState({
//                   pages: <Gallery user={this.state.user}/>
//           })
//       }else if (display === "friends"){
//           this.setState({
//               pages: <Friends friends={this.state.user.friends}/>
//       })
//   }else if(display === "strains"){
//       this.setState({
//           pages: <Strains/>
//   })
// }
// }
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









    return(
        <Container>
        {props.display}
        </Container>
    )

}

export default ProfileMenuContainer
