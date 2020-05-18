import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: 32px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
`

const Heading: React.FC = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}

export default Heading
