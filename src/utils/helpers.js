import moment from 'moment'
import { articles } from './articles'

export const sortedArticlesByDate = articles.sort((a, b) => {
  return b.date - a.date
})

export const calculateFromNow = (articleDate) => {
  return moment(articleDate).fromNow()
}
