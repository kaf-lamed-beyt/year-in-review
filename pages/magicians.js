import React from 'react'
import Head from 'next/head'
import Layout from '../src/layout'
import Magicians from '../src/container/contributors'

export default function ContributorsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Magicians &mdash; Awesome Year in Reviews</title>
      </Head>
      <Layout>
        <Magicians />
      </Layout>
    </React.Fragment>
  )
}
