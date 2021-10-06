import { useState } from 'react'

function StarWars() {
  const [charID, setCharID] = useState('');

  const fetchID = async() => {
    const path = `https://swapi.dev/api/people/${charID}/`
    const res = await fetch(path)
    const json = await res.json()

    console.log(json)
  }
  return (
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
  )
}

export default StarWars