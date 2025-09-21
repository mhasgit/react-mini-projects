import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()

    // used when you want a specifc characters to be selected
    // passwordRef.current?.setSelectionRange(0, 10)

    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-4xl mx-auto shadow-md rounded-lg px-7 py-7 my-8 mt-60 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-4xl mb-6">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-2xl bg-white"
            placeholder="password here"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0 cursor-pointer">
            copy
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
          {/* Length */}
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="accent-blue-600 cursor-pointer w-56"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className="text-2xl">Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="h-6 w-6 accent-blue-600"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className="text-2xl">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="h-6 w-6 accent-blue-600"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput" className="text-2xl">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App