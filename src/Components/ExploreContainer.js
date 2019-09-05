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
  Label,
  Input,
  Card,
  Dropdown
} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import Avatar from 'react-avatar'
import UserCard from './UserCard'
import {BasicFriendsFeed, FriendsPhotosFeed, FriendsStrainFeed, RecentActivityFeed, AllUsersFeed, AllStrainsFeed} from "./ActivityFeeds"

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class ExploreContainer extends React.Component{

state = {
    Feed: <RecentActivityFeed history={this.props.history} user={this.props}/>

}

handlePlusClick = () => {this.setState({ visible: true})}

handleDoublePlusClick = () => { this.setState({ visible: false})}


handleItemClick = (e, { name }) => {

      console.log(e, name)

    if (name === "users"){
        this.setState({
            Feed: <AllUsersFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
        })
        console.log("whoa")

    }else if (name === "strains") {

        this.setState({
            Feed: <AllStrainsFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
        })

        console.log("whoa strains")

    }else if (name === "Photos"){

        this.setState({
            Feed: <FriendsStrainFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
        })
        console.log("whoa strains")

    }
}

componentDidMount = () => {

}

render(){

    const activityFeedToDisplay = this.state.Feed
    const { sidebarOpened } = this.state
    const { visible } = this.state
    const { activeItem } = this.state

return(
    <ResponsiveContainer functions={this.props}>


           <div fluid className="ui menu">
            <div class="ui small image">

            {this.props.avatar? <img src={this.props.avatar.url} name={this.props.user.username}/> : <Avatar name={this.props.username}/>}
                </div>
                <h2>{this.props.user.username}</h2>
                </div>
                <Menu fluid widths={4}>
                <Menu.Item
                 name='users'
                 active={activeItem === 'users'}
                 onClick={this.handleItemClick}
                >
                 Users
                </Menu.Item>
                <Menu.Item
                 name='strains'
                 active={activeItem === 'strains'}
                 onClick={this.handleItemClick}
                >
                 Strains
                </Menu.Item>
                <Menu.Item
                 name='photos'
                 active={activeItem === 'photos'}
                 onClick={this.handleItemClick}
                >
                 Photos
                </Menu.Item>
                <Menu.Menu position='centered'>
                </Menu.Menu>
                </Menu>
                <Grid>
                <Grid.Row columns={1}>
                <Grid.Column>

                </Grid.Column>
                </Grid.Row>
                </Grid>

                <Segment attached='bottom'>
                {activityFeedToDisplay}
                </Segment>
</ResponsiveContainer>
)
}
}

class DesktopContainer extends React.Component {

  state = {
      user:{
          friendships:[],
          strain_reviews:[],
          gallery:[]
      }
  }

//   componentDidMount(){
//       let token = localStorage.token
//
//       if (token) {
//       fetch("http://localhost:3000/api/v1/current_user", {
//                 method: "GET",
//                 headers: {
//                     Authorization: `${token}`,
//                   "content-type": "application/json",
//                   accepts: "application/json"
//                 }
//               })
//               .then(res => {
//                   if(!res.ok) {
//                       res.text().then(text => alert(text))
//                   } else {
//                       return res.json().then(userData => {
//                           this.setState({ user: { ...userData.user }, token: userData.jwt, avatar: userData.user.avatar });
//                       })
//                   }
//               })
//           } else {
//               console.log('wowo')
//           }
// }



 logOutHandler = () => {
     localStorage.removeItem("token")
      this.props.history.push('/Home')
  }


  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handlePlusClick = () => {this.setState({ visible: true})}

  handleDoublePlusClick = () => { this.setState({ visible: false})}



  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { sidebarOpened } = this.state
    const { visible } = this.state



    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Sidebar
              as={Menu}
              animation='push'
              inverted
              direction='top'
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              >
              <Menu.Item as='a' onClick={(e) => this.props.props.handleNewStrainReviewClick()}>
                  New StrainReview
              </Menu.Item>
              <Menu.Item as='a' onClick={(e) => this.props.props.handleNewPostClick()}>
                  New Post
              </Menu.Item>
              <Menu.Item as='a' onClick={(e) => this.props.props.handleNewPhotoClick()}>
                  New Photo
              </Menu.Item>


          </Sidebar>

        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 50, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
              <Button as={Link} to='/dashboard' inverted={!fixed}>
                  <Icon name='home' size='big'/>
              </Button>
                <Menu.Item position='right'>
                    {this.state.user?  <Button
                         as={Link} to='/home'
                         inverted={!fixed} onClick={() => this.logOutHandler()}> Log Out </Button> : null}
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Settings
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
        <Segment
            textAlign='center'
            raised
            circular inverted style={ {width:100, height:100} }
            >
                <Menu.Item as='a' onClick={(e) => this.handlePlusClick()} onDoubleClick={(e) => this.handleDoublePlusClick()}>
                    <Icon name='plus square' size='big'/>
                </Menu.Item>
        </Segment>
      </Responsive>
    )
  }
}

// {children} in between Visibility and responsive

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class MobileContainer extends Component {
  state = {user:{
      friendships:[],
      strain_reviews:[],
      gallery:[]
  }}


  handleActivityFeedClick = (e) => {

      if (e.target.id === "feed"){

          this.setState({
              activityFeed: <BasicFriendsFeed user={this.props} history={this.props.history}/>
          })
          console.log("whoa")

      }else if (e.target.id === "photos") {

          this.setState({
              activityFeed: <FriendsPhotosFeed user={this.props} history={this.props.history}/>
          })

          console.log("whoa photos")

      }else if (e.target.id === "strains"){

          this.setState({
              activityFeed: <FriendsStrainFeed user={this.props} history={this.props.history}/>
          })
          console.log("whoa strains")

      }
  }




  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handlePlusClick = () => {this.setState({ visible: true})}

  handleDoublePlusClick = () => { this.setState({ visible: false})}

  render() {

    const { children } = this.props
    const { sidebarOpened } = this.state
    const { visible } = this.state
    const activityFeedToDisplay = this.state.activityFeed




    return (

      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >

<Sidebar
  as={Menu}
  className='popupmenu'
  animation='push'
  inverted
  direction='top'
  onHide={this.handleSidebarHide}
  vertical
  visible={visible}
>
<Menu.Item as='a' onClick={(e) => this.props.props.handleNewStrainReviewClick()}>
    New StrainReview
</Menu.Item>
<Menu.Item as='a' onClick={(e) => this.props.props.handleNewPostClick()}>
    New Post
</Menu.Item>
<Menu.Item as='a' onClick={(e) => this.props.props.handleNewPhotoClick()}>
    New Photo
</Menu.Item>
</Sidebar>


        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 50, padding: '1em 0em' }}
            vertical
          >

          </Segment>
          <Grid columns={1} >
          <Grid.Row centered>
            <Grid.Column>
                <div className="ui three item menu" onClick={(e) => this.handleActivityFeedClick(e)}>
                  <a className="item" id="feed">
                    <i className="fire large icon" id="feed"/>
                  </a>
                  <a className="item" id="photos">
                    <i className="photo large icon" id="photo"/>
                  </a>
                  <a className="item" id="strains">
                    <i className="leaf large icon" id="strains"/>
                  </a>
                </div>
              <Segment>1</Segment>
              <Segment>2</Segment>
                  <Segment>1</Segment>
                  <Segment>2</Segment>
                  <Segment>1</Segment>

            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Sidebar.Pusher>
      </Responsive>

    )
  }
  }
  MobileContainer.propTypes = {
      children: PropTypes.node,

}


const ResponsiveContainer = ({ children, functions }) => (
  <div>

    <DesktopContainer props={functions}>{children}</DesktopContainer>
    <MobileContainer props={functions}>{children}</MobileContainer>

  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


export default withRouter(ExploreContainer)
