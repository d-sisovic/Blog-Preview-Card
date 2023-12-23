(() => {
    const cardElement = document.querySelector('.card');
    const headingElement = document.querySelector('.title');

    headingElement.addEventListener('mouseenter', () => {
        cardElement.style.boxShadow = '1.6rem 1.6rem 0 0 #000';
    });

    headingElement.addEventListener('mouseleave', () => {
        cardElement.style.boxShadow = '0.8rem 0.8rem 0 0 #000';
    });
})();