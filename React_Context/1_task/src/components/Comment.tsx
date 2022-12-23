import React from 'react'
import { useComments } from '../context/CommentsContext'
import './Comment.css'

export type CommentType = {
    id: string,
    author: string,
    comment: string,
    votes: number
}

const Comment = () => {

    const { comments, setComments } = useComments()

    const handleVotes = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {

        const id = e.currentTarget.id

        const isUpvote =  e.currentTarget.value === '+'  
        
        const newComments: CommentType[] | undefined =  comments?.map(comment => {

            if(comment.id === id ) {

                const newVotes = isUpvote ? comment.votes + 1 : comment.votes - 1
                
                return {...comment, votes: newVotes}
            }

            return comment
        })
        if(newComments) setComments(newComments)
        
    }

    if (!comments) return (<div>Looking for comments</div>)

    return (
        <>
            {
                comments.map(comment =>
                    <div className='comment_container' id={comment.id}>
                        <div className="comment_votes">
                            <input id={comment.id} type="button" value="+" onClick={handleVotes} />
                            <div>{comment.votes}</div>
                            <input id={comment.id} type="button" value="-" onClick={handleVotes}/>
                        </div>
                        <div className="comment_data">
                            <div>{comment.author}</div>
                            <div>{comment.comment}</div>
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default Comment