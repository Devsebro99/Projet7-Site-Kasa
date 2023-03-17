import '../../styles/css/accueil.css'

function Accueil() {
  return (
    <div className="pageAccueil">
      <section className="pageAccueil_imgBackground">
        <h1 className="pageAccueil_txtBackground">
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <section className="pageAccueil_gallery">
        <div className="pageAccueil_part">
          <article className="pageAccueil_card">
            <h2 className="pageAccueil_titleLocation">Titre de la location</h2>
          </article>
          <article className="pageAccueil_card">
            <h2 className="pageAccueil_titleLocation">Titre de la location</h2>
          </article>
          <article className="pageAccueil_card">
            <h2 className="pageAccueil_titleLocation">Titre de la location</h2>
          </article>
        </div>
        <div className="pageAccueil_part">
          <article className="pageAccueil_card">
            <h2 className="pageAccueil_titleLocation">Titre de la location</h2>
          </article>
          <article className="pageAccueil_card">
            <h2 className="pageAccueil_titleLocation">Titre de la location</h2>
          </article>
          <article className="pageAccueil_card">
            <h2 className="pageAccueil_titleLocation">Titre de la location</h2>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Accueil
