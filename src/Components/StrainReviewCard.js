import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const StrainReviewCard = props => {

//find out props to see if there is a user, if user then edit, if not,
    const strainreview = props.strainreview

    return (
        <Card raised>
        {console.log(props)}
            <Card.Content id={props.strainreview.id} name={props.strainreview.strain_name} centered>
              <div  id={props.strainreview.id} name={props.strainreview.strain_name}>
                      <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
              </div>

              <Card.Header>{props.strainreview.strain_name}</Card.Header>
              <Card.Meta>{props.strainreview.strain_type}</Card.Meta>
              <Card.Description>
                
              </Card.Description>
            </Card.Content>

          </Card>
    )
}

export default withRouter(StrainReviewCard)
