
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  
  const [puppies, setPuppies] = useState(puppyList)
  return (
    <>
      <div>
        {
          puppies.map((element)=> {
            return <p>{puppy.name}</p>
          })


        }
      </div>
    </>
  )
}

export default App
