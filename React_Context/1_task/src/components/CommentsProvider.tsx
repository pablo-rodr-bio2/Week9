import { createContext, useContext} from "react"
import { firstComments } from "../db/comments"
import { CommentType } from "./Comment"

export type CommentContent = {
  comments: CommentType[],
  setComments: (c: CommentType[]) => void
}

export const MyCommentContent = createContext<CommentContent>({
  comments: firstComments,
  setComments: () => {}
})

export const useComments = () => useContext(MyCommentContent)