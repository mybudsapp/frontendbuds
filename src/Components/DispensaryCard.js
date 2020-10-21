import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const DispensaryCard = props => {

    const editdispensarypage = "/" + props.dispensary.namespace + "/editdispensary/" + props.dispensary.id

    return (
        <Card dispensary={props.dispensary.id} raised>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3Cy53gWMssu1axL9mfb7nkSTtNkBG01m-q1uJEWk6zN_uRSKL&usqp=CAU"></img>
              <h1>{props.dispensary.namespace}</h1>
              <Link to={editdispensarypage}>
              <button>Edit Profile</button>
              </Link>
              <button>View Profile</button>
              <button onClick={(e) => props.deleteDispensaryRequest(e)}>Delete</button>
              </Card>
    )
}

export default withRouter(DispensaryCard)
