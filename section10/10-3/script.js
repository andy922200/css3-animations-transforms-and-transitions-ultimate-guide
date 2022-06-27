const clickBtn = document.querySelector('#click-button')

clickBtn.addEventListener('click',()=>{
    const overlay = document.querySelector('#overlay')
    overlay.className = 'show'
})