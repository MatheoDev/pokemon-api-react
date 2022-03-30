import { Link } from "react-router-dom"

const Table = ({pokemons}) => {
  const getIdPokemon = (url) => {
    return url.substring(34).replace('/', '')
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        {
          pokemons.map((p , index) => <tr key={index}>
            <td>{getIdPokemon(p.url)}</td>
            <td>{p.name}</td>
            <td><Link to={`/pokemon/${getIdPokemon(p.url)}`}>{p.url}</Link></td>
          </tr>)
        }
      </tbody>
    </table>
  )
}

export default Table
