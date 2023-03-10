import styled from 'styled-components'

const AccueilStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1095px;
  max-width: 1240px;
  border: 2px solid black;
`
const ImgSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 1240px;
  height: 223px;
  background-image: url('../../assets/img01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
`
const GalleryStyle = styled.section`
  border-radius: 20px;
  background-color: #f6f6f6;
  width: 1240px;
  height: 829px;
  margin: 171px 100px;
  border: 2px solid black;
`

function Accueil() {
  return (
    <AccueilStyle>
      <ImgSection>
        <h1>Chez vous, partout et ailleurs</h1>
      </ImgSection>
      <GalleryStyle></GalleryStyle>
    </AccueilStyle>
  )
}

export default Accueil
