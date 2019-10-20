import React from 'react'
import "./TagList.css"
import Button from 'react-bootstrap/Button'

const TagsList = (props) => {
  const uniqueTagsList = (array) => {
    let seen = {};
    return array.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }
  
  return (
    <ul className="tagList">
      <Button
        as="li"
        variant="primary" 
        size="sm"
        className="tagItem"
      >All</Button>
      { uniqueTagsList(props.tags).map( (item, index) =>
        (
          <Button 
            as="li"
            variant="primary" 
            size="sm"
            key={index}
            className="tagItem"
          >
            {item}
          </Button>
        )
      )}
    </ul>
  )
}

export default TagsList