import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const style = {
  padding: '0em 0em 2em',
  fontWeight:400,
  fontSize:38
}
const PARTNERS = [
  {img:'skoda-v.png'},
  {img:'mts.png'},
  {img:'william-lawsons.png'},
  {img:'parliament.png'},
  {img:'aeroflot.png'},
  {img:'universal-music-group.png'},
  {img:'volkswagen.png'},
  {img:'fightnights.png'},

]

const Partners = () => (
  <Segment style={{ padding: '8em 0em', margin:0 }} >
    <Container>
    <Header as='h1' style={style}>Наши партнеры</Header>

      <Grid verticalAlign='middle' centered doubling columns={4} >
        {PARTNERS.map((p,i) =>
          <Grid.Column key={i}>
            <Image src={'img/partners/' + p.img} />
          </Grid.Column>
        )}
      </Grid>
    </Container>

  </Segment>
)


export default Partners
