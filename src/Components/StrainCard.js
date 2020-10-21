import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const StrainCard = props => {
    const editstrainpage = "/" + props.strain.strain_name + "/editstrain/" + props.strain.id
    const viewstrainpage = "/strains/" + props.strain.strain_name + "/" + props.strain.id
//find out props to see if there is a user, if user then edit, if not,
    const user = props.user

    return (
        <Card raised>
            <Card.Content id={props.strain.id} name={props.strain.strain_name} centered>
              <div  id={props.strain.id} name={props.strain.strain_name}>
                      <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
              </div>

              <Card.Header>{props.strain.strain_name}</Card.Header>
              <Card.Meta>{props.strain.strain_type}</Card.Meta>
              <Card.Description>
                {props.strain.description}
              </Card.Description>
            </Card.Content>
            <Card.Content centered>
                <div>

              <Link to={viewstrainpage}>
                <Button basic color='green'  id={props.strain.id}>
                  View Profile
                </Button>
                </Link>
              </div>
            </Card.Content>
            {user? <Card.Content extra fluid>
            <Link to={viewstrainpage}>
              <Button basic color='green'  id={props.strain.id}>
                Review Strain
              </Button>
              </Link>
          </Card.Content> : null}
          </Card>
    )
}

export default withRouter(StrainCard)
