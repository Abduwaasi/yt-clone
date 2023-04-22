import React from 'react'
import Link from 'next/link'
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '@/utils/constants'
import { AiFillCheckCircle } from "react-icons/ai"

import styles from "./ChannelCard.module.scss"
const ChannelCard = ({ channel }) => {
    console.log(channel)
    return (
        <Link href={`/channel/${channel.id.channelId}`}>
            <div className={styles.container}>
                <div className={styles.center}>
                    <img src={channel?.snippet?.thumbnails?.high?.url || demoVideoUrl} alt={channel.snippet?.title} className={styles.img} />
                    <div className={styles.title}>{channel?.snippet?.channelTitle}{" "}<AiFillCheckCircle size={16} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ChannelCard