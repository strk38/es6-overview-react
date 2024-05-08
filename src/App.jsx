import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data));
  }, [])

  // const watches = [
  //   { id: 1, name: 'Apple Watch', price: 200 },
  //   { id: 2, name: 'Samsung Watch', price: 300 },
  //   { id: 3, name: 'MI Watch', price: 400 },
  // ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      <Sunglass></Sunglass>

    </>
  )
}

export default App
