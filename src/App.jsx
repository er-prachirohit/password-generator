import React, { useState, useEffect, useCallback, useRef } from "react";

export default function App() {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  
  // useCallback hook
  const passGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$^&*(}{)_-?/|][;";

    //password generate
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
      // we can also use str[char] instead of str.charAt(char) , charAt is old method
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, length]);

  //useEffect hook
  
  useEffect(() => {
    passGenerate();
  }, [numberAllowed, charAllowed, length]);
  
  // useRef Hook
  const passwordRef = useRef(null);

  const copyToClipbord = () =>{
    // select password
    passwordRef.current?.select();

    // copy to clipbord
    window.navigator.clipboard.writeText(passwordRef.current.value);
    
  }



  return (
    <>
      <div className="text-center">
        <h1
          className="bg-gradient-to-r from-blue-600 to-pink-700 bg-clip-text
         text-transparent font-bold text-4xl mt-20"
        >
          Generate a secure Password
        </h1>
        <div className="h-[200px] max-w-2xl mt-20 bg-gray-400 text-white m-auto shadow-lg rounded-lg">
          <div className="m-4 px-5 py-8 flex items-center justify-center ">
            <input
              className="w-[80%] text-blue-700 px-3 py-2 text-2xl"
              type="text"
              placeholder="password"
              value={Password}
              readOnly
              ref={passwordRef}
            />

            <button className="bg-blue-600 px-5 py-3 text-white  text-md  hover:bg-blue-700
                  active:bg-blue-800 active:scale-95 transition-all duration-150"
                  onClick={copyToClipbord}>
              Copy
            </button>
          </div>
          <div className="flex gap-2 justify-evenly text-blue-800 text-lg">
            <div className="flex items-center text-md gap-x-1">
              <input
                type="range"
                min={6}
                max={25}
                value={length}
                className="cursor-pointer"
                
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
              />

              <label> Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                Checked={charAllowed}
                id="charinput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charinput"> Characters Allowed</label>
            </div>
            <div>
              <input
                type="checkbox"
                Checked={numberAllowed}
                id="numberinput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberinput"> Numbers Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
