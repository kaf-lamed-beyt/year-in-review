import React from 'react'
import contentStyle from './scss/content.module.scss'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/card'
import { sortedArticles } from '../../articles'

const Content = () => {
  return (
    <section className={contentStyle.content}>
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2020: Year in Review</p>
        <Grid container>
          <div className={contentStyle.cardZone}>
            <Grid item xs={12} sm={6}>
              <Card data={sortedArticles} />
            </Grid>
          </div>
        </Grid>
      </section>
    </section>
  )
}

export default Content
