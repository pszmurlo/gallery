import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Heading from '../components/heading'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`

type Layout = {
  home?: boolean
}

const Layout: React.FC<Layout> = ({ children, home }) => {
  return (
    <div>
      <Head>
        <meta name="description" content="Simple gallery" />
        <meta name="og:title" content="Simple gallery" />
      </Head>
      <main>
        {home && <Heading>Gallery</Heading>}
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default Layout
