import { useState } from 'react'
import CharacterDisplay from './CharacterDisplay';

function StarWars() {
  const [charID, setCharID] = useState('');
  const [data, setData] = useState(null)

  const fetchID = async() => {
    const path = `https://swapi.dev/api/people/${charID}/`
    const res = await fetch(path)
    const json = await res.json()

    const worldUrl = json.homeworld
    const worldRes = await fetch(worldUrl)
    const worldJSON = await worldRes.json()

    // set data

    console.log(json)
    const name = json.name
    const birthYear = json.birth_year
    const homeworld = worldJSON.name
    const height = json.height
    const mass = json.mass
    console.log(birthYear)

    setData({
      name, birthYear, homeworld, height, mass
  })
  }

  return (
    <div className="StarWars">
      <form onSubmit={e => {
          e.preventDefault()
          fetchID()
      }}>
          <input
              placeholder="Enter id here!"
              value={charID}
              onChange={e => setCharID(e.target.value)}
          />
      </form>
      {data ? <CharacterDisplay {...data}/> : <p>Ready</p>}   
    </div>
  )
}

export default StarWars