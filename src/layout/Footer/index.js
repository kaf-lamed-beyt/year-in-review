import React from 'react'
import footStyle from './style/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footStyle.root}>
      <div className={footStyle.copyright}>
        <p>
          Created By Devs for Everyone
        </p>
      </div>
    </footer>
  )
}

export default Footer
