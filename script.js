document.querySelector('button').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            return response.json();
        })
        .then((myContent) => {
            myImage.src = myContent['message'];
        });
}, false);


    // НОРМ ПРИМЕР!!!!
    // fetch('https://api.github.com/users/hacktivist123/repos')
    // .then(response => response.json())
    // .then(data => console.log(data));
    // надо подумать https://www.pexels.com/ru-ru/api/documentation/