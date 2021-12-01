import React from 'react'
import contentStyle from './scss/content.module.scss'
import Card from '../../components/card'
import { year2020, year2021 } from '../../utils/helpers'

const Content = () => {
  return (
    <section className={contentStyle.content}>
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2020: Year in Review</p>
        <div className={contentStyle.cardZone}>
          <Card data={year2020} />
        </div>
      </section>
      {/* year 2021 */}
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2021: Year in Review</p>
        <div className={contentStyle.cardZone}>
          <Card data={year2021} />
        </div>
      </section>
    </section>
  )
}

export default Content
