import React from 'react'
import HeaderSignedIn from '../components/HeaderSignedIn';
import Footer from '../components/Footer';
import '../styles/style.scss'
import SingleArticle from '../components/SingleArticle';

const SingleArticlePage = () => {
  return (
    <>
    <HeaderSignedIn />
    <div className="articles">
      <div className="articlesWrapper">
        <div className="articlesTitleWrapper">
          <h1 className="articlesTitle">Article Name</h1>
          <div className="articlesContainer">
            <div className="articlesContentWrapper">
              <div className="articleLeft">
                <div style={{ width: "100%", height: "100%", border: "1px solid rgb(1, 19, 72)"}}>
                  <h4>Article Title</h4>
                </div>
                {/* <SingleArticle /> */}
              </div>
              <div className="articleRight">
              <SingleArticle />
              <SingleArticle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default SingleArticlePage