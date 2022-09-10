import React from 'react'
import '../styles/globals.scss'
import '../styles/variables.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>year-in-review archive</title>
        <meta
          name="description"
          content="An archive of year-in review articles written by folks in the tech community"
        />
        {/* Google's meta */}
        <meta itemprop="name" content="year-in-review archive" />
        <meta
          itemprop="description"
          content="An archive of year-in review articles written by folks in the tech community"
        />
        <meta
          itemprop="image"
          content="https://res.cloudinary.com/meje/image/upload/v1662767894/article-covers/year-wraps_cpba4v.png"
        />
        {/* Facebook's meta */}
        <meta property="og:url" content="https://year-in-review.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="year-in-review archive" />
        <meta
          property="og:description"
          content="An archive of year-in review articles written by folks in the tech community"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/meje/image/upload/v1662767894/article-covers/year-wraps_cpba4v.png"
        />
        {/* Twitter's meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="year-in-review archive" />
        <meta
          name="twitter:description"
          content="A gallery of year-in review articles written by folks in the tech community"
        />
        <meta name="twitter:site" content="year-in-review.netlify.app" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/meje/image/upload/v1662767894/article-covers/year-wraps_cpba4v.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&family=Ubuntu:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* search console property verification */}
        <meta
          name="google-site-verification"
          content="9tZUNNHLrSXl1cdc7Bm133pWrarsSvmZI1euPVFJhic"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
