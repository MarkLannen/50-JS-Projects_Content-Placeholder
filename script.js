const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);
function getData() {
  header.innerHTML =
    '<img src="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw0755a39b/images/full/full_2022_/2022/full_2022_grizl-cf-sl-7_3244_C01_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, veniam?';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Feb, 20, 2023';
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
