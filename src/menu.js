function createHeader() {
    const header = document.createElement("h1");
    header.classList.add("header");
    header.textContent = "Menu";

    return header;
}


function description() {
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "THis is the menu we currently offer"

    return description;
}


function initMenu() {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(description());
    
}


export default initMenu;