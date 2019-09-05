import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Label,
  Input,
  Card,
} from 'semantic-ui-react'
import Avatar from 'react-avatar'
import Buds from '../mybuds-v2.png'

const UserCard = (props) => {

    return(
      <Card>
      <Card.Content id={props.user.id} name={props.user.username}>
        <div class="ui small image"  id={props.user.id} name={props.user.username}>
                {props.user.avatar? <img src={props.user.avatar.url} name={props.user.username} onClick={(e) => props.handleViewUserProfile(e)}   id={props.user.id} name={props.user.username}/> : <img src={Buds} name={props.user.username} onClick={(e) => props.handleViewUserProfile(e)} id={props.user.id} name={props.user.username} alt="budsimage"/>}
        </div>

        <Card.Header>{props.user.username}</Card.Header>
        <Card.Meta>{props.user.personality_type}</Card.Meta>
        <Card.Description>
          {props.user.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            //should only show friend request if they are not currently friends or pending request
          <Button basic color='green'>
            Friend Request
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
}

export default UserCard
