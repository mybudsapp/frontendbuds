import React from 'react'
import {
  Icon,
  Image,
  Responsive,
  Segment,
  Visibility,
  Feed,
  Card
} from 'semantic-ui-react'


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
