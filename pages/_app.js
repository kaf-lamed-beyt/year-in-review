import React from 'react'
import '../styles/globals.scss'
import '../styles/variables.scss'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../src/theme'
import { DotLoader } from 'react-spinners'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    setLoading(!false)
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Awesome Year in Reviews</title>
        <link rel="icon" type="image/ico" href="/robocon.png" />
        <meta name="theme-color" content="rgba(225, 18, 51)" />
        <meta
          name="description"
          content="A gallery of year-in review articles written by folks in the tech community"
        />
        <meta
          property="og:title"
          content="Year in Review Gallery"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="A gallery of year-in review articles written by folks in the tech community"
          key="ogdesc"
        />
        <meta
          property="og:image"
          content={`https://year-in-review.netlify.app/img/review.png`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://year-in-review.netlify.app"
          key="ogsitename"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&family=Ubuntu:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
