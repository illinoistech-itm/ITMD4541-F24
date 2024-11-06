(function(){
const apiListUrl = 'https://dog.ceo/api/breeds/list/all';

const root = document.getElementById('root');

const contentWrapper = document.createElement('div');
contentWrapper.id = 'content-wrapper';

const header = document.createElement('h1');
header.textContent = 'Dog API Random Image Generator';
contentWrapper.appendChild(header);

const controlsWrapper = document.createElement('div');
controlsWrapper.id = 'controls';
const select = document.createElement('select');
select.id = 'breed-select';
const button = document.createElement('button');
button.id = 'btn';
button.textContent = 'Fetch Image';
controlsWrapper.append(select, button);
contentWrapper.appendChild(controlsWrapper);

const imageWrapper = document.createElement('div');
imageWrapper.id = 'image-wrapper';
const dogimg = document.createElement('img');
dogimg.id = 'dog-img';
dogimg.setAttribute('alt', '');
dogimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
imageWrapper.appendChild(dogimg);
contentWrapper.appendChild(imageWrapper);

root.appendChild(contentWrapper);

fetch(apiListUrl)
.then((res) => { return res.json(); })
.then((data) => {
    console.log(data);
    const breedArray = Object.keys(data.message);
    console.log(breedArray);
    breedArray.forEach((breed) => {
        const option = document.createElement('option');
        option.value = breed;
        option.textContent = breed;
        select.appendChild(option);
    });
    fetchImage();
})
.catch((err) => console.log(err));

function fetchImage() {
    console.log('fetchImage() called');
    const selectedBreed = select.value;
    console.log(selectedBreed);
    const apiImageUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    fetch(apiImageUrl)
    .then((res) => res.json())
    .then((data) => {
        dogimg.src = data.message;
        dogimg.setAttribute('alt', selectedBreed);
    })
    .catch((err) => console.log(err));
};

button.addEventListener('click', fetchImage);
select.addEventListener('change', fetchImage);

})(); //end of IIFE