import './apropos.css'
import DropDown from '../../components/dropDown/Dropdown'

function Apropos() {
  return (
    <main className="apropos">
      <article className="apropos_imgBackground"></article>
      <article className="apropos_notices">
        <DropDown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes."
        />
        <DropDown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du
          voisinage entraînera une exclusion de notre plateforme."
        />
        <DropDown
          title="Service"
          description=" Nos équipes se tiennent à votre disposition pour vous fournir
          une expérience parfaite. N'hésitez pas à nous contacter si vous
          avez la moindre question."
        />
        <DropDown
          title="Responsabilité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
          que pour les voyageurs, chaque logement correspond aux critères
          de sécurité établis par nos services. En laissant une note aussi
          bien à l'hôte qu'au locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos
          hôtes."
        />
      </article>
    </main>
  )
}

export default Apropos
