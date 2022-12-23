import { Card } from './components/Card';
import { useCardData } from './components/hooks/useCardData';
import './App.css'




function App() {

  const { episodes, loading } = useCardData()

  if (loading) return (<div className="App"> Loading  </div>)

  if (episodes) return (
    <div className="App">
      {
        episodes.map(episode => <Card key={episode.id} episode={episode}/>)
      }
    </div>

  )

  return (
    <div className="App">
      Waiting to start Fetching
    </div>
  );

}

export default App;

