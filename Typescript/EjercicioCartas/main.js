"use strict";
const imgElement = document.getElementById("img") || null;
// Asignar la fuente de la imagen (src) si el elemento existe
if (imgElement) {
    imgElement.setAttribute('src', "./card-back.png");
    imgElement.addEventListener('mouseover', () => {
        imgElement.setAttribute('src', "./card-front.png");
    });
    imgElement.addEventListener('mouseout', () => {
        imgElement.setAttribute('src', "./card-back.png");
    });
}
