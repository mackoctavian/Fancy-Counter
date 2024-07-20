import { Count } from "./Count"
import CountButton from "./CountButton"
import ResetButton from "./ResetButton"
import Title from "./Title"

function App() {
  return (
    <main>
      <div className="card">
      <Title />
      <Count />
      <ResetButton />
      <CountButton />
      </div>
    </main>
  )
}

export default App