import React, { useState } from 'react'
import { useComments } from './CommentsProvider'
import { CommentType } from './Comment'

const SubmitComment = () => {
    const [newTextComment, setNewTextComment] = useState<string>()

    const { comments, setComments } = useComments()

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const newComment: CommentType = {
            author: "Myself",
            comment: newTextComment
        }
        const newResult = [...comments, newComment]
        setComments(newResult)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label > Enter your comment: </label>
            <input type="text" name="newComment" id="newComment" onChange={(e)=>setNewTextComment(e.target.value)} />
            <input type="submit"></input>
        </form>
            
            
        </>
    )
}

export default SubmitComment