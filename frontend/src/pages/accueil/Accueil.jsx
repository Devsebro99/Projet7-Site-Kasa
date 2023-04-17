import { Link } from 'react-router-dom'
import React from 'react'
import datas from '../../datas/Logement.json'
import './accueil.css'
import imgOceanFalaise from '../../assets/img01.svg'

function Accueil() {
  return (
    <main className="pageAccueil">
      <img
        className="pageAccueil_imgBackground"
        src={imgOceanFalaise}
        alt="Falaise Ocean"
      />
      <h1 className="pageAccueil_txtBackground">
        Chez vous, partout et ailleurs
      </h1>
      <article className="pageAccueil_gallery">
        {datas.map((loge) => (
          <Link
            key={`datas-${loge.id}`}
            to={`/logement/${loge.id}`}
            style={{
              textDecoration: 'none',
            }}
          >
            <aside className="pageAccueil_titleLocation">
              <h2 className="pageAccueil_titleLocation_h2">{loge.title}</h2>
            </aside>
            <aside
              className="pageAccueil_cardData"
              style={{
                backgroundImage: `url(${loge.cover})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></aside>
          </Link>
        ))}
      </article>
    </main>
  )
}

export default Accueil
