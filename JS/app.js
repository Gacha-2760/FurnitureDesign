document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('#js-hamburger');
  const menu = document.querySelector('#js-nav');
  const listItems = document.querySelectorAll('.js-list');

  hamburgerBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');

    if(menu.classList.contains('active')) {
      listItems.forEach(item => {
        item.classList.add('animate-in');
      });
    } else {
      listItems.forEach(item => {
        item.classList.remove('animate-in');
      });
    }
  });
});
