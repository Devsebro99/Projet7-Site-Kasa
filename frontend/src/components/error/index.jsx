import '../../styles/css/error.css'

function Error() {
  return (
    <div className="errorBody">
      <h1>404</h1>

      <h2>Oups! La page que vous demandez n'existe pas</h2>

      <div className="buttonRetourAccueil">Retourner sur la page d'accueil</div>
    </div>
  )
}

export default Error
