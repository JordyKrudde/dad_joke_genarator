import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import JokeGenarator from './JokeGenarator'
import axios from 'axios'
import { useEffect } from 'react'

async function getJoke() {
  const request =  await  axios.get('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
    }
  })
  return request.data.joke 
}

function App() {
  const [joke, setJoke] = useState(null)
  
  useEffect(() => {
    async function fetchJoke() {
      const joke = await getJoke();
      setJoke(joke);
    }
    fetchJoke();
  }, [])

  function nextJoke() {
    async function fetchJoke() {
      const joke = await getJoke();
      setJoke(joke);
    }
    fetchJoke();
  }

  return (
    <JokeGenarator joke={joke} nextJoke={nextJoke}/>
  )
}

export default App
