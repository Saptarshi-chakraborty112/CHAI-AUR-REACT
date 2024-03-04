import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8);
  const[number,setNumber] = useState(false);
  const[character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");

  //ref hooks

  const passWordRef = useRef(null);

  const passwordGenerator = useCallback(() => 
        {
          let pass= "" 
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          if (number) str +="123456789"
          if (character) str +="~!@#$%^&*()_+{}<>[]"

          for (let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(char)
           
          }
          setPassword(pass)

        }, [length,number,character,setPassword])

    
    const copyPasswordtoClipBoard = useCallback(() => {
      passWordRef.current?.select();
      passWordRef.current?.setSelectionRange(0,90)
      window.navigator.clipboard.writeText(password)
    },[password])    

    useEffect(() => {passwordGenerator()}, [length, number, character, passwordGenerator])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-3 my-8 text-orange-600 bg-black">
      <h1 className="text-white text-center"> PASSWORD GENERATOR</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-5">
        <input type="text"
        value={password}
        className="outline-none w-full py-2 px-2"
        placeholder="passWord"
        readOnly
        ref={passWordRef} />

      <button onClick={copyPasswordtoClipBoard} className="bg-red-700 hover:bg-red-400 text-yellow-400 outline-none px-3 py-1 shrink-0">Copy</button>
     </div>
     <div className="flex text-sm gap-x-3">
      <div className="flex items-center gap-x-2">
        <input type="range"min={6}max={100}value={length} className="cursor-pointer" onChange={() => {setLength(event.target.value)}}/>
        <label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-2">
        <input type="checkbox" defaultChecked = {number} id="numberInput" onChange={() =>{setNumber((prev) => !prev)}}/>
        <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-2">
        <input type="checkbox" defaultChecked = {character} id="characterInput" onChange={() =>{setCharacter((prev) => !prev)}}/>
        <label>Characters</label>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
