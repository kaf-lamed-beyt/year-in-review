import React from 'react'
import contentStyle from './scss/content.module.scss'
import Card from '../../components/card'
import { year2020, year2021 } from '../../utils/helpers'
import Search from '../../components/Search'

const Content = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  // input handler
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  /**
   * filtered article results based on the searchTerm
   * of the users or vistors of year-in-review.netlify.app
   * */
  const filteredArticle2020 = year2020.filter((article) => {
    return article.author.toLocaleLowerCase().includes(searchTerm)
  })

  const filteredArticle2021 = year2021.filter((article) => {
    return article.author.toLocaleLowerCase().includes(searchTerm)
  })

  return (
    <section className={contentStyle.content}>
      <Search name="search" onSearch={handleChange} val={searchTerm} />
      {/* year 2021 */}
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2021: Year in Review</p>
        <div className={contentStyle.cardZone}>
          <Card data={filteredArticle2021} />
        </div>
      </section>
      <section className={contentStyle.projects} id="articles">
        <p className={contentStyle.title}>2020: Year in Review</p>
        <div className={contentStyle.cardZone}>
          <Card data={filteredArticle2020} />
        </div>
      </section>
    </section>
  )
}

export default Content
