document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('active');
            if (this.nextElementSibling.classList.contains('active')) {
                this.style.color = '#ffffff'; 
            } else {
                this.style.color = '#7a7693'; 
            }
        });
    });
});
