document.addEventListener('DOMContentLoaded', () => {
    let searchButtons = document.querySelectorAll('.navigation__menu-button');

searchButtons.forEach(function (searchButton) {
    {
        searchButton.onclick = function (event) {
            this.classList.toggle('active');

            var panel = this.parentNode.querySelector('.navigation__menu');
            panel.classList.toggle('show');
        }
    }
});
});