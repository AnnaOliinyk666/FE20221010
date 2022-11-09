let sayHi = document.querySelector('.sayHello');
sayHi.addEventListener('click', hello)

function hello (event) {
    console.log("Hello")
}

let picture = document.querySelector('.picture');
let add = document.querySelector('.add')
add.addEventListener('click', someChanges);

function someChanges (event) {
    picture.classList.toggle('picture_new')
}