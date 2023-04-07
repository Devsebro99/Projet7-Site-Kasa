import React from 'react'
import { useParams } from 'react-router-dom'
import datas from '../../datas/Logement.json'
import Error from '../../layouts/error/Error'
import './logement.css'
import DropDown from '../../components/dropDown/Dropdown'
import Stars from '../../components/stars/Stars'
import TagsNames from '../../components/tags/Tags'

function Logement() {
  const { id } = useParams()
  const loge = datas.find((p) => p.id === id)

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
          <aside>
            <h1 className="loge_titleHost_sectionOne_title">{loge.title}</h1>
            <h2 className="loge_titleHost_sectionOne_location">
              {loge.location}
            </h2>
          </aside>
          <TagsNames
            scaleValue={loge.tags}
            classNameTags="tags"
            classNameList="tags_list"
          ></TagsNames>
        </section>

        {/* deuxieme partie */}
        <section className="loge_titleHost_sectionTwo">
          <aside className="loge_titleHost_sectionTwo_profileName">
            <h2 className="loge_titleHost_sectionTwo_title">
              {loge.host.name}
            </h2>
            <img
              className="loge_titleHost_sectionTwo_img"
              src={loge.host.picture}
              alt="Profile"
            />
          </aside>
          <Stars scaleValue={loge.rating}></Stars>
        </section>
      </article>

      {/*description and equipements  */}
      <article className="loge_details">
        <DropDown title="Description" description={loge.description} />
        <DropDown
          title="Equipements"
          description={<TagsNames scaleValue={loge.equipments}></TagsNames>}
        />
      </article>
    </main>
  )
}

export default Logement
