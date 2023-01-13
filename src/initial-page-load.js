import restaurantImage from './assets/restaurant.jpg';

export function initialPageLoad() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Low Xuan Restaurant and Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = restaurantImage;
    topImage.alt = "Image Top";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is an upscale restaurant that touts tis elegance and spacious dining/lounge area.";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Attire required for this facility is business casual at a minimum";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks, Management.";
    contentDiv.appendChild(para3);
}