import React from 'react'

const NewsPage = (props) => {
  return (
    <ul>
      { props.news.map( item =>
        (
          <li 
            key={item.linkId}
          >
            <h2>{item.announcement}</h2>
            <img src={item.imageURL} alt="" />
            <div>{item.body}</div>
            <div><strong>{item.hashtag}</strong></div>
          </li>
        )
      )}
    </ul>
  )
}

export default NewsPage