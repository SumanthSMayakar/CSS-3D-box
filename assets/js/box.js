const boxContainer = document.querySelector('#boxes');
const btn = document.getElementById('btn');

// event call 
btn.addEventListener('click', function(){
    boxContainer.classList.toggle('big');
});

// custom function to create boxes
function createBoxes() {
    for(let i = 0; i < 4; i++){ //column
        for (let j=0; j<4; j++){ //row
            const box = document.createElement('div');
            box.classList.add('box')
            box.style.backgroundPosition = `${-j *125}px ${-i *125}px`;
            boxContainer.appendChild(box);
        }
    }
}

// initial function call
createBoxes()
