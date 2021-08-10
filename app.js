let hamberger = document.querySelector('.hamberger');
let close = document.querySelector('.close');
let box = document.querySelector('.box');


hamberger.addEventListener('click', function () {
    box.classList.add('open');

});
close.addEventListener('click', function () {
    box.classList.remove('open');

});
hamberger.addEventListener('click', function () {
    hamberger.classList.add('display');

});
close.addEventListener('click', function () {
    hamberger.classList.remove('display');
});