import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Pokemon = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => setData(null))
  }, [])

  return (
    <div className="container">
      {data && data.name}
    </div>
  )
}

export default Pokemon
