import React from 'react'
import contentStyle from './scss/content.module.scss'
import Card from '../../components/card'
import { year2020, year2021, year2022 } from '../../utils/helpers'
import Search from '../../components/Search'
import YearsFilter from '../../components/filter'
import { useRouter } from 'next/router'

const Content = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = React.useState('')
  const [years, setYears] = React.useState(['2022', '2021', '2020'])
  const [selectedYear, setSelectedYear] = React.useState(
    router.query.year || null
  )
  const [activeYear, setActiveYear] = React.useState(router.query.year || null)

  // input handler
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleYears = (year) => {
    setSelectedYear(year)
    setActiveYear(year)
    router.push({ pathname: '/', query: { year } })
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

  const filteredArticle2022 = year2022.filter((article) => {
    return article.author.toLocaleLowerCase().includes(searchTerm)
  })

  let articles

  if (selectedYear === '2020') {
    articles = filteredArticle2020
  } else if (selectedYear === '2021') {
    articles = filteredArticle2021
  } else if (selectedYear === '2022') {
    articles = filteredArticle2022
  } else {
    articles = year2020.concat(year2021, year2022).reverse()
  }

  return (
    <section className={contentStyle.content}>
      <div className={contentStyle.filterControls}>
        <Search name="search" onSearch={handleChange} val={searchTerm} />
        <YearsFilter
          years={years}
          filter={handleYears}
          activeYear={activeYear}
        />
      </div>
      {/* year 2022 */}
      <section className={contentStyle.allReviews}>
        <section className={contentStyle.projects} id="articles">
          <p className={contentStyle.title}>
            {selectedYear
              ? `${selectedYear}  — Year in Review`
              : 'All EOY reviews'}
          </p>
          <div className={contentStyle.cardZone}>
            <Card data={articles} />
          </div>
        </section>
      </section>
    </section>
  )
}

export default Content
