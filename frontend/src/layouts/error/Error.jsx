import { Link } from 'react-router-dom'
import './error.css'

function Error() {
  return (
    <div className="error_Body">
      <h1 className="error_h1">404</h1>
      <h2 className="error_h2">Oups! La page que vous demandez n'existe pas</h2>
      <Link to="/" className="error_linkAccueil">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
