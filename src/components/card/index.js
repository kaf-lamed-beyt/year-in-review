import React from 'react'
import PropTypes from 'prop-types'
import cardStyle from './scss/card.module.scss'

const Card = ({ data }) => {
  return (
    <>
      {data.map((article, index) => {
        return (
          <div className={cardStyle.root} key={index}>
            <div className={cardStyle.details}>
              <div className={cardStyle.latter}>
                <p className={cardStyle.articleTitle}>{article.title}</p>
                <span>{article.when}</span>
              </div>
              <div className={cardStyle.border}></div>
              <p className={cardStyle.projBody}>{article.previewText}</p>
              <p className={cardStyle.author}>{article.author}</p>
              <p className={cardStyle.projLink}>
                <a href={article.readMore} target="__blank">
                  Read more
                </a>
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

Card.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Card
