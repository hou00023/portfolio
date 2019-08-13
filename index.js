function click() {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    hidePage();
    document.querySelector(".left").classList.remove("navShow")
    if (this.textContent == "HOME") {
        document.querySelector("#home").classList.remove("hide");
    } else if (this.textContent == "ABOUT") {
        document.querySelector("#about").classList.remove("hide");
    } else if (this.textContent == "WORKS") {
        document.querySelector("#works").classList.remove("hide");
    } else if (this.textContent == "CONTACT") {
        document.querySelector("#contact").classList.remove("hide");
    }
}

function contact(){
    document.querySelector(".left li:nth-child(4)").dispatchEvent(new MouseEvent('click'));
}


function hidePage() {
    document.querySelectorAll("main section").forEach(function (page) {
        page.classList.add("hide");
    })
}

document.querySelectorAll(".left li").forEach(function (nav) {
    nav.addEventListener("click", click);
})

let images = new DocumentFragment();

for (let i = 1; i < 10; i++) {
    let img = document.createElement("img");
    img.src = "images/pixel-image/gallery-" + i + ".jpg";
    images.appendChild(img);
}

document.querySelector("#works div:nth-child(2)").appendChild(images);

document.querySelectorAll("#works>div:nth-child(2) img").forEach(function (item) {
    item.addEventListener("click", openImg);
})

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".imgWindow").classList.add("hide");
})

function openImg() {
    document.querySelector(".imgWindow").classList.remove("hide");
    let newSrc = this.src.split("/").filter((item) => {
        if (item == "pixel-image") {
            return false;
        } else {
            return true;
        }
    }).join("/");
    document.querySelector(".imgWindow img").src = newSrc;
//    document.querySelector(".imgWindow img").setAttribute("style", `top:${(document.querySelector(".overlay").clientHeight - document.querySelector(".imgWindow img").clientHeight)/2}px`);
}
document.querySelector(".fa-bars").addEventListener("click", function(){
    if(document.querySelector(".navShow")){
    document.querySelector(".left").classList.remove("navShow");
        
    }else{
    document.querySelector(".left").classList.add("navShow");
        
    }
})

