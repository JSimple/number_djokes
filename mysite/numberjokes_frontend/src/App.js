import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchJokes = async () => {
    try {
      const res = await fetch('http://localhost:8000/jokes_site/');
      const jokes = await res.json();
      setJokes(jokes);
    } catch (e) {
      console.log(e);
    }
  } 
  fetchJokes()},[])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
