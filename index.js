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
  const title = document.getElementById('image-title')
  const image = document.getElementById('image')
  const description = document.getElementById('image-explanation')
  
  title.innerHTML = imageProps.title
  image.src = imageProps.url
  description.innerHTML = imageProps.explanation
}

const formDate = document.getElementById('date-form')
formDate.addEventListener('submit', (e) => {
  e.preventDefault()

  const date = dataInput.value
  const splitDate = date.split('-')
  const dateUrl = `&date=${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`
  

  fetch(apodUrl + dateUrl)
    .then((response) => response.json())
    .then((data) => renderImage(data))
})

async function getApodData () {
  fetch(apodUrl)
    .then((response) => response.json())
    .then((data) => renderImage(data))
}
