import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

import styles from "./Video.module.scss"

const Video = ({ video }) => {

    if (!video?.length) return <div>Loading...</div>
    return (
        <section className={styles.container}>
            {
                video.map((item, index) => {
                    return < div key={index} >
                        {item?.id?.videoId && <VideoCard video={item} />}
                        {item?.id?.channelId && <ChannelCard channel={item} />}
                    </div>
                })
            }
        </section >
    )
}

export default Video