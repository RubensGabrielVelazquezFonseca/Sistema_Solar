const planeta = document.querySelectorAll('.planeta')
const raio = [80]
const radiano = [0]
const velocidade = [1.502]
const orbita = document.querySelectorAll('.orbita')

orbita.forEach((orbita, index)=>{
  orbita.style.height = `${raio[index]}vmin`
  orbita.style.width = `${raio[index]}vmin`                 	
})

setInterval( ()=> {
  planeta.forEach( (planeta, index)=>{
    planeta.style.left = `${Math.cos(radiano[index]) *   raio[index]}vmin`
    planeta.style.top = `${Math.sin(radiano[index]) * raio[index]}vmin`
    radiano[index] += velocidade[index] * 0.02
  })
}, 1000/60)