function createHeader() {
    const restName = document.createElement("h1");
    restName.classList.add("restName");
    restName.textContent = "Restaurant";

    return restName;

}

function image() {
    const img = document.createElement("img");
    
    img.src = "rest.png"
    img.classList.add("image");

    return img;
}


function description() {
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "THis is the best restaurant etc etc"

    return description;
}


function initWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(image());
    content.appendChild(description());
    
}





export default initWebsite;