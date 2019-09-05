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
  Menu
} from 'semantic-ui-react'
import UserCard from './UserCard'
import Search from './Search'

class AllUsersFeed extends React.Component {

    state = {
        users:[],
        searchByName: '',
        filterBy: {
            ageGroup: '',
            personality_type: '',
            location: ''
        }
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
   //if any other filter option is chosen, filter each user here
   //filter by age
   //filter by personality_type
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
  <div class="ui input"><input type="text" placeholder="Search" onChange={this.handleSearch} searchTerm={this.state.searchTerm} /></div>
  <Menu fluid>
      <Dropdown item text='Personality Type' position='left'>
        <Dropdown.Menu>
          <Dropdown.Item>Sativa</Dropdown.Item>
          <Dropdown.Item>Hybrid</Dropdown.Item>
          <Dropdown.Item>Indica</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text='Age Group' position='left'>
        <Dropdown.Menu>
          <Dropdown.Item>20's - 30's</Dropdown.Item>
          <Dropdown.Item>30's - 40's</Dropdown.Item>
          <Dropdown.Item>50's - 60's</Dropdown.Item>
           <Dropdown.Item>Mature</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text='Location' position='left'>
        <Dropdown.Menu >
          <Dropdown.Item>City:<input type="text" placeholder="Search" onChange={this.handleSearch} searchTerm={this.state.searchTerm} onClick={e => e.stopPropagation()} /></Dropdown.Item>
          <Dropdown.Item>
          <select class="ui fluid dropdown" onClick={e => e.stopPropagation()}>
     <option value="AL">Alabama</option>
     <option value="AK">Alaska</option>
     <option value="AZ">Arizona</option>
     <option value="AR">Arkansas</option>
     <option value="CA">California</option>
     <option value="CO">Colorado</option>
     <option value="CT">Connecticut</option>
     <option value="DE">Delaware</option>
     <option value="DC">District Of Columbia</option>
     <option value="FL">Florida</option>
     <option value="GA">Georgia</option>
     <option value="HI">Hawaii</option>
     <option value="ID">Idaho</option>
     <option value="IL">Illinois</option>
     <option value="IN">Indiana</option>
     <option value="IA">Iowa</option>
     <option value="KS">Kansas</option>
     <option value="KY">Kentucky</option>
     <option value="LA">Louisiana</option>
     <option value="ME">Maine</option>
     <option value="MD">Maryland</option>
     <option value="MA">Massachusetts</option>
     <option value="MI">Michigan</option>
     <option value="MN">Minnesota</option>
     <option value="MS">Mississippi</option>
     <option value="MO">Missouri</option>
     <option value="MT">Montana</option>
     <option value="NE">Nebraska</option>
     <option value="NV">Nevada</option>
     <option value="NH">New Hampshire</option>
     <option value="NJ">New Jersey</option>
     <option value="NM">New Mexico</option>
     <option value="NY">New York</option>
     <option value="NC">North Carolina</option>
     <option value="ND">North Dakota</option>
     <option value="OH">Ohio</option>
     <option value="OK">Oklahoma</option>
     <option value="OR">Oregon</option>
     <option value="PA">Pennsylvania</option>
     <option value="RI">Rhode Island</option>
     <option value="SC">South Carolina</option>
     <option value="SD">South Dakota</option>
     <option value="TN">Tennessee</option>
     <option value="TX">Texas</option>
     <option value="UT">Utah</option>
     <option value="VT">Vermont</option>
     <option value="VA">Virginia</option>
     <option value="WA">Washington</option>
     <option value="WV">West Virginia</option>
     <option value="WI">Wisconsin</option>
     <option value="WY">Wyoming</option>
       </select>
           </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </Menu>
            </Grid.Row>
            <Grid.Row columns={4}>
            {this.searchedByNameUsers()}
            </Grid.Row>
            </Grid>
        )
    }
}








class AllStrainsFeed extends React.Component {

    state = {
        strains:[]
    }

    componentDidMount = () => {
        let token = localStorage.token

        fetch("http://localhost:3000/api/v1/strains", {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "content-type": "application/json",
            accepts: "application/json"
          }
        })
          .then(resp => resp.json())
          .then(strainsData => {
            this.setState({
              strains: { ...strainsData.strain }
          });
          console.log(strainsData)
          })
    }

    render(){
        return(

            <Card.Content>
            {console.log("from the activity feed in the strains", this.state)}
               <Card.Header>Strains</Card.Header>
              </Card.Content>
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
