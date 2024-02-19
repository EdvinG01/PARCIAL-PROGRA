document.addEventListener('DOMContentLoaded', function() {
    const titleBox = document.getElementById('title-box');
    titleBox.addEventListener('click', function() {
        alert('Has clickeado en el título');
    });

    const smallBox = document.querySelector('.small-box');
    smallBox.addEventListener('focus', function() {
        smallBox.style.backgroundColor = '#e6e6e6';
    });
    smallBox.addEventListener('blur', function() {
        smallBox.style.backgroundColor = '';
    });

    const contentBox = document.querySelector('.container:last-child .box');
    contentBox.addEventListener('mouseover', function() {
        contentBox.style.boxShadow = '0px 0px 10px 1px rgba(0, 0, 0, 0.5)';
    });
    contentBox.addEventListener('mouseout', function() {
        contentBox.style.boxShadow = '';
    });
});