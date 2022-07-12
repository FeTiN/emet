const
    header = document.querySelector('.header'),
    mobi = document.querySelector('.mobi'),
    menu = document.querySelector('.header ul');

document.addEventListener('scroll', e => {
    let scrolled = document.scrollingElement.scrollTop;

    if ( scrolled > header.offsetHeight ) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// console.log(mobi);

mobi.addEventListener('click', e => {
    let isMenuHidden = menu.offsetWidth;

    console.log(isMenuHidden);
    if ( isMenuHidden > 0 ) {
        menu.classList.remove('active');
        mobi.classList.remove('active');
    } else {
        menu.classList.add('active');
        mobi.classList.add('active');
        menu.style.top = header.offsetHeight + 'px';
    }
})


// $(window).scroll(function(){
//     let s = $(this).scrollTop(),
//         h = $('.header').height();
//
//     s > h ? $('.header').addClass('active') : $('.header').removeClass('active');
// });
