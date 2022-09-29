// text file data
let textButton = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax request
    let xhr = new XMLHttpRequest();

    // prepare the request
    xhr.open('GET', 'message.text', true);

    // process the request
    xhr.send();

    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayTextData(data);
        }
    }

});

// display text data
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querrySelector('#text-card').innerHTML = htmlTemplate;
}

//json button
let jsonButton = document.querySelector("json-btn");
jsonButton.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '.mobile.json', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let mobile = Json.parser(data);
            console.log(mobile);
        }
    }
});

// display json data
let displayJSONData = (mobile) => {
    letTemplate = '';
    htmlTemplate = `<ul>
    <li>ID :${mobile.id}</li>
    <li>BRAND:${mobile.brand}</li>
    <li>BRAND:${mobile.color}</li>
    <li>BANDl:${mobile.price}</li>
    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate
};

// api button
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListiner('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let users = JSON.parse(data);
            console.log(users)
        }
    }
});

// sisplay users
let displayUsers = (users) => {
    let htmlTemplate = '';
    htmlTemplate = '';
    for (let user of users) {
        htmlTemplate += `<ul class = "list-group">
        <li class = "list-group-item">ID : ${user.id}</li>
        <li class = "list-group-item">ID : ${user.name}</li>
        <li class = "list-group-item">ID : ${user.email}</li>
        <li class = "list-group-item">ID : ${user.address.street}</li>
        <li class = "list-group-item">ID : ${user.address.city}</li>
        `
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate;
}


