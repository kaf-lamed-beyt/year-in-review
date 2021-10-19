import React from 'react'
import contentStyle from './scss/content.module.scss'
import Card from '../../components/card'
import { sortedArticlesByDate } from '../../articles'

const Content = () => {
  return (
    <section className={contentStyle.content}>
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2020: Year in Review</p>
        <div className={contentStyle.cardZone}>
          <Card data={sortedArticlesByDate} />
        </div>
      </section>
    </section>
  )
}

export default Content
