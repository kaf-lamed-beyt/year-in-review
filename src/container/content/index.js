import React from 'react'
import contentStyle from './style/content.module.scss'
import Grid from '@material-ui/core/Grid'
import Card from '../../../components/card'
import { articles } from '../../articles'

const Content = () => {
  return (
    <section className={contentStyle.content}>
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2020: Year in Review</p>
        <Grid container>
          <div className={contentStyle.cardZone}>
            {articles.map((article, index) => {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <div className={contentStyle.details}>
                      <div className={contentStyle.latter}>
                        <p className={contentStyle.articleTitle}>
                          {article.title}
                        </p>
                        <span>{article.when}</span>
                      </div>
                      <div className={contentStyle.border}></div>
                      <p className={contentStyle.projBody}>
                        {article.previewText}
                      </p>
                      <p className={contentStyle.author}>{article.author}</p>
                      <p className={contentStyle.projLink}>
                        <a href={article.readMore} target="__blank">
                          Read more
                        </a>
                      </p>
                    </div>
                  </Card>
                </Grid>
              )
            })}
          </div>
        </Grid>
      </section>
    </section>
  )
}

export default Content
