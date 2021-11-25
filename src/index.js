import initWebsite from './start';
import initMenu from './menu';
import initContact from './contact';
initWebsite();


function createButtons() {


    const header = document.createElement("div");
    header.setAttribute("id", "test");

    const home = document.createElement("button");
    home.textContent = "Home"
    home.classList.add("button");
    home.setAttribute("id", "home");

    const menu = document.createElement("button");
    menu.textContent = "Menu"
    menu.classList.add("button");
    menu.setAttribute("id", "menu");

    const contact = document.createElement("button");
    contact.textContent = "Contact"
    contact.classList.add("button");
    contact.setAttribute("id", "contact");

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    const content = document.getElementById("content");
    content.prepend(header);

}

createButtons();


const buttons = (document.querySelectorAll(".button"));
    buttons.forEach(button => 
        button.addEventListener("click", updateDisplay));



        
function updateDisplay(e){
    let display = document.getElementById("content");


    while(display.lastChild.id !== "test") {
        display.removeChild(display.lastChild);
        
    }

    switch(e.target.id) {
        case "home": 
            initWebsite();
            break;
        case "menu":
            initMenu();
            break;
        case "contact":
            initContact();
            break;
        default:
            console.log("error");
        
    }



    
}