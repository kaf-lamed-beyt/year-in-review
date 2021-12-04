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
