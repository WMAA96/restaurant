function createHeader() {
    const header = document.createElement("h1");
    header.classList.add("header");
    header.textContent = "Contact us";

    return header;
}


function description() {
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "These are the ways to contact us:"

    return description;
}


function initContact() {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(description());
    
}

export default initContact;