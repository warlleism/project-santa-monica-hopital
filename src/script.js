const target = document.querySelectorAll("[data-anime]")

const animationClass = 'animate'

function animeScroll(){

    const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4);

    target.forEach(function(elemento){
      if(windowTop > elemento.offsetTop){
          elemento.classList.add(animationClass)
      }else{
        elemento.classList.remove(animationClass)
      }
         
    })
}

window.addEventListener('scroll', function(){
    animeScroll()
})




let time = 2000;

currentImageIndex = 0;

imagens = document.querySelectorAll("#slider img")

max = imagens.length

function nextImage(){

    imagens[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    
    imagens[currentImageIndex].classList.add("selected")
   
}

function start(){
  setInterval(()=> {
    nextImage()
  },time)
}

window.addEventListener("load", start)