const btn = document.querySelector('.button');
const leftarrow = document.querySelector('.left-arrow');
const rightarrow = document.querySelector('.right-arrow');
const sectionMainImage = document.querySelector('section.main-image');
const features = document.querySelector('section.features');
const header = document.querySelector('header');
const home = document.querySelector('header nav .index');
const projects = document.querySelector('header nav .projects');
const about = document.querySelector('header nav .about');
const blog = document.querySelector('header nav .blog');
const contactUs = document.querySelector('header nav .contactUs');
const news = document.querySelector('header nav .news');
const pages = document.querySelector('header nav .pages')



btn.addEventListener('click', function () {
    console.log(shape.value)
});


var fotos = ['img/index/main.jpeg', 'img/index/pakeitimas.jpeg', 'img/index/pakeitimas2.jpeg', 'img/index/pakeitimas3.jpeg'];

var current = 0;



                  

if (sectionMainImage) {
    sectionMainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${fotos[current]}")`;
}


if (rightarrow){
rightarrow.addEventListener('click', function () {
    current++;
    if (!fotos[current]) current = 0;
    sectionMainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("${fotos[current]}")`;
});
}


if (leftarrow){
leftarrow.addEventListener('click', function () {
    current--;
    if (!fotos[current]) current = fotos.length - 1;
    sectionMainImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("${fotos[current]}")`;
});
}












//if(mainPhotos[n]) n=mainPhotos
//!mainPhotos[n]? n=0:null;







if (header && features){
document.addEventListener('scroll', function () {
    if (window.scrollY + window.innerHeight * 0.35 > features.offsetTop) {
        header.classList.add('active');
        // patamsejimas.style.background = 'rgb(204, 204, 204)' && 'hsl(0, 0%, 80%)';
        // patamsejimas.style.opacity = 0.7;
        // patamsejimas.style.transition = '2s';
    } else if (window.scrollY + window.innerHeight * 0.35 < features.offsetTop) {
        header.classList.remove('active');

    }
});
}


if (window.location.pathname == '/p25%20projektasv2/dist/index.php') {
    home.style.fontSize = '36px';
} else if (window.location.pathname == '/p25%20projektasv2/dist/projects.php') {
    projects.style.fontSize = '36px';
} else if (window.location.pathname == '/p25%20projektasv2/dist/about.php') {
    about.style.fontSize = '36px';
} else if (window.location.pathname == '/p25%20projektasv2/dist/contacts.php') {
    contactUs.style.fontSize = '36px';
} else if (window.location.pathname == '/p25%20projektasv2/dist/pages.php') {
    pages.style.fontSize = '36px';
} else if (window.location.pathname == '/p25%20projektasv2/dist/blog.php') {
    blog.style.fontSize = '36px';
} else if (window.location.pathname == '/p25%20projektasv2/dist/news.php') {
    news.style.fontSize = '36px';
} 







/* besikeicianti nuotrauku galerija
function Slider(time) {
    var t;
    var n = 0;
    this.showFirstSlide = function () {
        box[n].style.opacity = 1;
        box[n].style.display = 'flex';
    };
    this.startSlider = function () {
        console.log('slider started');
        t = setInterval(function () {
            n++;
            if (n == box.length) {
                n = 0
            }
            if (!box[n - 1]) {
                box[box.length - 1].style.opacity = 0;
                box[box.length - 1].style.display = 'none';
            } else {
                box[n - 1].style.opacity = 0;
                box[n - 1].style.display = 'none';
            }
            box[n].style.display = 'flex';
            setTimeout(() => {
                box[n].style.opacity = 1;
            }, 100);
            console.log(n)
        }, time)
    };
    this.stopSlider = function () {
        clearInterval(t);
        console.log('slider paused')
    }
}

if (container) {
    var slider = new Slider(4000);
    slider.showFirstSlide();
    slider.startSlider();
    container.addEventListener('mouseenter', function () {
        slider.stopSlider()
    });
    container.addEventListener('mouseleave', function () {
        slider.startSlider()
    });
}
*/
