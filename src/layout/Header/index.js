import React from 'react'
import headStyle from './scss/header.module.scss'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

const Header = () => {
  return (
    <section id={headStyle.headCont}>
      <header>
        <div className={headStyle.brand}>
          <Link href="/">
            <h3>Year Wrap</h3>
          </Link>
        </div>
        <div className={headStyle.navLinks}>
          <ul>
            <a
              href="https://github.com/Caleb335/year-in-review"
              target="__blank"
            >
              <li>Contribute</li>
            </a>
          </ul>
        </div>
      </header>
      <div className={headStyle.hero}>
        <Fade direction="up" cascade triggerOnce>
          <p className={headStyle.h2}>
            An archive of <span>"</span>year in review<span>"</span> articles.
          </p>
          <div className={headStyle.illustration}>
            <img src="/img/review.svg" alt="review illustration" />
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Header
