
function vectorRotation() {
  const myButton = document.getElementByClassName('apropos_titleCard_vector')
  const logo = document.getElementByClassName('apropos_titleCard_vector')
  myButton.addEventListener('click', () => {
    logo.add('rotate')
  })
}

export default vectorRotation
