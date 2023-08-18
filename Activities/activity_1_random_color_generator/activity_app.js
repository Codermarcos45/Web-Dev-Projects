let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let h2 = document.querySelector('h2');
    let randomColor = changeColor();
    h2.innerText = randomColor;
    h2.style.color  = randomColor;

    let div = document.querySelector('.color_area');
    div.style.backgroundColor = randomColor;
    div.style.border = '2px solid white';

});

let cl_area = document.querySelector('.color_area');

cl_area.addEventListener('mouseenter', function() {
    let h2 = document.querySelector('h2');
    let randomColor = changeColor();
    h2.innerText = randomColor;

    let div = document.querySelector('.color_area');
    div.style.backgroundColor = randomColor;
    div.style.border = '2px solid white';
    h2.style.color  = randomColor;
})

function changeColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;

    return color;
}

let btn_two = document.querySelector('.btn-two');

btn_two.addEventListener('click', function() {
    let color = prompt("Enter your color with proper hex format e.g. #00000 : ");

    let h2 = document.querySelector('h2');
    h2.style.color  = randomColor;
    h2.innerText = color;

    let div = document.querySelector('.color_area');
    div.style.backgroundColor = `${color}`;
    div.style.border = '2px solid white';
})
