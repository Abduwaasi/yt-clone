import React from 'react'

import styles from "./CommentCard.module.scss"
const CommentCards = ({ data }) => {
    return (
        <div>
            {data?.map(item => {
                const { id, snippet: { topLevelComment: { snippet } } } = item
                console.log({ snippet })
                return <div key={id} className={styles.wrapper}>
                    <img src={snippet.authorProfileImageUrl} alt={snippet.authorDisplayName} className={styles.profile} />
                    <div>
                        <h6>{snippet.authorDisplayName}</h6>
                        <p>{snippet.textDisplay
                        }</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CommentCards