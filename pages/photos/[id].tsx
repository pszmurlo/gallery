import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import BackHome from '../../components/backHome'
import Heading from '../../components/heading'
import Layout from '../../components/layout'

const StyledPhoto = styled.img`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

const Container = styled.div`
  max-width: 600px;
  padding: 0 16px;
  margin: auto;
`

type Photo = {
  photo: { id: number; title: string; url: string }
}

const Photo: React.FC<Photo> = ({ photo }) => {
  return (
    <Layout>
      <Head>
        <title>{photo.title}</title>
      </Head>
      <Container>
        <Heading>{photo.title}</Heading>
        <StyledPhoto src={photo.url} alt={photo.title} />
        <BackHome />
      </Container>
    </Layout>
  )
}

export default Photo

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id
  const result = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  const photo = await result.json()

  return {
    props: {
      photo,
    },
  }
}
