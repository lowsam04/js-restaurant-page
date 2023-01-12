export function contact() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // Dome for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Low Xuan Restaurant and Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // Dom for phoneImage
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("image");
    phoneImage.src = "../src/assets/phone.jpg";
    phoneImage.alt = "Image of phone";
    contentDiv.appendChild(phoneImage);

    // p tag phone
    const paraPhoneImage = document.createElement("p");
    paraPhoneImage.classList.add("contact-copy");
    paraPhoneImage.textContent = "Call us";
    contentDiv.appendChild(paraPhoneImage);

    // Dom for emailImage
    const emailImage = document.createElement("img");
    emailImage.classList.add("image");
    emailImage.src = "../src/assets/email.jpg";
    emailImage.alt = "Image of email";
    contentDiv.appendChild(emailImage);

    // DOM for p tag for macnCheese
    const paraEmailImage = document.createElement("p");
    paraEmailImage.classList.add("contact-copy");
    paraEmailImage.textContent = "Email us at fake@fake.com";
    contentDiv.appendChild(paraEmailImage);


}