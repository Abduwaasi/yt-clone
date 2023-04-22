import fetchData from '@/utils/fetchFromApi'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '@/utils/constants'

import ReactPlayer from 'react-player/youtube'

import styles from "./VideoDetail.module.scss"
import { AiFillCheckCircle, AiOutlineBell, AiOutlineDown, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { IoIosShareAlt } from 'react-icons/io'
import { CommentCards, RelatedVideo } from '@/components'
import { MdOutlineSort } from 'react-icons/md'
const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState({})
    const [relatedVideo, setRelatedVideo] = useState([])
    const [comments, setComments] = useState([])
    const router = useRouter()
    const { id } = router.query



    useEffect(() => {
        fetchData(`videos?part=contentDetails,snippet,statistics&id=${id}`)
            .then(data => setVideoDetail(data.items[0]))
            .catch(err => console.log(err))
        fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=50`)
            .then(data => setRelatedVideo(data.items))
        fetchData(`commentThreads?path=snippet&videoId=${id}&maxResults=20`)
            .then(data => setComments(data.items))
    }, [id])
    if (!videoDetail?.snippet) return <div style={{ marginTop: "100px" }}>Loading...</div>
    const { snippet: { thumbnails, title, channelTitle,
    }, statistics } = videoDetail
    return (
        <section className={styles.container}>
            <aside className={styles.left_aside}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className={styles.react_player} />
                <div>
                    <h5 >{title}</h5>
                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <div className={styles.avatar_wrapper}>
                                <img src={thumbnails?.default.url || demoProfilePicture} alt="thumbnail" />
                                <div>
                                    <span className={styles.channel_title}>{channelTitle}{" "}<AiFillCheckCircle size={16} /></span>
                                    <span className={styles.subscribers}>2000k subscribers</span>
                                </div>
                            </div>
                            <button className={styles.sub_btn}>
                                <AiOutlineBell />
                                <span>Subscribe</span>
                                <AiOutlineDown />
                            </button>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.sub_btn}>
                                <button>
                                    <AiOutlineLike size={18} color='white' />
                                </button>
                                <span>{statistics.likeCount}</span>
                                <button>
                                    <AiOutlineDislike size={18} color='white' />
                                </button>
                            </div>
                            <button className={styles.sub_btn}>
                                <IoIosShareAlt size={22} color='white' />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.comments}>
                    <div className={styles.top}>
                        <span className={styles.text}>{statistics.commentCount} Comments</span>
                        <button className={styles.sort}>
                            <MdOutlineSort size={20} color="#ffffff" />
                            <span className={styles.text}>Sort by</span>
                        </button>
                    </div>
                    <div className={styles.inputWrapper}>
                        <span>W</span>
                        <input type="text" placeholder='Add a comment' />
                    </div>
                </div>
                <div className={styles.comment}>
                    <CommentCards data={comments} />
                </div>
            </aside>

            <aside className={styles.right}>
                <RelatedVideo data={relatedVideo} />
            </aside>
        </section>
    )
}

export default VideoDetail