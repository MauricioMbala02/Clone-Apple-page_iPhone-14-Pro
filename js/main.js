let video = document.querySelector('.mediaIntroVideoBg')
let intervalo = 5100
let body = document.querySelector('body')
let corMuda1 = document.getElementById('corMuda1')
let corMuda2 = document.getElementById('corMuda2')
let corMuda3 = document.getElementById('corMuda3')
let corMuda4 = document.getElementById('corMuda4')
let img1 = document.querySelector('.tresIphone')
let img2 = document.querySelector('.imgTable')
let img3 = document.querySelector('.iphoneTimeImg')
let img4 = document.querySelector('.iphoneTop')
let img5 = document.querySelector('.iphonePhoto')
let img6 = document.querySelector('.water')
let img7 = document.querySelector('.crashImg')
let img8 = document.querySelector('.iphoneProMaxImg')

function mudarVideo(){
    video.style.display = 'none'
}


setInterval(function(){
    mudarVideo()
}, intervalo);


corMuda1.onclick = function(){
    body.classList.add('rootMudar1')
    body.classList.remove('rootMudar2')
    body.classList.remove('rootMudar3')
    body.classList.remove('rootMudar4')
    img1.src = './img/deep_purple/dynamic_island_deep_purple__exowosw6732a_large.jpg'
    img2.src = './img/deep_purple/chip_deep_purple__bs3dtgitlt6q_large.jpg'
    img3.src = './img/deep_purple/always_on_deep_purple__bt30qm606e4i_large.jpg'
    img4.src = './img/deep_purple/ceramic_deep_purple__fhc53fxovp2e_large.jpg'
    img5.src = './img/deep_purple/selfie_deep_purple__fmaespigvcqe_large.jpg'
    img6.src = './img/Captura de ecrã de 2023-03-12 16-55-40.png'
    img7.src = './img/deep_purple/Captura de ecrã de 2023-03-12 16-53-12.png'
    img8.src = './img/deep_purple/Captura de ecrã de 2023-03-13 15-02-52.png'
}

corMuda2.onclick = function(){
    body.classList.add('rootMudar2')
    body.classList.remove('rootMudar1')
    body.classList.remove('rootMudar3')
    body.classList.remove('rootMudar4')
    img1.src = './img/gold/dynamic_island_gold__du9nmhxv9ioi_large.jpg'
    img2.src = './img/gold/chip_gold__eerio8hwoiie_large.jpg'
    img3.src = './img/gold/always_on_gold__dbn50omyv16q_large.jpg'
    img4.src = './img/gold/ceramic_gold__tvrqorndwqau_large.jpg'
    img5.src = './img/gold/selfie_gold__d3b64z4dmqie_large.jpg'
    img6.src = './img/Captura de ecrã de 2023-03-12 16-55-47.png'
    img7.src = './img/gold/Captura de ecrã de 2023-03-12 16-54-16.png'
    img8.src = './img/gold/Captura de ecrã de 2023-03-13 15-03-12.png'
}

corMuda3.onclick = function(){
    body.classList.add('rootMudar3')
    body.classList.remove('rootMudar1')
    body.classList.remove('rootMudar2')
    body.classList.remove('rootMudar4')
    img1.src = './img/silver/dynamic_island_silver__cumki5rdsiie_large.jpg'
    img2.src = './img/silver/chip_silver__e31zxzycd04m_large.jpg'
    img3.src = './img/silver/always_on_silver__dy2bdxbm1wgi_large.jpg'
    img4.src = './img/silver/ceramic_silver__bx0zr98lzwdy_large.jpg'
    img5.src = './img/silver/selfie_silver__zxguc9b8vpua_large.jpg'
    img6.src = './img/Captura de ecrã de 2023-03-12 16-55-50.png'
    img7.src = './img/silver/Captura de ecrã de 2023-03-12 16-54-25.png'
    img8.src = './img/silver/Captura de ecrã de 2023-03-13 15-03-16.png'
}

corMuda4.onclick = function(){
    body.classList.add('rootMudar4')
    body.classList.remove('rootMudar1')
    body.classList.remove('rootMudar2')
    body.classList.remove('rootMudar3')
    img1.src = './img/space_black/dynamic_island_space_black__b8kyeobdwp36_large.jpg'
    img2.src = './img/space_black/chip_space_black__bsbxm6ud67ki_large.jpg'
    img3.src = './img/space_black/always_on_space_black__dcgs24uj5cq6_large.jpg'
    img4.src = './img/space_black/ceramic_space_black__qtpgjtbhkvuy_large.jpg'
    img5.src = './img/space_black/selfie_space_black__ff1gjalbs82u_large.jpg'
    img6.src = './img/Captura de ecrã de 2023-03-12 16-55-54.png'
    img7.src = './img/space_black/Captura de ecrã de 2023-03-12 16-54-57.png'
    img8.src = './img/space_black/Captura de ecrã de 2023-03-13 15-03-19.png'
}

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $(body).addClass("sticky")
        }else{
            $(body).removeClass("sticky") 
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 110){
            $(body).addClass("sticky2")
        }else{
            $(body).removeClass("sticky2") 
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 4100){
            $(body).addClass("sticky3")
        }else{
            $(body).removeClass("sticky3") 
        }
    });
});


const debounce = function(func, wait, immediate){
    let timeout
    return function(...args){
        const context = this
        const later = function () {
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if(callNow) func.apply(context, args)
    }
}

const target = document.querySelectorAll("[data-anime]")
const animationClass = 'animate'
const animationClass2 = 'animate2'

 
function animeScroll2(){
    const windowTop = window.pageYOffset + 100 //((window.innerHeight * 3) / 4)
    target.forEach(function(element) {
        if(windowTop <= element.offsetTop){
            element.classList.add(animationClass2)
        }else{
            element.classList.remove(animationClass2)
        }
    })
}

function animeScroll(){
    const windowTop = window.pageYOffset + 500 //((window.innerHeight * 3) / 4)
    target.forEach(function(element) {
        if(windowTop >= element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()
animeScroll2()

//if(target.length){
    window.addEventListener('scroll', function() {
        animeScroll()
        animeScroll2()
    })
//}
