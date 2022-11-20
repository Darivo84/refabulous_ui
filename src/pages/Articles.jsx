import React from 'react'
// import { Link } from 'react-router-dom'
import HeaderSignedIn from '../components/HeaderSignedIn';
import SingleArticle from '../components/SingleArticle';
import Footer from '../components/Footer';
import '../styles/style.scss'

const Articles = () => {
  return (
    <>
      <HeaderSignedIn />
      <div className="articles">
        <div className="articlesWrapper">
          <div className="articlesTitleWrapper">
            <h1 className="articlesTitle">Articles</h1>
            <div className="articlesContainer">
              {/* <Link className="articleLink" to='/single-article' > */}
                <SingleArticle />
              {/* </Link> */}
              {/* <Link className="articleLink" to='/single-article'> */}
                <SingleArticle />
              {/* </Link> */}
              {/* <Link className="articleLink" to='/single-article'> */}
                <SingleArticle />
              {/* </Link> */}
            </div>
            <div className="articlesContainer">
              {/* <Link className="articleLink" to='/single-article'> */}
                <SingleArticle />
              {/* </Link> */}
              {/* <Link className="articleLink" to='/single-article'> */}
                <SingleArticle />
              {/* </Link> */}
              {/* <Link className="articleLink" to='/single-article'> */}
                <SingleArticle />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Articles