import axios from "axios"
import { useEffect, useState } from "react"
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import Table from "../../components/Table/Table"

const Home = () => {
  const [datas, setDatas] = useState(null)
  const [ressource, setRessource] = useState('https://pokeapi.co/api/v2/pokemon')
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  useEffect(() => {
    axios.get(ressource)
      .then(response => {
        setDatas(response.data)
        setPrev(response.data.previous)
        setNext(response.data.next)
      })
      .catch(error => setDatas(null))
  }, [ressource])
  
  return (
    <div>
      <Jumbotron text="Home" />
      <div className="container p-4">
        { datas && 
          <>
            <Table pokemons={datas.results}/>
            <div className="d-flex justify-content-between">
              { prev && <button className="btn btn-primary" onClick={() => setRessource(prev)}>Précédent</button>}
              { next && <button className="btn btn-primary" onClick={() => setRessource(next)}>Suivant</button>}
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Home
