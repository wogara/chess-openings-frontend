import { useState } from 'react'
import ChessGame from "./components/ChessGame.jsx";
import './App.css'

function App() {
  const [opening, setOpening] = useState(null);
  return (
    <>
      <button onClick={() => setOpening("Scotch")}>Scotch Opening</button>
      <button onClick={() => setOpening("Italian")}>Italian Game</button>
      {/* Add more opening buttons as needed */}
      <button onClick={() => setOpening(null)}>Clear Selection</button> {/* Optional: Allow users to clear the selection */}

      {opening && <ChessGame opening={opening}/>}
      
    </>
  )
}

export default App
