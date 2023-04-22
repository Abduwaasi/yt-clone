
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import numeral from 'numeral'
import fetchData from '@/utils/fetchFromApi'
import styles from "./Channel.module.scss"
import { AiFillCheckCircle, AiOutlineBell, AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { Video } from '@/components'

const ChannelPage = () => {
    const router = useRouter()
    const [channelDetails, setChannelDetails] = useState({})
    const [channelVideo, setChannelVideo] = useState([])
    const { query: { id } } = router

    useEffect(() => {
        fetchData(`channels?path=snippet,statistics&id=${id}`)
            .then(data => setChannelDetails(data.items[0]))
        fetchData(`search?channelId=${id}&part=snippet,id&order=date&maxResults=50`)
            .then(data => setChannelVideo(data.items))
    }, [id])

    const { id: channelId, snippet, statistics, brandingSettings } = channelDetails
    return (
        <div className={styles.main}>
            <section className={styles.banner} >
                <img src={channelDetails?.brandingSettings?.image?.bannerExternalUrl} alt={`${brandingSettings?.channel?.title} banner`} />
            </section>
            <section className={styles.channel}>
                <div className={styles.detail}>
                    <img src={snippet?.thumbnails?.medium?.url} alt="thumbnail" />
                    <div>
                        <h4>{snippet?.title}{" "}<AiFillCheckCircle size={16} /></h4>
                        <p>{snippet?.customUrl
                        }{" "}{numeral(statistics?.subscriberCount).format('0a')}{" "}Subscribers {" "}{numeral(statistics?.videoCount).format(")a")} Videos</p>
                        <p>{snippet?.description.slice(0, 70)}...{" "} <AiOutlineRight /></p>
                    </div>
                </div>
                <button className={styles.sub_btn}>
                    <AiOutlineBell />
                    <span>Subscribe</span>
                    <AiOutlineDown />
                </button>
            </section>
            <section>
                <Video video={channelVideo} />
            </section>
        </div>
    )
}

export default ChannelPage