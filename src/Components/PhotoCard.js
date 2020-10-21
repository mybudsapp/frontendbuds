import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const PhotoCard = props => {
    const editphotopage = "/" + props.photo.photo_name + "/editphoto/" + props.photo.id
    const viewphotopage = "/photos/" + props.photo.photo_name + "/" + props.photo.id
//find out props to see if there is a user, if user then edit, if not,
    const user = props.user

    return (

        <Card id={props.photo.id} name={props.photo.name} raised>

        {console.log(props.photo)}
            <Card.Content id={props.photo.id} name={props.photo.name} centered>
              <div  id={props.photo.id} name={props.photo.name}>
                      <Image centered fluid id="photo" src={props.photo.url}></Image>
              </div>

              <Card.Header>{props.photo.description}</Card.Header>

              <Card.Description>

              </Card.Description>
            </Card.Content>
            <Card.Content centered>
                <div>

              <Link to={viewphotopage}>
                <Button basic color='green'  id={props.photo.id}>
                  View
                </Button>
                </Link>
                <Button basic color='green'  id={props.photo.id} onClick={props.handleDeletePhoto}>
                Delete
                </Button>
              </div>
            </Card.Content>
            {user? <Card.Content extra fluid>
            <Link to={viewphotopage}>
              <Button basic color='green'  id={props.photo.id}>
                Review Strain
              </Button>
              </Link>
          </Card.Content> : null}
          </Card>
    )
}

export default withRouter(PhotoCard)
