import React, { useState } from 'react'
import { useComments } from '../context/CommentsContext'
import { CommentType } from './Comment'

type Props = {}

const SubmitComment = (props: Props) => {

    const {comments, setComments} = useComments()

    const [text, setText] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const id = String(crypto.randomUUID)
        const author = "Myself"
        const comment = text
        const votes = 0

        const newComment: CommentType = { id, author, comment, votes }
        
        if (comments) setComments([...comments, newComment])
    }

    return (
        <form onSubmit={handleSubmit} >
            <label> Please submit your comment</label>
            <input type="text" name="submit_text" id="submit_text" onChange={(e) => setText(e.currentTarget.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SubmitComment