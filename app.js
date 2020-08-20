const picture = [
    {
        id:1,
        image:"https://images.unsplash.com/photo-1597796608813-002d2de5123d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text:"Picture 1"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text: "Picture 2"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1581452572279-057f09673eef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text: "Picture 3"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1567544568263-55b6f67b5289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
        text: "Picture 4"
    }
]

const image = document.getElementById("image");
const text = document.getElementById("text");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
   showPicture();
})

function showPicture(){
    let item = picture[currentItem];
    image.src = item.image;
    text.textContent = item.text;
}

next.addEventListener("click",function(){
    currentItem++;
    if(currentItem > picture.length - 1){
        currentItem = 0;
    }
    showPicture();
})

prev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = picture.length - 1;
    }
    showPicture();
})
