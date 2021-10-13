import React from 'react'
import footStyle from './scss/footer.module.scss'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={footStyle.root}>
      <div className={footStyle.copyright}>
        <p>
          Created By <a href="https://twitter.com/calebolojo">Seven</a> for
          Everyone <BiCopyright /> {year}
        </p>
      </div>
    </footer>
  )
}

export default Footer
