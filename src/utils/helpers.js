import moment from 'moment'
import { twenty, twentyOne, twentyTwo } from './articles'

// the sort-by-date functions of all articles
export const year2020 = twenty.sort((a, b) => {
  return b.date - a.date
})

export const year2021 = twentyOne.sort((a, b) => {
  return b.date - a.date
})

export const year2022 = twentyTwo.sort((a, b) => {
  return b.date - a.date
})

/**
 *  an helper function that returns the date an article
 *  is added to this project/website
 * */
export const calculateFromNow = (articleDate) => {
  return moment(articleDate).fromNow()
}
