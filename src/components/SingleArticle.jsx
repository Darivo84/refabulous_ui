import React from 'react'
import '../styles/style.scss'

const SingleArticle = () => {
  return (
    <div className="singleArticle">
      <div className="articleHeader">
        <h4>Article Title</h4>
      </div>
      <div className="articleBody">
        <h5>Description:</h5>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
      </div>
    </div>
  )
}

export default SingleArticle