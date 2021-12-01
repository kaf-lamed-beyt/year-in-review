import moment from 'moment'
import { twenty, twentyOne } from './articles'

export const year2020 = twenty.sort((a, b) => {
  return b.date - a.date
})

export const year2021 = twentyOne.sort((a, b) => {
  return b.date - a.date
})

// export const sorter = (year) => {
//   year.sort((a, b) => {
//     return b.date - a.date
//   })
// }

export const calculateFromNow = (articleDate) => {
  return moment(articleDate).fromNow()
}
