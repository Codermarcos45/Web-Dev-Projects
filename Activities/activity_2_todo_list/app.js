let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

    btn.addEventListener('click', function() {
        let li = document.createElement('li');
        li.innerText = inp.value;
        inp.value = '';


        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.classList.add('delete');

        li.appendChild(delBtn); 
        ul.appendChild(li);
    });


let delBtn = document.querySelectorAll(".delete");

for(btns of delBtn) {
    btns.addEventListener('click', function() {
        // console.log("element deleted!");
        let parent = this.parentElement;
        parent.remove();

    })
}