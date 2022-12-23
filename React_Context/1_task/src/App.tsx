import React, { useState } from 'react';
import Comment, { CommentType } from './components/Comment';
import SubmitComment from './components/SubmitComment';
import { firstComments } from './db/comments'
import { MyCommentContent } from './components/CommentsProvider';
import "./styles.css";


function App() {

  const [comments, setComments] = useState<CommentType[]>(firstComments)

  return (
    <MyCommentContent.Provider value={{ comments, setComments }} >
      <div className='App'>
        <Comment />
        <SubmitComment />
      </div>
    </MyCommentContent.Provider>
  );
}

export default App;
