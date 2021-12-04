import React from 'react'
import { SearchBox } from './style/search.styled'
import { BiSearchAlt2 } from 'react-icons/bi'

const Search = ({ val, onSearch, ...props }) => {
  return (
    <SearchBox>
      <input
        type="text"
        value={val}
        placeholder="Search for a question with a keyword or phrase"
        onChange={onSearch}
        {...props}
      />
      <span>
        <BiSearchAlt2 />
      </span>
    </SearchBox>
  )
}

export default Search
