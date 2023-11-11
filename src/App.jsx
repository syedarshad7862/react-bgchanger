import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red", fontWeight: "bold"}}>Red</button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue", fontWeight: "bold"}}>Blue</button>
        <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow", fontWeight: "bold"}}>Yellow</button>
        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green", fontWeight: "bold"}}>Green</button>
        <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gray", fontWeight: "bold"}}>Gray</button>
        <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "pink", fontWeight: "bold"}}>Pink</button>
        <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white", fontWeight: "bold"}}>White</button>
        <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "lavender", fontWeight: "bold"}}>lavender</button>
        <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black", fontWeight: "bold"}}>Black</button>
      </div>
      </div>

    </div>
  )
}

export default App
