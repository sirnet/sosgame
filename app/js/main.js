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