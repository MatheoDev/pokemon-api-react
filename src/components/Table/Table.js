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
          pokemons.map((p , index)=> <tr key={index}>
            <td scope="col">{getIdPokemon(p.url)}</td>
            <td scope="col">{p.name}</td>
            <td scope="col"><Link to={`/pokemon/${p.url}`}>{p.url}</Link></td>
          </tr>)
        }
      </tbody>
    </table>
  )
}

export default Table
