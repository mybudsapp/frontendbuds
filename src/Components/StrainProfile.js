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
  Card
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





class StrainProfile extends Component {

    state = {
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

//document.getElementById("myH2").style.color = "#ff0000"

//grab the elements, check the number, if its 1-2 then red. 3-4 orange, 5-6yellow, 7-8 light green, 9-10 dark green

render(){

    const {strain} = this.state
    const reviewstrain = "/strains/" + strain.strain_name + "/strainreview/" + strain.id

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
        {console.log("DAGODAMNSTRAIHSON", this.state)}
    <Table celled structured size='large' color="green" >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Categories</Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>Buddy Ratings</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Indica</Table.HeaderCell>
        <Table.HeaderCell>Sativa</Table.HeaderCell>
        <Table.HeaderCell>Expert</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{strain.strain_name}</Table.Cell>
        <Table.Cell>{strain.strain_type}</Table.Cell>
        <Table.Cell textAlign='left'>Overall</Table.Cell>
        <Table.Cell textAlign='center'>{strain.overall_indica_score}</Table.Cell>
        <Table.Cell textAlign='center'>
          {strain.overall_sativa_score}
        </Table.Cell>
        <Table.Cell textAlign='center'>
        {strain.overall_hybrid_score}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <Segment>

  <Link to={reviewstrain}>
  <Button basic color='green'>Review</Button>
  </Link>
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


    return (


      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >

      <Segment raised textAlign='center'>
      <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
      <Segment raised>
      <Header as='h2' textAlign='center'>
              {strain.strain_name}
            </Header>
             <Header.Subheader>{strain.strain_type}</Header.Subheader>
             <Header.Subheader>{strain.location}</Header.Subheader>
            <Table striped celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Buddy Ratings</Table.HeaderCell>

              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign="center">
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                    <Header.Content>
                      Indica
                      <Header.Subheader>Overall Rating</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign="center">{}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                    <Header.Content>
                      Sativa
                      <Header.Subheader>Overall Rating</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign="center">15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                    <Header.Content>
                      Expert
                      <Header.Subheader>Overall Rating</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign="center">12</Table.Cell>
              </Table.Row>

            </Table.Body>
            <Header as='h4' image>

            <Header.Content>

            <Button basic color='green' >Review</Button>
            </Header.Content>
            </Header>
            </Table>
      </Segment>


    </Segment>
    <Segment  textAlign='center' >
      <h3>Review Comments </h3>
      <a>
      <Image size="tiny" centered src="https://cloudcar.com/wp-content/uploads/2018/06/gif-bounce-arrow.gif" ></Image>
      </a>


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


export default withRouter(StrainProfile)
