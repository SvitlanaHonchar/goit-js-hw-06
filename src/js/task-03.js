const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGalleryEl = ({ url, alt } = {}) => {
  return `
  <li class="gallery-el">
    <img src="${url}" alt="${alt}">
  </li>`;

  // // створення li
  // const galleryEl = document.createElement("li");
  // galleryEl.classList.add("gallery-el");
  // // створення img
  // const galleryImg = document.createElement("img");
  // galleryImg.src = url;
  // galleryImg.alt = alt;
  // galleryEl.append(galleryImg);

  // return galleryEl;
};

const createGallery = images.map((image) => createGalleryEl(image)).join();

console.log(createGallery);

const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = createGallery;
