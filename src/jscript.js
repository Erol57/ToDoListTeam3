const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('selected');
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        menu.classList.toggle('menu-open');
    });
});