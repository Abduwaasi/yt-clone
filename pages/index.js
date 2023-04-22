import React, { useState, useEffect } from 'react'
import styles from "./index.module.scss"
import { Video } from '@/components'
import fetchData from '@/utils/fetchFromApi'

const Index = ({ category }) => {
  console.log({ category })
  const [video, setVideo] = useState([])
  // console.log({ video })
  useEffect(() => {
    fetchData(`search?part=snippet%2Cid&q=${category}&maxResults=50`)
      .then(results => setVideo(results.items))

  }, [category])
  console.log({ env: process.env.YOUTUBE_API_KEY })
  return (
    <Video video={video} />
  )
}

export default Index