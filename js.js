
let input = document.querySelector('input[type="checkbox"]');

input.addEventListener('change', (e) => {
    let box = document.querySelector('.box-check');
    let content = document.querySelector('.content-main');

    if (e.target.checked) {
        box.classList.add('dark');
        content.classList.add('dark-mode');
    }else{
        box.classList.remove('dark');
        content.classList.remove('dark-mode');
    }
});

setInterval(() => {
    document.querySelector('.box-check').classList.toggle('dark');
    document.querySelector('.content-main').classList.toggle('dark-mode');
}, 2000);

document.addEventListener('DOMContentLoaded', ()=>{
    let contentStars = document.querySelector('.content-stars');
    let star = contentStars.innerHTML;
    for (let i = 0; i < 11; i++) {
        contentStars.innerHTML += star;
    }
});