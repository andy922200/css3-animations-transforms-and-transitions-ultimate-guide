(function(){
    const buttonFirst = document.querySelector('.button-first')
    const buttonFirstPseudo = document.querySelector('.button-first-pseudo')

    buttonFirst.addEventListener('mouseenter', e =>{
        buttonFirstPseudo.style.top = `${e.offsetY}px`
        buttonFirstPseudo.style.left = `${e.offsetX}px`
    })
}())