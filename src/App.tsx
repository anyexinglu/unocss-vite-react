import { useState } from 'react'
import cn from 'classnames'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="text-lg op30 p-2">
      <div className={cn('m-9', {
        ['color-yellow']: count % 2
      })}>
        <button className={count % 2 ? 'color-blue' : 'color-red'} onClick={() => setCount((count) => count + 1)}>
          My Button <span className="myxy-9">{ count }</span>
        </button>
      </div>
    </div>
  )
}

export default App