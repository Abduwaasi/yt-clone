import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

import styles from "./RelatedVideo.module.scss"
const RelatedVideo = ({ data }) => {

    return (
        <div>
            {data?.map(item => {
                const { id: { videoId }, snippet: { thumbnails, title, channelTitle
                } } = item
                return (

                    <div className={styles.container}>
                        <Link href={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                            <img src={thumbnails.medium.url} alt={title} />
                        </Link>
                        <div>
                            <h5>{title}</h5>
                            <span className={styles.channelTitle}>{channelTitle}{" "}<AiFillCheckCircle size={16} /></span>

                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default RelatedVideo