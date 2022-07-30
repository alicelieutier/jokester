import './App.css';
import FlipCard from './components/FlipCard';
import TextCard from './components/TextCard';
import { useEffect, useState } from 'react';

function App() {

  const [showBack, setShowBack] = useState(false);
  const [joke, setJoke] = useState({ setup: '', delivery: '' });

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
      .then(res => res.json())
      .then(data => setJoke(data))
      .catch(err => console.err(err));
      console.log("hi")
  }, [])

  return (
    <div className="App">
      <FlipCard 
        front={<TextCard text={joke.setup} />}
        back={<TextCard text={joke.delivery} />}
        showBack={showBack}
        flip={() => {
          console.log('flip');
          setShowBack(!showBack)
        }}
      />
    </div>
  );
}

export default App;
