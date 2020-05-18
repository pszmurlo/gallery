import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import Photo from '../components/photo'

type Photos = {
  photos: { albumId: number; id: number; title: string; url: string; thumbnailUrl: string }[]
}

const HomePage: React.FC<Photos> = ({ photos }) => {
  return (
    <Layout home>
      {photos.map((photo) => (
        <Link key={photo.id} href="/photos/[id]" as={`/photos/${photo.id}`}>
          <a>
            <Photo srcVal={photo.thumbnailUrl} />
          </a>
        </Link>
      ))}
    </Layout>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<Photos> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
  const photos = await res.json()

  return {
    props: {
      photos,
    },
  }
}
