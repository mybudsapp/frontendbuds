import React from 'react'
import {Card,Form, Label, Button} from 'semantic-ui-react'

const Search = (props) => {
  return (
    <div>
      <input onChange={props.handleSearchChange} name="searchTerm" value={props.searchTerm} />
    </div>
  )
}

export default Search
