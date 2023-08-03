
function onEntry (entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

let lineZ = document.querySelectorAll(".line-item");
let lineList = document.querySelector(".line-list");
let menuList = document.querySelector(".menu__list")
let j = 0;


lineList.addEventListener('click', (e) => {
  if(j===0){
    lineZ[0].classList.add("line--active");
    lineZ[3].classList.add("line--active");
    lineZ[1].classList.add("line--rotateX");
    lineZ[2].classList.add("line--rotateY");
    menuList.classList.add("menu--action")
    j+=1;
  } else {
    lineZ[0].classList.remove("line--active");
    lineZ[3].classList.remove("line--active");
    lineZ[1].classList.remove("line--rotateX");
    lineZ[2].classList.remove("line--rotateY");
    menuList.classList.remove("menu--action")
    j=0;
  }
});

let featuresList = document.querySelectorAll(".features-item");
let featuresLine = document.querySelector(".features-line");


for (let i = 0; i < featuresList.length; i++){
    const list = featuresList[i];
    list.addEventListener('click', (e) => {
      for (let j = 0; j < featuresList.length; j++){
        featuresList[j].classList.remove("features-item--active");
        featuresList[j].children[1].classList.remove("features-lead--active");
      }
      list.classList.add("features-item--active");
      list.children[1].classList.add("features-lead--active");
      console.log(parseInt(list.offsetTop));
      const height = 'height: ' + parseInt(list.offsetTop) + 'px';
      featuresLine.setAttribute('style', height);
    });
}

var swiper = new Swiper('.mySwiper', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  debugger: true,
});


function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
    console.log('init');
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('click');
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('sliderMove');
  });
  on('slideChange', () => {
    if (!swiper.params.debugger) return;
    console.log(
      'slideChange',
      swiper.previousIndex,
      '->',
      swiper.activeIndex
    );
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionStart');
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionEnd');
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
    console.log('fromEdge');
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
    console.log('reachBeginning');
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('reachEnd');
  });
}