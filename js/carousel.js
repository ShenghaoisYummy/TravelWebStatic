var carousel = document.getElementById('carousel_list');
var leftbtn = document.getElementById('left_btn');
var rightbtn = document.getElementById('right_btn');

var idx = 0;

rightbtn.onclick = function () {

    carousel.style.transition = 'transform .5s ease 0s'

    idx++;
    carousel.style.transform = `translateX(${ -16.66 * idx }%)`;

    if (idx > 4) {

        setTimeout(() => {

            carousel.style.transition = 'none';
            carousel.style.transform = 'none';
            idx = 0;

        }, 500);
    }

};

leftbtn.onclick = function () {


    if (idx == 0) {

        // to picture 5 instantly
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${ -16.66 * 5 }%)`;


        setTimeout(() => {

            setTimeout(() => {

                idx = 4
                carousel.style.transition = 'transform .5s ease 0s'
                carousel.style.transform = `translateX(${ -16.66 * idx }%)`;

            }, 0);
        }, 500);


    } else {

        idx--;
        carousel.style.transform = `translateX(${ -16.66 * idx }%)`;

    }
};