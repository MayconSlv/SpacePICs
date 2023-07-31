const dataInput = document.getElementById('data-input')

dataInput.addEventListener('keypress', (e) => {
  if(e.keyCode < 47 || e.keyCode > 57) {
    e.preventDefault()
  }

  const inputLegth = dataInput.value.length

  if (inputLegth !== 1 || inputLegth !== 3) {
    if (e.keyCode == 189){
      e.preventDefault()
    }
  }

  if (inputLegth == 2) {
    dataInput.value += '-'
  } else if (inputLegth == 5) {
    dataInput.value += '-'
  }
})

const apiKey = 'rkaCLJfqofxBmUUvwC0q4Fa8fVrhXQ111WQqvONI'
const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`



function renderImage(imageProps) {
  const { title: apodTitle, url, explanation } = imageProps

  const title = document.getElementById('image-title')
  const image = document.getElementById('image')
  const description = document.getElementById('image-explanation')

  const emptyPic = document.getElementById('empty-pic')
  const apodPicture = document.getElementById('apodPicture')

  if (!emptyPic.className.includes('hide')) {
    emptyPic.classList.add('hide')
    apodPicture.classList.remove('hide')
  }
  
  title.innerHTML = apodTitle
  image.src = url
  description.innerHTML = explanation
}

function handleError() {
  const emptyPic = document.getElementById('empty-pic')
  const apodPicture = document.getElementById('apodPicture')
  
  if (!emptyPic.className.includes('hide')) {
    emptyPic.classList.add('hide')
    apodPicture.classList.remove('hide')
  }

  document.getElementById('warn-message')
  .innerText = 'Date must be between Jun 16, 1995 and Jul 31, 2023.'

  document.getElementById('image').src = './assets/400.svg'
}

const formDate = document.getElementById('date-form')
formDate.addEventListener('submit', (e) => {
  e.preventDefault()

  const date = dataInput.value
  const splitDate = date.split('-')
  const dateUrl = `&date=${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`
  
  
  fetch(apodUrl + dateUrl)
  .then((response) => {
    if(!response.ok) {
      throw new Error('Error' + response.status)
    }
    return response.json()
  })
  .then((data) => renderImage(data))
  .catch((error) => {
    handleError()
    console.log(error)
  })
  
  
})

const currentButton = document.getElementById('current-date')
currentButton.addEventListener('click', () => {
  fetch(apodUrl)
    .then((response) => response.json())
    .then((data) => renderImage(data))
})

