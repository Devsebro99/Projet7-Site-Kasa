import '../../styles/css/apropos.css'

function Apropos() {
  return (
    <div className="apropos">
      <section className="apropos_imgBackground"></section>
      <section className="apropos_legalNotices">
        <article>
          <div className="apropos_titleCard">
            <h3>Fiabilité</h3>
          </div>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </article>

        <article>
          <div className="apropos_titleCard">
            <h3>Respect</h3>
          </div>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </article>

        <article>
          <div className="apropos_titleCard">
            <h3>Service</h3>
          </div>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </article>

        <article>
          <div className="apropos_titleCard">
            <h3>Responsabilité</h3>
          </div>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Apropos
