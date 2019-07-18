import React from 'react'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import StrainCard from "./StrainCard"
import StrainForm from "./StrainForm"
import { Card, Icon, Image } from 'semantic-ui-react'

import Search from "./Search"

class UserStrainContainer extends React.Component {

  state = {
    strains: [],
    personalityType: '',
    mostRated:[],
    topRatedByGroup: [],
    verifiedStrains: [],
    strainName: '',
    location: ''
  }

  // Defining it in strainContainer
  // Executed in Form
  // Effects State in strainContainer
  handleSubmit = (event, artistObj) => {
    event.preventDefault()
    // Sending over an object from another component
    // We need to update our state with this ADDED to the
    // list of current strains
    // fetch('http://localhost:3005/strainList', {
    //   method: "POST",
    //   body: JSON.stringify(artistObj)
    // }).then().then()
    console.log('From strainCard to our handleSubmit', artistObj)
    const newSetOfstrains = [ artistObj , ...this.state.strains]
    this.setState({
      strains: newSetOfstrains
    }, (state, props) => console.log(state))

    // DO NOT DO
    // console.log('This is the value of state in handleSubmit', this.state)
  }

  handleSearchChange = (e) => {
    console.log('This is the value from the input field', e.target.value)
    this.setState({
      "searchTerm": e.target.value
    })
  }

  // componentDidMount
  // When we want to update the page after initial render
  componentDidMount(){
    fetch("http://localhost:3005/strains")
    .then(res => res.json())
    .then(strainsJSON => {
      this.setState({
        strains: strainsJSON
      })
    })
  }

  render() {
       const {strains} = this.state;

      this.state.strains.map( (item, i) => <StrainCard strain={item} key={i}/>)

// copy your state.data to a new array and sort it by itemM in ascending order
// and then map

const mostRated = [].concat(this.state.strains)
    .sort((a, b) => a.reviewCount > b.reviewCount)
    .map((item, i) =>
        <StrainCard strain={item} key={i}/>
    );
    this.setState({ mostRated })
  


    // console.log('This is the value of state', this.state)
    const filteredstrains = this.state.strains.filter(strain => strain.name.includes(this.state.searchTerm))

    const strainCards = filteredstrains.map(strain => {
      return <StrainCard key={strain.name} name={strain.name}
        />
    })

console.log(this)
    return (
      <div>
      <Switch>
        <Route path="/strains/:name" render={(renderProps) => {
          // The goal is to render one strain
          // We need to get the router props to find the props to send
          // for our StrainCard
          if(this.state.strains.length > 0 ){
          const urlstrainName = renderProps.match.params.name
          console.log('Here is the strain name from the url', urlstrainName)
          console.log('This is the state of the strains', this.state.strains)
          const strain = this.state.strains.find(strain => strain.name.toLowerCase() === urlstrainName.toLowerCase())
          return <StrainCard name={strain.name}  />
        } else {
          return null
        }
        }} />
        <Route path="/strains" render={renderProps => {
          return (
            <div>
            <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
              {strainCards}
            </div>
          )
        }} />
        <Route path="/strains/new" render={renderProps => {
          return (
              <Card.Group>
         <Card fluid color='red' header='Option 1' />
         <Card fluid color='orange' header='Option 2' />
         <Card fluid color='yellow' header='Option 3' />
       </Card.Group>
     )

        }} />
      </Switch>
      </div>
    )
  }
}

export default withRouter(UserStrainContainer)
