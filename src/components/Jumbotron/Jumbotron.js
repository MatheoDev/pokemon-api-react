import './jumbotron.css'

const Jumbotron = ({text, img = null}) => <div className="jumbotron">
  <h1 className="text-white fs-3">{text}</h1>
  {img && <img className="jumbotron__img" src={img} alt={img} />}
</div>

export default Jumbotron
