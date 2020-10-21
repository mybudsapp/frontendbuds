import React from 'react'
import {
  Icon,
  Image,
  Responsive,
  Segment,
  Visibility,
  Feed,
  Card,
  Grid,
  Dropdown,
  Menu,
  Button
} from 'semantic-ui-react'
import UserCard from './UserCard'
import StrainCard from './StrainCard'
import Buds from '../mybuds-v2.png'

import Filter from './Search'

class AllUsersFeed extends React.Component {

    state = {
        users:[],
        advancedFilter: false,
            searchByName: '',
            ageGroup: '',
            personality_type: ''
    }

    componentDidMount = () => {
        let token = localStorage.token

        fetch("http://localhost:3000/api/v1/users", {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "content-type": "application/json",
            accepts: "application/json"
          }
        })
          .then(resp => resp.json())
          .then(usersData => {
            this.setState({
              users: usersData
          });
          console.log(usersData)
          })
    }


    handleClick = (e) => {
        //this should send person to profile of the user they pressed on
        console.log("in the handle click", e.target.name)

        this.props.history.push("/username/" + e.target.name)
    }

    handleSearch = e => {
    this.setState({
      searchByName: e.target.value
    });
  };

  handleLocationSubmit = locationInfo => {
      let location = {...locationInfo}

      this.setState({
        location: location
      })
  }

  handleAdvancedFilter = () => {
      this.setState({
          advancedFilter: !this.state.advancedFilter
      })
  }

  displayFiltersSelected = () => {
      //should count how many keys have a true value within the state
  }

  //needs to exclude the user that is doing the searching

  searchedByNameUsers = () => {
      let users = [];
      if (this.state.searchByName === "") {
          users = this.state.users;
      } else {
          users = this.state.users.filter(user =>
              user.username.toLowerCase().includes(this.state.searchByName.toLowerCase())
          );
      }
      return users.map(user => {
          return <Grid.Column width={3}><UserCard user={user} id={user.id} handleClick={this.handleClick} handleViewUserProfile={this.props.handleViewUserProfile}/></Grid.Column>;
          });
      };

    render(){


        // const filteredUsers = this.state.users.filter(rapper => rapper.name.includes(this.state.searchByName))
        //
        // const Cards = filteredRappers.map(rapper => {
        //     return <RapCard key={rapper.name} name={rapper.name}
        //     sadImg={rapper.sadImage}
        //     happyImg={rapper.happyImage}/>
        //     })




        return(

            <Grid divided='vertically'>
            <Grid.Row>
  <Icon name="at" size="big" position="left"/>
  <div class="ui input"><input type="text" placeholder="Search" onChange={this.handleSearch} /></div>
  {this.state.advancedFilter? <Filter handleAdvancedFilter={this.handleAdvancedFilter} handleLocationSubmit={this.handleLocationSubmit}/> : <button class="ui button" type="checkbox" onClick={this.handleAdvancedFilter}>Advanced Filter</button>}
            </Grid.Row>
            <Grid.Row columns={4}>
                {console.log(this.state)}
            {this.searchedByNameUsers()}
            </Grid.Row>
            </Grid>
        )
    }
}








class AllStrainsFeed extends React.Component {


        state = {
            strains:[],
            advancedFilter: false,
                searchByName: '',
                ageGroup: '',
                personality_type: ''
        }

        componentDidMount = () => {

            fetch("http://localhost:3000/api/v1/strains", {
              method: "GET",
              headers: {
                "content-type": "application/json",
                accepts: "application/json"
              }
            })
              .then(resp => resp.json())
              .then(strainsData => {
                this.setState({
                  strains: strainsData
              });
              console.log(strainsData)
              })
        }


        handleClick = (e) => {
            //this should send person to profile of the user they pressed on
            console.log("in the handle click", e.target.name)

            this.props.history.push("/strain/" + e.target.name)
        }

        handleSearch = e => {
        this.setState({
          searchByName: e.target.value
        });
      };

      handleLocationSubmit = locationInfo => {
          let location = {...locationInfo}

          this.setState({
            location: location
          })
      }

      handleAdvancedFilter = () => {
          this.setState({
              advancedFilter: !this.state.advancedFilter
          })
      }

      displayFiltersSelected = () => {
          //should count how many keys have a true value within the state
      }

      //needs to exclude the user that is doing the searching

      searchedByNameStrains = () => {
          let strains = [];

          if (this.state.searchByName === "") {
              strains = this.state.strains
          } else {
              strains = this.state.strains.filter(strain =>
                  strain.strain_name.toLowerCase().includes(this.state.searchByName.toLowerCase())
              );
          }

          return strains.map(strain => {
              return <StrainCard user={this.props.user}strain={strain} handleViewStrainProfile={this.props.handleViewStrainProfile} id={strain.id}/>
              });
          };




          // searchedByAdvanced = () => {
          //     let strains = [];
          //
          //     if (this.state.searchByName === "") {
          //         strains = this.state.strains
          //     } else {
          //         strains = this.state.strains.filter(strain =>
          //             strain.strain_name.toLowerCase().includes(this.state.searchByName.toLowerCase())
          //         );
          //     }
          //     return strains.map(strain => {
          //         return <StrainCard strain={strain} id={strain.id} handleClick={this.handleClick} handleViewStrainProfile={this.props.handleViewStrainProfile}/>;
          //         });
          //     };




        render(){


            // const filteredUsers = this.state.strains.filter(rapper => rapper.name.includes(this.state.searchByName))
            //
            // const Cards = filteredRappers.map(rapper => {
            //     return <RapCard key={rapper.name} name={rapper.name}
            //     sadImg={rapper.sadImage}
            //     happyImg={rapper.happyImage}/>
            //     })




            return(
                <Segment>
                <Segment>
      <Icon name="at" size="big" position="left"/>
      <div class="ui input"><input type="text" placeholder="Search" onChange={this.handleSearch} /></div>
     <Filter handleAdvancedFilter={this.handleAdvancedFilter} handleLocationSubmit={this.handleLocationSubmit}/>
        </Segment>
                <Segment>
                <Card.Group itemsPerRow={4} doubling raised>
                    {console.log(this.state)}
                {this.searchedByNameStrains()}
            </Card.Group>
        </Segment>
    </Segment>
            )
        }
    }



export const BasicFriendsFeed = (props) => {
    if(props.user.friends > 1){
    return(
  <Card.Content>
     <Card.Header>Friends Activity</Card.Header>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <Card.Content>
           <Card.Header>You Have No Friends Yet :(</Card.Header>
           </Card.Content>
    )
}


}

export const FriendsPhotosFeed = (props) => {
    if(props.user.friends > 1){
    return(
  <Card.Content>
     <Card.Header>Friends Activity</Card.Header>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <Card.Content>
           <Card.Header>You Have No Friends Yet :(</Card.Header>
           </Card.Content>
    )
}


}

export const FriendsStrainFeed = (props) => {
    if(props.user.friends > 1){
    return(
  <Card.Content>
     <Card.Header>Friends Activity</Card.Header>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <Card.Content>
           <Card.Header>You Have No Strains Yet :(</Card.Header>
           </Card.Content>
    )
}


}

export const RecentActivityFeed = (props) => {

    if(props.user.friends > 1){
    return(
  <Card.Content>
     <Card.Header>Friends Activity</Card.Header>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <Card.Content>
           <Card.Header>You Have No Activity Yet :(</Card.Header>
           </Card.Content>
    )
}



}

export {AllUsersFeed, AllStrainsFeed}
