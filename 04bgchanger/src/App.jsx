import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive");


  return (
    <div className="w-full h-screen duration-150 " style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-gray-400 px-2 py-3 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-3 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} >RED</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-3 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} >Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-3 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} >Blue</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-3 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}} >Black</button>
          <button onClick={() => setColor("White")} className="outline-none px-4 py-3 rounded-full text-black shadow-lg" style={{backgroundColor: "White"}} >White</button>
          <button onClick={() => setColor("Purple")} className="outline-none px-4 py-3 rounded-full text-white shadow-lg" style={{backgroundColor: "Purple"}} >Purple</button>
          <button onClick={() => setColor("Brown")} className="outline-none px-4 py-3 rounded-full text-white shadow-lg" style={{backgroundColor: "Brown"}} >Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
