import Comment from './components/Comment';
import SubmitComment from './components/SubmitComment';
import { CommentsProvider } from './context/CommentsContext';
import "./styles.css";


function App() {

  return (
    <CommentsProvider>
      <div className='App'>
        <Comment />
        <br />
        <SubmitComment />
      </div>
      </CommentsProvider>
  );
}

export default App;
