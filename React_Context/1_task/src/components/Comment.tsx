import React from 'react'
import { useComments } from '../context/CommentsContext'

export type CommentType = {
    id: string,
    author: string,
    comment: string,
    votes: number
}

const Comment = () => {

    const {comments} = useComments()
    console.log(comments)

    if(!comments) return (<div>Looking for comments</div>)
    return (
        <>
        {
            comments.map(comment => 
                <div id={comment.id}>
                    <div>{comment.author}</div>
                    <div>{comment.comment}</div>
                    <div>{comment.votes}</div>
                </div>
                
            )
        }
        </>
    )
}

export default Comment