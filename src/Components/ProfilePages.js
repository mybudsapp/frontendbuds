import React from 'react'
import {Card, Grid, Image, Container, Segment} from 'semantic-ui-react'




export class Gallery extends React.Component {

render(){

return(
<Segment>
        <Grid container columns={4}>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
    </Grid.Column>

  </Grid>
</Segment>


)
}
}

export const Friends = () => (
  <Card fluid>
    <Card.Content textAlign="center">
       <h2>mmwcwdcwc</h2>
    </Card.Content>
  </Card>
)

export const Strains = () => (
  <Card fluid>
    <Card.Content textAlign="center">
     <h2>mmhhwwwwwwwwmm</h2>

    </Card.Content>
  </Card>
)
