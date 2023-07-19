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


