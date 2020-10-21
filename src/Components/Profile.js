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
  Card
} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import ProfileMenuContainer from "../Components/ProfileMenuContainer"
import Avatar from 'react-avatar'
import {Gallery, Friends, StrainReviews} from '../Components/ProfilePages.js'
import UserContentDisplay from '../Components/UserContentDisplay.js'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}






class Profile extends Component {

    state = {activeItem: ""}


    //distribute each part of the profile into the activeItem from user object

    handleClick = (e) => {


      if(e.target.id === "Photos"){
          this.setState({
              activeItem: "Gallery"
          })
      }else if (e.target.id === "friends"){
          this.setState({
              activeItem: "friends"
          })
      }else if(e.target.id === "strains"){
          this.setState({
              activeItem: "StrainReviews"
          })
      }
      }




render(){




return(
    <ResponsiveContainer functions={this.props}>

        {console.log("the fuck is in display props", this.state.display)}
              <div class="container">
          <div class="row1">
              <div class="col-md-12">
                  <div class="top-breadcrumb">
                      <Visibility
                        once={false}
                        onScreen={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                      >
                        <Segment  raised textAlign="center"
                        >

                          <div class="col-lg-12">
                              <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="user-profile"></img>
                              <h3>{this.props.user.username}</h3>
                              <p>Web Developer</p>
                          </div>

                      </Segment>

                      </Visibility>
                  </div>
              </div>
          </div>

          <div class="card social-prof">
              <div class="card-body">
                  <Visibility
                    once={false}
                    onScreen={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                  >


                <Segment >
                  <div class="row">
                      <div class="col-lg-12">
                          <ul class=" nav nav-tabs justify-content-center s-nav" onClick={(e) => this.handleClick(e)}>
                              <li><a href="#" id="Timeline">Timeline</a></li>
                              <li><a href="#" id="strains">Strain Reviews</a></li>
                              <li><a href="#"id="friends">Friends</a></li>
                              <li><a href="#"id="Photos">Photos</a></li>
                          </ul>
                      </div>
                  </div>
              </Segment>
              </Visibility>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-3">
                  <div class="card">
                      <div class="card-body">
                          <div class="h5 text-blue">@{this.props.user.username}</div>
                          <div class="h7 "><strong>Name :</strong> {console.log("crazyass template", this.props.user), this.props.user.username}</div>
                          <div class="h7"><strong>About :</strong> Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.
                          </div>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                              <div class="h6 text-muted">Followers</div>
                              <div class="h5">5.2342</div>
                          </li>
                          <li class="list-group-item">
                              <div class="h6 text-muted">Following</div>
                              <div class="h5">6758</div>
                          </li>
                          <li class="list-group-item">
                              <div class="h6 text-muted">Themes</div>
                              <div class="h5">6758</div>
                          </li>
                      </ul>
                  </div>
                  <div class="card">
                      <div class="card-body">
                          <h3 class="card-title">Latest Photos</h3>
                          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                              <ol class="carousel-indicators">
                                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                                  <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                                  <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
                              </ol>
                              <div class="carousel-inner">
                                  <div class="carousel-item">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block w-100" alt="..."></img>
                                  </div>
                                  <div class="carousel-item">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block w-100" alt="..."></img>
                                  </div>
                                  <div class="carousel-item active">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block w-100" alt="..."></img>
                                  </div>
                              </div>
                              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                              </a>
                              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 gedf-main">

                  <div class="card social-timeline-card">

                      <div class="card-body">



                          {console.log(this.state)}
                             <UserContentDisplay
                                 strainreviews={this.props.user.strain_reviews}
                                 activeItem={this.state.activeItem}
                                 user={this.props.user}
                                 gallery={this.props.gallery}
                                 />

                      </div>
                  </div>

                  <div class="card social-timeline-card">
                      <div class="card-header">
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex justify-content-between align-items-center">
                                  <div class="mr-2">
                                      <img class="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""></img>
                                  </div>
                                  <div class="ml-2">
                                      <div class="h5 m-0 text-blue">@JaneSmith</div>
                                      <div class="h7 text-muted">Miracles Lee Cross</div>
                                  </div>
                              </div>
                              <div>
                                  <div class="dropdown">
                                      <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <i class="fa fa-ellipsis-h"></i>
                                      </button>
                                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop11">
                                          <div class="h6 dropdown-header">Configuration</div>
                                          <a class="dropdown-item" href="#">Save</a>
                                          <a class="dropdown-item" href="#">Hide</a>
                                          <a class="dropdown-item" href="#">Report</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card-body">
                          <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                          <a class="card-link" href="#">
                              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                          </a>
                          <img src="img/gallery/1a.jpg" alt="" class="img-fluid"></img>

                      </div>
                      <div class="card-footer">
                          <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                          <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                          <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                      </div>
                  </div>

                  <div class="card social-timeline-card">
                      <div class="card-header">
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex justify-content-between align-items-center">
                                  <div class="mr-2">
                                      <img class="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""></img>
                                  </div>
                                  <div class="ml-2">
                                      <div class="h5 m-0 text-blue">@JaneSmith</div>
                                      <div class="h7 text-muted">Miracles Lee Cross</div>
                                  </div>
                              </div>
                              <div>
                                  <div class="dropdown">
                                      <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <i class="fa fa-ellipsis-h"></i>
                                      </button>
                                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                          <div class="h6 dropdown-header">Configuration</div>
                                          <a class="dropdown-item" href="#">Save</a>
                                          <a class="dropdown-item" href="#">Hide</a>
                                          <a class="dropdown-item" href="#">Report</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card-body">
                          <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> 10 min ago</div>
                          <a class="card-link" href="#">
                              <h5 class="card-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur
                                              deserunt illo esse distinctio.</h5>
                          </a>
                          <p class="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae. Consectetur id molestias itaque facere? Hic!
                          </p>
                          <div>
                              <span class="badge badge-primary">JavaScript</span>
                              <span class="badge badge-primary">Android</span>
                              <span class="badge badge-primary">PHP</span>
                              <span class="badge badge-primary">Node.js</span>
                              <span class="badge badge-primary">Ruby</span>
                              <span class="badge badge-primary">Paython</span>
                          </div>
                      </div>
                      <div class="card-footer">
                          <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                          <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                          <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                      </div>
                  </div>

                  <div class="card social-timeline-card">
                      <div class="card-header">
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex justify-content-between align-items-center">
                                  <div class="mr-2">
                                      <img class="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img>
                                  </div>
                                  <div class="ml-2">
                                      <div class="h5 m-0 text-blue">@JaneSmith</div>
                                      <div class="h7 text-muted">Miracles Lee Cross</div>
                                  </div>
                              </div>
                              <div>
                                  <div class="dropdown">
                                      <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <i class="fa fa-ellipsis-h"></i>
                                      </button>
                                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop2">
                                          <div class="h6 dropdown-header">Configuration</div>
                                          <a class="dropdown-item" href="#">Save</a>
                                          <a class="dropdown-item" href="#">Hide</a>
                                          <a class="dropdown-item" href="#">Report</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card-body">
                          <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> Hace 40 min</div>
                          <a class="card-link" href="#">
                              <h5 class="card-title">Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum quos
                                              cum.</h5>
                          </a>
                          <p class="card-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt fugit reprehenderit consectetur exercitationem odio, quam nobis? Officiis, similique, harum voluptate, facilis voluptas pariatur dolorum tempora sapiente eius maxime quaerat.

                          </p>
                      </div>
                      <div class="card-footer">
                          <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                          <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                          <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                      </div>
                  </div>

              </div>
              <div class="col-lg-3">
                  <div class="card social-timeline-card">
                      <div class="card-body">
                          <h5 class="card-title">Recent activity feed here</h5>


                      </div>
                  </div>
              </div>
          </div>
      </div>



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
          {console.log( this.props, this.state)}
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

        {children}

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
      {console.log("MOVBIBI", this.props, this.state)}
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
