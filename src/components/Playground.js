/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from 'react'

export default function Playground(props) {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 10))
  // WHETHER RAINING OR NOT
  const [isRaining, setIsRaining] = useState(false)

  const getRandom = (event) => {
    // we are going to put a new random number in state
    // so the JSX will refresh itself with the new data
    setRandomNum(Math.floor(Math.random() * 10))
  }

  const toggleWeather = evt => {
    setIsRaining(!isRaining)
  }

  const style = {
    marginBottom: '4px',
    color: randomNum < 5 ? 'red' : 'green',
  }

  if (randomNum === 1) return <h1>IT IS THE ONE</h1>

  return (
    <div className='container'>
      <h1>This is the playground of {props.friend}</h1>
      <h3 style={style}>The random number is {randomNum}</h3>
      <h4>It is {randomNum % 2 === 0 ? 'even' : 'odd'}</h4>
      {/* a comment */}
      {/* {randomNum < 5 && <h4>It is smaller than 5</h4>} */}
      {/* {randomNum >= 5 && <h4>It is 5 or greater</h4>} */}

      {
        isRaining
          ? <h4>better get umbrella</h4>
          : <h4>better get sunscreen</h4>
      }

      <button onClick={evt => setIsRaining(true)}>make rain</button>
      <button onClick={() => setIsRaining(false)}>make shine</button>
      <button onClick={toggleWeather}>toggle weather</button>

      {
        randomNum < 5
          ? <h4>Smaller than 5</h4>
          : <h4>It is 5 or greater</h4>
      }

      <button onClick={getRandom}>get a new random number</button>
    </div>
  )
}
