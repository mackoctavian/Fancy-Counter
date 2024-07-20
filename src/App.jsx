import { useEffect, useState } from "react"
import { Count } from "./Count"
import ResetButton from "./ResetButton"
import Title from "./Title"
import ButtonContainer from "./ButtonContainer"


function App() {
  const [count, setCount] = useState(0)
  const lock = count === 5 ? true : false

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        const newCount = count + 1
        if (newCount > 5) {
          return setCount(5)
          
        }

        setCount(newCount)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
   
  }, [count])

  return (
    <main>
      <div className={`card ${lock ? 'card--limit' : ""}`}>
      <Title lock={lock}/>
      <Count count={count}/>
      <ResetButton setCount={setCount}/>
      <ButtonContainer setCount={setCount} lock={lock}/>
      </div>
    </main>
  )
}

export default App