import React from 'react'
import { useComments } from './CommentsProvider'

export type CommentType = {
    author: string,
    comment: string | undefined
}

const Comment = () => {

    const { comments } = useComments()

    return (
        <>
            {
                comments.map(comment => {
                    return (
                        <>
                            <div>{comment.author}</div>
                            <div>{comment.comment}</div>
                            <br/>
                        </>
                        
                    )
                })
            }

        </>

    )
}

export default Comment