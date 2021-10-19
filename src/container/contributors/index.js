import React from 'react'
import Contributors from 'react-contributors'

// Username of the repo(s) owner.
const owner = 'Caleb335'

// Repository name or array with multiple repositories names.
const repos = ['year-in-review', 'https://github.com/Caleb335/year-in-review']

const Magicians = () => {
  return (
    <div>
      <Contributors owner={owner} repos={repos} />
    </div>
  )
}

export default Magicians
