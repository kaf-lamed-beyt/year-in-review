import React from 'react'
import contentStyle from './style/content.module.scss'
import Grid from '@material-ui/core/Grid'
import Card from '../../../components/card'
import { articles } from '../../articles'

const Content = () => {
  return (
    <section className={contentStyle.content}>
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>Articles</p>
        <Grid container xs>
          <div className={contentStyle.cardZone}>
            {articles.map((article, index) => {
              return (
                <Card key={index}>
                  <div className={contentStyle.details}>
                    <p className={contentStyle.articleTitle}>{article.title}</p>
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
              )
            })}
          </div>
        </Grid>
      </section>
    </section>
  )
}

export default Content
