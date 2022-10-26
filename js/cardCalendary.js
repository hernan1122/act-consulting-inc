const cardCalendary = document.getElementById('card-calendary');
const btn = document.getElementById('btn-card');

btn.addEventListener('click', removeCard);

window.onload = function () {
  setTimeout(() => {
    cardCalendary.style.display = 'blok';
  }, 2000)
};

function removeCard() {
  cardCalendary.style.display = 'none';
  console.log('hola');
}


//ingress-menu
window.onscroll = function () {
  const scroll = document.documentElement.scrollTop;
  const menu = document.getElementById('menu');
  const calendaryMenu = document.getElementById('calendary');
  const homeMenu = document.getElementById('home');
  const aboutMenu = document.getElementById('about-menu');
  const servicesMenu = document.getElementById('services');
  const contactsMenu = document.getElementById('contacts');

  if (scroll > 180) {
    menu.classList.add('ingress-menu');
    calendaryMenu.classList.add('scroll-menu-a');
    homeMenu.classList.add('scroll-menu-a');
    aboutMenu.classList.add('scroll-menu-a');
    servicesMenu.classList.add('scroll-menu-a');
    contactsMenu.classList.add('scroll-menu-a');
  } else if (scroll < 180) {
    menu.classList.remove('ingress-menu');
    calendaryMenu.classList.remove('scroll-menu-a');
    homeMenu.classList.remove('scroll-menu-a');
    aboutMenu.classList.remove('scroll-menu-a');
    servicesMenu.classList.remove('scroll-menu-a');
    contactsMenu.classList.remove('scroll-menu-a');
  }
}

//exit-menu
/* window.onscroll = function () {
  const scroll1 = document.documentElement.scrollTop;

} */