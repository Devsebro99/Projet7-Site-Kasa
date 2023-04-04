import React from 'react'
import { useParams } from 'react-router-dom'

import datas from '../../datas/Logement.json'
import Error from '../../layouts/error/Error'
import './logement.css'
import DropDown from '../../components/dropDown/Dropdown'

function Logement() {
  const { id } = useParams()
  const loge = datas.find((p) => p.id === id)
  console.log(loge)

  if (!loge) {
    return <Error />
  }
  return (
    <main className="loge">
      {/* Image font */}
      <article
        className="loge_image"
        style={{
          backgroundImage: `url(${loge.cover})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      {/* title and profile */}
      <article className="loge_titleHost">
        {/* premiere partie */}
        <section className="loge_titleHost_sectionOne">
          <div>
            <h1 className="loge_titleHost_sectionOne_title">{loge.title}</h1>
            <h2 className="loge_titleHost_sectionOne_location">
              {loge.location}
            </h2>
          </div>
          <h3 className="loge_titleHost_sectionOne_tags">{loge.tags}</h3>
        </section>

        {/* deuxieme partie */}
        <section className="loge_titleHost_sectionTwo">
          <div className="loge_titleHost_sectionTwo_profileName">
            <h2 className="loge_titleHost_sectionTwo_title">
              {loge.host.name}
            </h2>
            <img src={loge.host.picture} alt="Profile" />
          </div>

          <div className="loge_stars">{loge.rating}</div>
        </section>
      </article>

      {/*description and equipements  */}
      <article className="loge_details">
        <DropDown title="Description" description={loge.description} />
        <DropDown title="Equipements" description={loge.equipments} />
      </article>
    </main>
  )
}

export default Logement
