import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button
} from 'semantic-ui-react'
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Home from "../Components/Home";
import StrainForm from '../Components/StrainForm'
import UserContentDisplay from '../Components/UserContentDisplay'
import Search from '../Components/Search'
import NewDispensaryForm from '../Components/NewDispensaryForm'
import EditDispensaryForm from '../Components/EditDispensaryForm'
import NewStrainForm from '../Components/StrainForm'
import EditStrainForm from '../Components/EditStrainForm'
import Profile from '../Components/Profile.js'
import StrainProfile from '../Components/StrainProfile.js'
import StrainReview from '../Components/StrainReview.js'

import Error from "../Components/Error";






const GuestContainerLayout = (props) => {

     console.log(props)

return (

  <div>
    <Menu fixed='top' inverted>
      <Container>
            <Link to="/dashboard">
        <Menu.Item as='a' header>
          My Buds
        </Menu.Item>
    </Link>
        <Menu.Item position='right'>
            {props.user?  <Button
                 as={Link} to='/home'
                 >Log Out</Button> : null}
        </Menu.Item>
        <Menu.Item as={Link} to="/home">Home</Menu.Item>
        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
    <Switch>
        <Route
            path="/strains/:strain_name/strainreview/:id"
            render={() => <StrainReview submitNewStrainReviewHandler={props.submitNewStrainReviewHandler} />}
            />
        <Route path="/strains/:strain_name/:id"
            render={() => <StrainProfile user={props.user, console.log("GUEST CONTAINER", props)}  strains={props.strains} />} />
        <Route
            path="/:username/newstrain"
            render={() => <NewStrainForm submitHandler={props.submitHandler} user={props.user} />}
            />
            <Route
                path="/:username/editstrain/:id"
                render={() => <EditStrainForm editStrainHandler={props.editStrainHandler} user={props.user} />}
                />
        <Route
            path="/:username/newdispensary"
            render={() => <NewDispensaryForm submitHandler={props.submitHandler} user={props.user} />}
            />
            <Route
                path="/:namespace/editdispensary/:id"
                render={() => <EditDispensaryForm editDispensaryHandler={props.editDispensaryHandler} user={props.user} dispensary={props.dispensary} />}
                />
        <Route
            path="/signup"
            render={() => <Signup submitHandler={props.submitHandler} />}
            />
        <Route
            path="/login"
            render={() => <Login loginHandler={props.loginHandler} />}
            />
        <Route path="/strains" render={renderProps => {
          return (
            <div>
            <Search></Search>
            <UserContentDisplay strains={props.strains} user={props.user} deleteDispensaryRequest={props.deleteDispensaryRequest}/>
            </div>
          )
        }} />
        <Route path="/home" render={() => <Home/>} />
        <Route path="/" component={Error} />
    </Switch>

    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)
}

export default withRouter(GuestContainerLayout)
