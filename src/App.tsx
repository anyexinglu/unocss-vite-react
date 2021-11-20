import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="text-lg op30">
      <div className={`m-${count}`}>
        <button className={`m-3 color-${count % 2 ? 'green' : 'red'}`} onClick={() => setCount((count) => count + 1)}>
          My Button <span className="m-2">{ count }</span>
        </button>
      </div>
    </div>
  )
}

export default App