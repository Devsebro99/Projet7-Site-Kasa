import React from 'react'
// import datas from '../../datas/Logement.json'
import './logement.css'

function Logement() {
  return (
    <main className="loge">
      <article
        className="loge_image"
        style={{
          // backgroundImage: `url(${loge.cover})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          background: 'black',
        }}
      ></article>

      <article className="loge_titleHost">
        <section className="loge_titleHost_sectionOne">
          <h1 className="loge_titleHost_sectionOne_title">Title</h1>
          <h2 className="loge_titleHost_sectionOne_location">Location</h2>
          <h3 className="loge_titleHost_sectionOne_tags">Tags</h3>
        </section>
        <section className="loge_titleHost_sectionTwo">
          <div className="loge_titleHost_sectionTwo_profileName">
            <h2>Name</h2>
            <img alt="Profile" />
          </div>
          <div className="loge_stars">Rating</div>
        </section>
      </article>

      <article className="loge_details">
        <section className="loge_details_description">
          <h2>Description</h2>
          <aside>Decription du logement à recolter dans le fichier Json</aside>
        </section>
        <section className="loge_details_equipement">
          <h2>Equipements</h2>
          <aside>Equipements du logement à recolter dans le fichier Json</aside>
        </section>
      </article>
    </main>
  )
}

export default Logement
