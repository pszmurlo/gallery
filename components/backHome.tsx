import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const BackHomeLink = styled.a`
  font-size: 20px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  margin-top: 24px;
`

const BackHome: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <BackHomeLink>← Back to home</BackHomeLink>
      </Link>
    </Container>
  )
}

export default BackHome
