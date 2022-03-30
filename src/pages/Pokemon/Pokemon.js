import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Jumbotron from "../../components/Jumbotron/Jumbotron"

const Pokemon = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  /**
   * First litter uppercase for name of pokemon
   * @param {*} string 
   * @returns 
   */
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => setData(null))
  }, [])
  
  return (
    <>
      {data &&
        <>
          <Jumbotron text={`#${data.id} - ${capitalizeFirstLetter(data.name)}`} img={data.sprites.versions['generation-viii'].icons.front_default} />
          <div className="container mt-4">
            <div className="container__forme">
              <h2>Normal/Shiny</h2>
              <img src={data.sprites.front_default} alt={data.sprites.front_default} />
              <img src={data.sprites.front_shiny} alt={data.sprites.front_shiny} />
            </div>
            {console.log(data)}
          </div>
        </>
      }
    </>
  )
}

export default Pokemon
