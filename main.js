const dropDowns = document.querySelectorAll('.drop-dwn');

dropDowns.forEach(dropDown => {
    dropDown.addEventListener('click', () => {
        const content = dropDown.parentElement.querySelector('.content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
