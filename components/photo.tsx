import React from 'react'
import styled from 'styled-components'

const StyledPhoto = styled.img`
  max-width: 150px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

type Photo = {
  srcVal: string
}

const Photo: React.FC<Photo> = ({ srcVal }) => {
  return <StyledPhoto src={srcVal} />
}

export default Photo
