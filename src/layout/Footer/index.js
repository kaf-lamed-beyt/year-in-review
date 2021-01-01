import React from 'react'
import footStyle from './style/footer.module.scss'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className={footStyle.root}>
      <div className={footStyle.copyright}>
        <p>
          Created By <a href="https://twitter.com/calebolojo">aoa</a> for
          Everyone <BiCopyright /> {date}
        </p>
      </div>
    </footer>
  )
}

export default Footer
