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
  Input
} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import Avatar from 'react-avatar'
import RadialMenu from './RadialMenu'

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





const UserDashboard = (props) => {


return(
    <ResponsiveContainer functions={props}>
    <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
            <div class="ui small image">

            {props.avatar? <img src={props.avatar.url} name={props.user.username}/> : <Avatar name={props.username}/>}

                </div>
                <h2>{props.user.username}</h2>
                    <Menu vertical>
            <Menu.Item name='View My Profile'  onClick={e => props.history.push('/profile/')}>
              Profile
            </Menu.Item>
            <Menu.Item name='Explore' onClick={e => props.history.push('/explore/')}>
              Explore
            </Menu.Item>
            <Menu.Item name='Friend requests' onClick={e => props.history.push('/friendrequests/')}>
              Friend Requests
            </Menu.Item>
            <Menu.Item name='Friends' onClick={e => props.history.push('/friends/')}>
              Friends
            </Menu.Item>
          </Menu>
        </Segment>
      </Grid.Column>
      <Grid.Column>
          <div fluid className="ui two item menu" >
            <a className="item" id="feed">
              <i className="fire large icon" style={{textAlign: 'center'}} id="feed"/>
            </a>

            <a className="item" id="photos">
              <i className="photo large icon" style={{textAlign: 'center'}} id="photo"/>
            </a>

            <a className="item" id="strains" >
              <i className="leaf large icon" id="strains" style={{textAlign: 'center'}} centered/>
            </a>

          </div>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>

      </Grid.Column>

    </Grid.Row>
  </Grid>
</ResponsiveContainer>
)
}

class DesktopContainer extends Component {
  state = {
      user:{
          friendships:[],
          strain_reviews:[],
          gallery:[]
      }
  }

  componentDidMount(){

      let token = localStorage.token

      if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                  "content-type": "application/json",
                  accepts: "application/json"
                }
              })
              .then(res => {
                  if(!res.ok) {
                      res.text().then(text => alert(text))
                  } else {
                      return res.json().then(userData => {
                          this.setState({ user: { ...userData.user }, token: userData.jwt, avatar: userData.user.avatar });
                      })
                  }
              })
          } else {
              console.log('wowo')
          }
}


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
                <Menu.Item as={Link} to='/home' hover='active'>
                  Home
                </Menu.Item>
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


  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handlePlusClick = () => {this.setState({ visible: true})}

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
                  <Icon name='plus square' size='large'/>
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

<Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}

            animation='overlay'
            direction='bottom'
            vertical
            visible={visible}
            width='thin'
          >
          <Menu.Item as='a'>
              <Icon name='cog' />
          </Menu.Item>
              <Menu.Item as={ Link } name='profile' to='/profile/'>
                  <Icon name='user'/>
              </Menu.Item>
              <Menu.Item as='a' onClick={(e) => this.handleSidebarHide()}>
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
        </Sidebar.Pushable>

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
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
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


export default withRouter(UserDashboard)
