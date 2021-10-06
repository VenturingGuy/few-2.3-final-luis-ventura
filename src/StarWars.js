import { useState } from 'react'

function StarWars() {
  const [charID, setCharID] = useState('');
  return (
        <form onSubmit={e => {
            e.preventDefault()
            // fetch character function
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