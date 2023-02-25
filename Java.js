//togle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klick di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

//maka
document.addEventListener(
  'click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  }
);
