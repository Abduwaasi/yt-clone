import React from 'react'

import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '@/utils/constants'
import styles from "./VideoCard.module.scss"
import Link from 'next/link'
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log({ snippet })
    return (
        <div className={styles.container}>
            <Link href={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                <div className={styles.img}>
                    <img src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl} alt={snippet?.title || demoVideoTitle} />
                </div>
            </Link>
            <div className={styles.content}>
                <img src={demoProfilePicture} alt={snippet?.title || demoVideoTitle} className={styles.avatar} />
                <div className={styles.textWrapper}>
                    <h6>{snippet?.title.slice(0, 70) || demoVideoTitle}</h6>
                    <p>{snippet?.channelTitle || demoChannelTitle}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard