function CharacterDisplay(props) {
  const { name, birthYear, homeworld, height, mass } = props
  return (
    <div className="display">
      <h1>Name: {name}</h1>
      <h2>Birth Year: {birthYear}</h2>
      <h2>Homeworld: {homeworld}</h2>
      <h4>Height: {height} cm</h4>
      <h4>Weight: {mass} kg</h4>
    </div>
  )
}

export default CharacterDisplay