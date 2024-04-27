
document.getElementById('prev').addEventListener('click' , () => {
    document.querySelector('.carousel').scrollBy(-1500, 0);
});

    document.getElementById('next').addEventListener('click' , () => {
    document.querySelector('.carousel').scrollBy(1500, 0);
});
