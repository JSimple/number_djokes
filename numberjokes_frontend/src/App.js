import './App.css';
import { useState } from "react"
import Stage from './components/Stage'
import GenerateButton from './components/GenerateButton';

// const API_HOST = 'http://localhost:8000';
let _csrfToken = null;

async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await fetch(`/jokes_site/csrf/`, {
      credentials: 'include',
    });
    const data = await response.json();
    _csrfToken = data.csrfToken;
  }
  return _csrfToken;
}

const generate_joke = async(event, set_joke, method = 'POST') => {
  event.preventDefault();
  try {
    const post_object = {
      method: method,
      headers: (
        method === 'POST' ? {'X-CSRFToken': await getCsrfToken()} : {}),
        credentials: 'include',
        'Access-Control-Allow-Credentials' : true
    };
    const res = await fetch(`/jokes_site/`, post_object);
    const joke = await res.json();
    
    set_joke(joke)
    return joke;
  } catch (e) {
    debugger;
    console.log(e);
  }
}



function App() {
  const [joke, set_joke] = useState(null)

  const [enableButton, setEnableButton] = useState(true)

  const toggleButton = () => {
      setEnableButton(!enableButton)
  }

  return (
      <div>
        <form onSubmit={(event) => {
          set_joke(null); 
          generate_joke(event,set_joke);}
          }>
          <GenerateButton enabled = {enableButton} toggleButton = {toggleButton}/>
        </form>
        {joke ? <Stage toggleButton = {toggleButton} joke={joke}/>  : <span></span> }
      </div>
  );
}

export default App;
