let topTextInput
let bottomTextInput
let imageInput
let generateBtn
let canvas
let ctx
let topTextSizeInput
let bottomTextSizeInput

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
   let fontSize

   canvas.width = img.width
   canvas.height = img.height

   ctx.clearRect(0, 0, canvas.width, canvas.height)
   ctx.drawImage(img, 0, 0)

   ctx.fillStyle = 'white'
   ctx.strokeStyle = 'blue'
   ctx.textAlign = 'center'

   // Top text font size
   fontSize = canvas.width * topTextSize
   ctx.font = fontSize + 'px Impact'
   ctx.lineWidth = fontSize / 20

   // Draw top text
   ctx.textBaseline = 'top'
   topText.split('\n').forEach((t, i) => {
      ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width)
      ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width)
   })

   // Bottom text font size
   fontSize = canvas.width * bottomTextSize
   ctx.font = fontSize + 'px Impact'
   ctx.lineWidth = fontSize / 20

   // Draw bottom text
   ctx.textBaseline = 'bottom'
   bottomText.split('\n').reverse().forEach((t, i) => {
      ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width)
      ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width)
   })
}

function init() {
   topTextInput = document.querySelector('#top-text')
   bottomTextInput = document.querySelector('#bottom-text')
   imageInput = document.querySelector('#img-input')
   generateBtn = document.querySelector('#generate-btn')
   canvas = document.querySelector('#meme-canvas')
   topTextSizeInput = document.querySelector('#top-text-size-input')
   bottomTextSizeInput = document.querySelector('#bottom-text-size-input')

   ctx = canvas.getContext('2d')

   canvas.width = canvas.height = 0

   generateBtn.addEventListener('click', () => {
      let reader = new FileReader()
      reader.onload = function () {
         let img = new Image
         img.src = reader.result
         img.onload = () => { generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value) }
      }
      reader.readAsDataURL(imageInput.files[0])
   })
}

// let date = new Date()
// let currentDate = date.toLocaleDateString('pt-BR', {
//    day: '2-digit',
//    month: 'short',
//    year: 'numeric'
// })

// document.querySelector('p#date').innerHTML = currentDate

function playSound () {
   document.querySelector('#play').play();
}

init()