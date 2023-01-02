import React from 'react'
import style from './scss/filter.module.scss'

const YearsFilter = ({ years, filter, activeYear }) => {
  return (
    <div className={style.container}>
      <p>Filter by year</p>
      <ul>
        {years.map((year) => {
          return (
            <li
              onClick={() => filter(year)}
              className={year === activeYear ? style.active : ''}
            >
              {year}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default YearsFilter
