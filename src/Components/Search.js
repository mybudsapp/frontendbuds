import React from 'react'
import {Card,Form, Dropdown, Menu, Label, Button} from 'semantic-ui-react'


class Filter extends React.Component {
    state = {
    }



    handleLocation = e => {
//needs to copy the state for what it is then add the state to have one in city and state
//in the state
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    clickLocationSubmit = () => {
        this.props.handleLocationSubmit(this.state)
    }


render(){
  return (
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
            <Dropdown.Menu onChange={e => this.handleLocation(e)}>
              <Dropdown.Item>City:<input type="text" id="City" onClick={e => e.stopPropagation()} /></Dropdown.Item>
              <Dropdown.Item>
              <select class="ui fluid dropdown" id="State" onClick={e => e.stopPropagation()} >
                  <option placeholder="STATE" value="AL">Alabama</option>
                  <option placeholder="STATE" value="AK">Alaska</option>
                  <option placeholder="STATE" value="AZ">Arizona</option>
                  <option placeholder="STATE" value="AR">Arkansas</option>
                  <option placeholder="STATE" value="CA">California</option>
                  <option placeholder="STATE" value="CO">Colorado</option>
                  <option placeholder="STATE" value="CT">Connecticut</option>
                  <option placeholder="STATE" value="DE">Delaware</option>
                  <option placeholder="STATE" value="DC">District Of Columbia</option>
                  <option placeholder="STATE" value="FL">Florida</option>
                  <option placeholder="STATE" value="GA">Georgia</option>
                  <option placeholder="STATE" value="HI">Hawaii</option>
                  <option placeholder="STATE" value="ID">Idaho</option>
                  <option placeholder="STATE" value="IL">Illinois</option>
                  <option placeholder="STATE" value="IN">Indiana</option>
                  <option placeholder="STATE" value="IA">Iowa</option>
                  <option placeholder="STATE" value="KS">Kansas</option>
                  <option placeholder="STATE" value="KY">Kentucky</option>
                <option placeholder="STATE" value="LA">Louisiana</option>
                <option placeholder="STATE" value="ME">Maine</option>
                <option placeholder="STATE" value="MD">Maryland</option>
                <option placeholder="STATE" value="MA">Massachusetts</option>
                <option placeholder="STATE" value="MI">Michigan</option>
                <option placeholder="STATE" value="MN">Minnesota</option>
                <option placeholder="STATE" value="MS">Mississippi</option>
                <option placeholder="STATE" value="MO">Missouri</option>
                <option placeholder="STATE" value="MT">Montana</option>
                <option placeholder="STATE" value="NE">Nebraska</option>
                <option placeholder="STATE" value="NV">Nevada</option>
                <option placeholder="STATE" value="NH">New Hampshire</option>
                <option placeholder="STATE" value="NJ">New Jersey</option>
                <option placeholder="STATE" value="NM">New Mexico</option>
                <option placeholder="STATE" value="NY">New York</option>
                <option placeholder="STATE" value="NC">North Carolina</option>
                <option placeholder="STATE" value="ND">North Dakota</option>
                <option placeholder="STATE" value="OH">Ohio</option>
                <option placeholder="STATE" value="OK">Oklahoma</option>
                <option placeholder="STATE" value="OR">Oregon</option>
                <option placeholder="STATE" value="PA">Pennsylvania</option>
                <option placeholder="STATE" value="RI">Rhode Island</option>
                <option placeholder="STATE" value="SC">South Carolina</option>
                <option placeholder="STATE" value="SD">South Dakota</option>
                <option placeholder="STATE" value="TN">Tennessee</option>
                <option placeholder="STATE" value="TX">Texas</option>
                <option placeholder="STATE" value="UT">Utah</option>
                <option placeholder="STATE" value="VT">Vermont</option>
                <option placeholder="STATE" value="VA">Virginia</option>
                <option placeholder="STATE" value="WA">Washington</option>
                <option placeholder="STATE" value="WV">West Virginia</option>
                <option placeholder="STATE" value="WI">Wisconsin</option>
                <option placeholder="STATE" value="WY">Wyoming</option>
           </select>
               </Dropdown.Item>
               <button class="ui button" type="submit" onClick={e => this.clickLocationSubmit(e)}>Submit</button>

            </Dropdown.Menu>
          </Dropdown>
          <button class="ui button" type="checkbox" onClick={this.props.handleAdvancedFilter}>Advanced Filter Off</button>
      </Menu>
  )
}

}

export default Filter
