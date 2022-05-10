//   下滑移動navbar
function navbarHandler() {
    if (window.scrollY > 1) {
        console.log('123')
    }
}
// $(window).on('scroll', function () {
//     // console.log($(this).scrollTop())
//     if ($(this).scrollTop() > 1) {
//         $('nav').css('padding-top', '0');
//     } else {
//         $('nav').css('padding-top', '40px');
//     }
// })

$(".language").click(function () {
    $(".language-dropdown").slideToggle(1000);
})

//hamburger動畫、動態設定
$(".hamburder").on("click", function () {
    $('.nav-right-area').toggleClass("noOpacity");
    $('.arrow-right').toggleClass("noOpacity");
    $('.ham-clicked-area').toggleClass('display-none');
    $(this).children().eq(0).toggleClass("noOpacity");
    $(this).children().eq(2).toggleClass("noOpacity");
    $(this).children().eq(1).toggleClass('addanimation');
    $('#addAnimation').toggleClass('change');
    setTimeout(() => {
        $('.ham-clicked-area header').toggleClass('active');
    }, 700)

    setTimeout(() => {
        $('.ham-clicked-area h3').toggleClass('active');
    }, 1000)

    setTimeout(() => {
        $('.ham-clicked-area ul').toggleClass('active');
    }, 1300)

    setTimeout(() => {
        $('.ham-clicked-area footer, .ham-clicked-area .icon-area').toggleClass('active');
    }, 1500)
})

//最新行程輪播牆
const moveRight = document.querySelector('.arrow-right');
const moveLeft = document.querySelector('.arrow-left');
const move = document.querySelector('.book-card-wrap');
let distance = -4;

function moveRightHandler() {
    if (distance === -11) {
        distance--;
        move.style.transform = `translateX(${distance*6.25}%)`;
        console.log('-7後', distance);
        move.addEventListener('transitionend', function () {
            if (distance === -12) {
                console.log('觸發了')
                distance = -4;
                move.style.transition = 'none';
                move.style.transform = `translateX(${distance*6.25}%)`;
            }
            return;
        })
    } else {
        distance--;
        console.log('right');
        console.log('distance', distance);
        move.style.transition = '1s';
        move.style.transform = `translateX(${distance*6.25}%)`;
        return;
    }
}

function moveLeftHandler() {
    if (distance === -1) {
        distance++;
        move.style.transform = `translateX(${distance*6.25}%)`;
        console.log('-1後', distance);
        move.addEventListener('transitionend', function () {
            if (distance === 0) {
                console.log('觸發了')
                distance = -8;
                move.style.transition = 'none';
                move.style.transform = `translateX(${distance*6.25}%)`;
            }
            return;
        })
    } else {
        distance++;
        console.log('left');
        console.log('distance', distance);
        move.style.transition = '1s';
        move.style.transform = `translateX(${distance*6.25}%)`;
        return;
    }
}

moveRight.addEventListener('click', moveRightHandler)
moveLeft.addEventListener('click', moveLeftHandler)

//客房消息滾輪捲動動畫 & 下滑移動navbar
let prevScrollY = 0;
const navbar = document.querySelector('nav');
const toggleMenu = document.querySelectorAll('.toggle-menu');
const navLogo = document.querySelector('.nav-left-area img');
const body = document.querySelector('body');

function moveHandler() {
    //下滑移動navbar
    if (window.scrollY > 1) {
        console.log('123');
        document.querySelector('nav').style =  "padding-top: 10px;";
        toggleMenu.forEach((e)=>{
            e.classList.remove('menu-remove');
            e.classList.add('menu-add');
        })
        navLogo.setAttribute('src','./imgs/navbar-logo-red.png')
    }else {
        document.querySelector('nav').style =  "padding-top: 40px';";
        toggleMenu.forEach((e)=>{
            e.classList.remove('menu-add');
            e.classList.add('menu-remove');
        })
        navLogo.setAttribute('src','./imgs/navbar-logo.png')
    }

    //客房消息滾輪捲動動畫
    const toTopDistance = document.querySelector('.room').offsetTop + document.querySelector('.inner-container')
        .offsetTop;
    const windowBottom = window.screen.height + window.scrollY;
    const moveDiv = document.querySelector('.room-left');
    const moveText = document.querySelector('.textP');
    const nowScrollY = window.scrollY;
    const roomBottom = document.querySelector('.room').offsetTop + document.querySelector('.inner-container')
        .offsetTop + document.querySelector('.room').offsetHeight;
    const roomTop = document.querySelector('.room').offsetTop + document.querySelector('.inner-container')
        .offsetTop;

    if (windowBottom > toTopDistance && window.scrollY > prevScrollY) {
        moveDiv.style.transform += `translateY(-3px)`
        moveText.style.transform += `translateY(-3px)`
    } else if (windowBottom > toTopDistance && window.scrollY < prevScrollY) {
        moveDiv.style.transform += `translateY(3px)`
        moveText.style.transform += `translateY(3px)`
    } else if (windowBottom >= roomBottom || windowBottom <= roomTop) {
        moveDiv.style.transform = 'translateY(10%)';
        moveText.style.transform = 'translateY(0%)';
    }

    prevScrollY = nowScrollY;
}

window.addEventListener('scroll', moveHandler)

//美食消息輪播牆
const selectBtns = document.querySelectorAll('.food-select-btn');
const showDiv = document.querySelectorAll('.food-content');

selectBtns.forEach((v, i) => {
    v.addEventListener('click', function () {
        selectBtns.forEach((e) => {
            e.style.backgroundColor = "#ccc";
        })
        v.style.backgroundColor = "#bca480";
        showDiv.forEach((e) => {
            e.classList.add('display-none');
        })
        showDiv[i].classList.remove('display-none');
    })
})

//表單日期選擇'年/月/日'不顯示
const dateInput = document.querySelectorAll('.book-input');

dateInput.forEach((e) => {
    e.style.color = e.value ? 'black' : 'white';
    e.addEventListener('change', () => {
        e.style.color = 'black';
    })
})