import React from 'react'

export default function App () {
  const [counter, setCounter] = React.useState(0)

  return (
    <div className="container text-center pt-5">
      <button
        className="btn btn-primary"
        onClick={() => setCounter(c => c + 1)}
      >
        Count up
      </button>
      <h1 className="mt-3">{counter}</h1>
    </div>
  )
}
