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
  Table,
  Card,
  Label,
  Form
} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import ProfileMenuContainer from "../Components/ProfileMenuContainer"
import Avatar from 'react-avatar'
import Slider from 'react-input-slider';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
//
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h1'
//       content='My Buds'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Do whatever you want when you want to.'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Button primary size='huge' as={Link} to='/signup'>
//       Get Started
//       <Icon name='right arrow' />
//     </Button>
//   </Container>
// )
//
// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }





class StrainReview extends Component {

    state = {
      strain: {},
    user:{}}


      componentDidMount(){

          var last =  function(array, n) {
          if (array == null)
          return void 0;
          if (n == null)
           return array[array.length - 1];
          return array.slice(Math.max(array.length - n, 0));
          };

          let str = window.location.href
          let res = str.split("/")
          let strainID = last(res)

          let token = localStorage.token;

          console.log("pondecomponet", strainID)

          fetch(`http://localhost:3000/api/v1/strains/${strainID}`).then(res => res.json()).then(strainData =>
            this.setState({
                strain: {...strainData}})
            ).then(
              fetch("http://localhost:3000/api/v1/current_user", {
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
                    user: { ...userData.user }
                  });
              }))
      }

//document.getElementById("myH2").style.color = "#ff0000"

//grab the elements, check the number, if its 1-2 then red. 3-4 orange, 5-6yellow, 7-8 light green, 9-10 dark green
changeHandler = (e) => {

    this.setState({ x: parseFloat(e.toFixed(2)) })
    }

submitHandler = () => {
    this.props.submitNewStrainReviewHandler(this.state)
}


render(){

    const {strain} = this.state
    const reviewstrain = "/strains/" + strain.strain_name + "/strainreview"
    const {mental} = this.state
    const {physical} = this.state
    const {velocity} = this.state
    const {flavor} = this.state
    const {overall} = this.state


return(
    <ResponsiveContainer functions={this.props}>
    <Segment raised textAlign='center'>
    <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
    <Segment>
    <Header as='h2' textAlign='center'>
            {strain.strain_name}
          </Header>
          <Header >{strain.strain_type}</Header>
    </Segment>
    <Table>

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center" colSpan='2'>Buddy Ratings</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell textAlign="center" id="mental">
          <Header as='h4' image>
          <Image src='https://image.shutterstock.com/image-vector/illustration-human-brain-profile-cartoon-260nw-78256660.jpg' rounded size='mini' />
            <Header.Content >
            Mental
            <Header.Subheader> Paranoia/Stimulating </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign="center">
        <input
        class="slider" id="myRange"
        type="range"
        min="0"
        max="10"
        step=".1"
        value={this.state.mental}
        onChange={e => {
            this.setState({
                mental: e.target.value
            });
        }}
        />
        {this.state.mental?
            <Segment>
        <p>Mental Score : <h3>{mental}</h3></p>
        </Segment> : null}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign="center">
          <Header as='h4' image>
          <Image src='https://previews.123rf.com/images/aninata/aninata1608/aninata160800055/61262264-vector-illustration-with-silhouette-of-yoga-woman-with-bright-watercolor-texture-and-floral-ornament.jpg' rounded size='mini' />
            <Header.Content>
              Physical
              <Header.Subheader>Laziness/Relaxation</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign="center">
        <input
        class="slider" id="myRange"
        type="range"
        min="0"
        max="10"
        step=".1"
        value={this.state.physical}
        onChange={e => {
            this.setState({
                physical: e.target.value
            });
        }}
        />
        { this.state.physical?
            <Segment>
        <p>Physical Score : <h3>{physical}</h3></p>
        </Segment> : null}

        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign="center">
          <Header as='h4' image>
          <Image src='https://img.icons8.com/plasticine/2x/rocket.png' rounded size='mini' />
            <Header.Content>
              Velocity
              <Header.Subheader>Slow/Very Fast</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign="center">
        <input
        class="slider" id="myRange"
        type="range"
        min="0"
        max="10"
        step=".1"
        value={this.state.velocity}
        onChange={e => {
            this.setState({
                velocity: e.target.value
            });
        }}
        />
        { this.state.velocity?
            <Segment>
        <p>Velocity Score : <h3>{velocity}</h3></p>
        </Segment> : null}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign="center">
          <Header as='h4' image>
            <Image src='https://previews.123rf.com/images/mything/mything1707/mything170700049/82433076-set-of-colorful-cartoon-berries-raspberry-blueberry-blackberry-vector-illustration-flat-icon-isolate.jpg' rounded size='mini' />
            <Header.Content>
              Flavor
              <Header.Subheader>Earthy/Sweet</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign="center">
        <input
        class="slider" id="myRange"
        type="range"
        min="0"
        max="10"
        step=".1"
        value={this.state.flavor}
        onChange={e => {
            this.setState({
                flavor: e.target.value
            });
        }}
        />
        { this.state.flavor?
            <Segment>
        <p>Flavor Score : <h3>{flavor}</h3></p>
        </Segment> : null}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign="center">
          <Header as='h4' image>
            <Image src='https://cdn.clipart.email/6f70ff121c7a71e6bfd4fdfb9553d875_thumbs-up-and-down-clipart_572-368.gif' rounded size='mini' />
            <Header.Content>
              Overall
              <Header.Subheader>Reggie/Dank</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign="center">
        <input
        class="slider" id="myRange"
        type="range"
        min="0"
        max="10"
        step=".1"
        value={this.state.overall}
        onChange={e => {
            this.setState({
                overall: e.target.value
            });
        }}
        />
        { this.state.overall?
            <Segment>
        <p>Overall Score : <h3>{overall}</h3></p>
        </Segment> : null}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table>
  <Segment>
  <Button  onClick={this.submitHandler} basic color='green'>Submit</Button>
  </Segment>
  </Segment>
  <Segment raised textAlign='center'>
    <h3>Review Comments</h3>
    <Image size="tiny" centered src="https://cloudcar.com/wp-content/uploads/2018/06/gif-bounce-arrow.gif"></Image>
  </Segment>
</ResponsiveContainer>
)
}
}

class DesktopContainer extends Component {
  state = {user:{
      friendships:[],
      strainreviews:[],
      gallery:[]
  },
    strain: {}}



  componentDidMount(){

      var last =  function(array, n) {
      if (array == null)
      return void 0;
      if (n == null)
       return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
      };

      let str = window.location.href
      let res = str.split("/")
      let strainID = last(res)

      console.log("pondecomponet", strainID)

      fetch(`http://localhost:3000/api/v1/strains/${strainID}`).then(res => res.json()).then(strainData =>
        this.setState({
            strain: {...strainData}})
        )

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
    const {strain} = this.state


    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
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
  },
strain: {}}



  componentDidMount(){
      var last =  function(array, n) {
      if (array == null)
      return void 0;
      if (n == null)
       return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
      };

      let str = window.location.href
      let res = str.split("/")
      let strainID = last(res)

      console.log("pondecomponet", strainID)

      fetch(`http://localhost:3000/api/v1/strains/${strainID}`).then(res => res.json()).then(strainData =>
        this.setState({
            strain: {...strainData}})
        )

  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handlePlusClick = () => { this.setState({ visible: true }) }

  handleDoublePlusClick = () => { this.setState({ visible: false})}

  render() {

    const { children } = this.props
    const { sidebarOpened } = this.state
    const { visible } = this.state
    const { strain } = this.state
    const {mental} = this.state
    const {physical} = this.state
    const {velocity} = this.state
    const {flavor} = this.state
    const {overall} = this.state


    return (


      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >

      <Segment raised textAlign='center'>
      <Segment raised textAlign='center'>
      <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
      <Segment>
      <Header as='h2' textAlign='center'>
              {strain.strain_name}
            </Header>
            <Header >{strain.strain_type}</Header>
      </Segment>
      </Segment>
                <Table>

                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center" colSpan='2'>Buddy Ratings</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign="center" id="mental">
                      <Header as='h4' image>
                      <Image src='https://image.shutterstock.com/image-vector/illustration-human-brain-profile-cartoon-260nw-78256660.jpg' rounded size='mini' />
                        <Header.Content >
                        Mental
                        <Header.Subheader> Paranoia/Stimulating </Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                    <input
                    class="slider" id="myRange"
                    type="range"
                    min="0"
                    max="10"
                    step=".1"
                    value={this.state.mental}
                    onChange={e => {
                        this.setState({
                            mental: e.target.value
                        });
                    }}
                    />
                    { this.state.mental?
                        <Segment>
                    <p>Mental Score : <h3>{mental}</h3></p>
                    </Segment> : null}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <Header as='h4' image>
                      <Image src='https://previews.123rf.com/images/aninata/aninata1608/aninata160800055/61262264-vector-illustration-with-silhouette-of-yoga-woman-with-bright-watercolor-texture-and-floral-ornament.jpg' rounded size='mini' />
                        <Header.Content>
                          Physical
                          <Header.Subheader>Laziness/Relaxation</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                    <input
                    class="slider" id="myRange"
                    type="range"
                    min="0"
                    max="10"
                    step=".1"
                    value={this.state.physical}
                    onChange={e => {
                        this.setState({
                            physical: e.target.value
                        });
                    }}
                    />
            { this.state.physical?
                <Segment>
            <p>Physical Score : <h3>{physical}</h3></p>
            </Segment> : null}

                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <Header as='h4' image>
                      <Image src='https://img.icons8.com/plasticine/2x/rocket.png' rounded size='mini' />
                        <Header.Content>
                          Velocity
                          <Header.Subheader>Slow/Very Fast</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                    <input
                    class="slider" id="myRange"
                    type="range"
                    min="0"
                    max="10"
                    step=".1"
                    value={this.state.velocity}
                    onChange={e => {
                        this.setState({
                            velocity: e.target.value
                        });
                    }}
                    />
                    <p>{velocity}</p>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <Header as='h4' image>
                        <Image src='https://previews.123rf.com/images/mything/mything1707/mything170700049/82433076-set-of-colorful-cartoon-berries-raspberry-blueberry-blackberry-vector-illustration-flat-icon-isolate.jpg' rounded size='mini' />
                        <Header.Content>
                          Flavor
                          <Header.Subheader>Earthy/Sweet</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                    <input
                    class="slider" id="myRange"
                    type="range"
                    min="0"
                    max="10"
                    step=".1"
                    value={this.state.flavor}
                    onChange={e => {
                        this.setState({
                            flavor: e.target.value
                        });
                    }}
                    />
                    <p>{flavor}</p>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center">
                      <Header as='h4' image>
                        <Image src='https://cdn.clipart.email/6f70ff121c7a71e6bfd4fdfb9553d875_thumbs-up-and-down-clipart_572-368.gif' rounded size='mini' />
                        <Header.Content>
                          Overall
                          <Header.Subheader>Reggie/Dank</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                    <input
                    class="slider" id="myRange"
                    type="range"
                    min="0"
                    max="10"
                    step=".1"
                    value={this.state.overall}
                    onChange={e => {
                        this.setState({
                            overall: e.target.value
                        });
                    }}
                    />
                    <p>{overall}</p>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
                </Table>
                <Segment centered>
                <Button  basic color='green'>Submit</Button>
                </Segment>
    </Segment>
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


export default withRouter(StrainReview)
