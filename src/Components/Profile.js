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
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import ProfileMenuContainer from "../Components/ProfileMenuContainer"
import Avatar from 'react-avatar'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='My Buds'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge' as={Link} to='/signup'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}





class Profile extends Component {




render(){


console.log('in profile component', this.props)


return(
    <ResponsiveContainer functions={this.props}>
    <Grid columns={1} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment >
            <div class="ui small image">
                    {this.props.avatar? <img src={this.props.avatar.url} name={this.props.user.username}/> : <Avatar name={this.props.username}/>}
            </div>
        <h1>{this.props.user.username}</h1>
        <h2>{this.props.user.location}</h2>
        <p>{this.props.user.bio}</p>

        <Button onClick={() => this.props.history.push('/edit')}>Edit Profile</Button>
        </Segment>
      </Grid.Column>
      <Grid.Column>
          <Segment>
            <ProfileMenuContainer user={this.props.user} avatar={this.props.avatar} />
          </Segment>

      </Grid.Column>
    </Grid.Row>
  </Grid>
</ResponsiveContainer>
)
}
}

class DesktopContainer extends Component {
  state = {user:{
      friendships:[],
      strainreviews:[],
      gallery:[]
  }}



  componentDidMount(){
      let token = localStorage.token;

      token? fetch("http://localhost:3000/api/v1/current_user", {
            method: "GET",
            headers: {
                Authorization: `${token}`,
              "content-type": "application/json",
              accepts: "application/json"
            }
          })
            .then(resp => resp.json())
            .then(userData => {
                this.setState({
                    user: {...userData.user}
                })
            }) : console.log("fuck my life")

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
                <Menu.Item as={Link} to='/dashboard' hover='active'>
                    {this.state.user.username}
                </Menu.Item>

                <Menu.Item position='right'>
                    {this.state.user?  <Button
                         as={Link} to='/home'
                         inverted={!fixed}>Log Out</Button> : null}
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
      strainreviews:[],
      gallery:[]
  }}

  componentDidMount(){
      let token = localStorage.token;

      token? fetch("http://localhost:3000/api/v1/current_user", {
            method: "GET",
            headers: {
                Authorization: `${token}`,
              "content-type": "application/json",
              accepts: "application/json"
            }
          })
            .then(resp => resp.json())
            .then(userData => {
                this.setState({
                    user: {...userData.user},
                    avatar: userData.user.avatar
                })
            }) : console.log("fuck my life")

  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handlePlusClick = () => { this.setState({ visible: true }) }

  handleDoublePlusClick = () => { this.setState({ visible: false})}

  render() {

    const { children } = this.props
    const { sidebarOpened } = this.state
    const { visible } = this.state


    return (


      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          direction='bottom'
          onHide={this.handleSidebarHide}
          horizontal
          visible='true'
        >
          <Menu.Item as='a'>
              <Icon name='cog' />
          </Menu.Item>
              <Menu.Item as={ Link } name='profile' to='/profile/'>
                  <Icon name='user'/>
              </Menu.Item>
              <Menu.Item as='a' onClick={(e) => this.handlePlusClick()} onDoubleClick={(e) => this.handleDoublePlusClick()}>
                  <Icon name='plus square'/>
              </Menu.Item>
              <Menu.Item as='a'>
                  <Icon name='search'/>
              </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='street view'>
                </Icon>
            </Menu.Item>
</Sidebar>

<Sidebar
  as={Menu}
  animation='scale down'
  inverted
  direction='top'
  onClick={this.handlePlusClick}
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

          <Menu.Item as={Link} to='/dashboard'>
              {this.state.user.username}
              {this.state.user.avatar? <Image src={this.state.avatar.url} name={this.state.user.username} size='mini'/> : <Avatar size='mini'/>}
          </Menu.Item>

          </Segment>
          <Grid columns={1} divided>
          <Grid.Row centered>
            <Grid.Column>
                <div className="ui three item menu" onClick={(e) => this.props.handleClick(e)}>
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
              <Segment>1</Segment>
              <Segment>1</Segment>
              <Segment>1</Segment>
              <Segment>1</Segment>
              <Segment>1</Segment>
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

const ResponsiveContainer = ({ children, functions}) => (
  <div>

    <DesktopContainer props={functions}>{children}</DesktopContainer>
    <MobileContainer props={functions}>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


export default withRouter(Profile)
