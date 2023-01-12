export function menu() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // Dome for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Low Xuan Restaurant and Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // Dom for greenBeanCass
    const greenBeanCass = document.createElement("img");
    greenBeanCass.classList.add("image");
    greenBeanCass.src = "../src/assets/greenbean.jpg";
    greenBeanCass.alt = "Image Top";
    contentDiv.appendChild(greenBeanCass);

    // p tag
    const paraGreenBeanCass = document.createElement("p");
    paraGreenBeanCass.classList.add("menu-copy");
    paraGreenBeanCass.textContent = "An amazing Green Bean Casserole that's a ";
    contentDiv.appendChild(paraGreenBeanCass);

    // Dom for macnCheese
    const macnCheese = document.createElement("img");
    macnCheese.classList.add("image");
    macnCheese.src = "../src/assets/macncheese.jpg";
    macnCheese.alt = "Image of Mac and Cheese";
    contentDiv.appendChild(macnCheese);

    // DOM for p tag for macnCheese
    const paraMacnCheese = document.createElement("p");
    paraMacnCheese.classList.add("menu-copy");
    paraMacnCheese.textContent = "The simple Mac and Cheese";
    contentDiv.appendChild(paraMacnCheese);



}