let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let copy = document.querySelectorAll('*')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})



let cons = ()=>{
    alert('ей отстань от моего кода!')
    copy.style.userSelect = 'none'
}


addEventListener('copy', cons)


let buton = document.querySelector('#buton')
let con = ()=>{
    alert('Извините у нас техническая ошибка')
}

buton.addEventListener('click', con)



let buton2 = document.querySelector('#buton2')
let conti = ()=>{
    confirm('Пополните кошелёк пожалуста')
}

buton2.addEventListener('click', conti)

let buton3 = document.querySelector('#buton3')
let contii = ()=>{
    confirm('Пополните кошелёк пожалуста')
}

buton3.addEventListener('click', contii)


let buton4 = document.querySelector('#buton4')
let contiii = ()=>{
    confirm('Пополните кошелёк пожалуста')
}

buton4.addEventListener('click', contiii)



let buton5 = document.querySelector('#buton5')
let contia = ()=>{
    confirm('Пополните кошелёк пожалуста')
}

buton5.addEventListener('click', contia)









let mn = document.querySelector('.sil1')
let nm = document.querySelector('.flex')

let promo = nm.offsetTop

function scrol1(event){
    event.preventDefault()
    window.scroll({
        top:promo,
        behavior:"smooth",
    })
}

mn.addEventListener('click', scrol1)



// 2
let lnk2 = document.querySelector('.sil2')
let cont = document.querySelector('.sec')

let sec2_pos = cont.offsetTop




function scrool_js1(event) {
    event.preventDefault()
    cont.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk2.addEventListener('click', scrool_js1)

//////////////////////////



//////////////////////////
let lnk3 = document.querySelector('.sil3')
let sec = document.querySelector('.flex2')

let sec3_pos = sec.offsetTop




function scrool_js3(event) {
    event.preventDefault()
    sec.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk3.addEventListener('click', scrool_js3)



/////////////////////
let lnk4 = document.querySelector('.sil4')
let sec4 = document.querySelector('.bc')

let sec4_pos = sec.offsetTop




function scrool_js4(event) {
    event.preventDefault()
    sec4.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk4.addEventListener('click', scrool_js4)



/////////////////////

let lnk5 = document.querySelector('.sil5')
let sec5 = document.querySelector('.social_media')

let sec5_pos = sec.offsetTop




function scrool_js5(event) {
    event.preventDefault()
    sec5.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk5.addEventListener('click', scrool_js5)
