document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  // create and XHR object
  const xhr = new XMLHttpRequest();

  // Configurae the request -
  xhr.open("GET", "./data/data.txt");

  // what to do when data is available

  xhr.onload = function () {
    if (this.status === 200) {
      // 200 Ok... 404 not found... 500.. server porblem
      document.querySelector(
        "#output"
      ).innerHTML = ` <strong> ${this.responseText}</strong>`;
    } else {
      console.log("Something went wrong");
    }
  };

  //   send the request..
  xhr.send();
}

document.querySelector("#btn2").addEventListener("click", loadJSON);

function loadJSON() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/user.json");

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      let user = JSON.parse(this.responseText);
      let output = `<ul><li>ID: ${user.id}</li><li>NAME: ${user.name}</li><li>EMAIL:${user.email}</li><li>PHONE: ${user.phone}</li></ul>`;

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}

document.querySelector("#btn3").addEventListener("click", loadJSONS);

function loadJSONS() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/users.json");

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      let users = JSON.parse(this.responseText);

      let output = "";
      users.forEach(function (user) {
        output += `<div class="profile"><h3>ID: ${user.id}</h3><p>NAME: ${user.name}</p><p>EMAIL:${user.email}</p><p>PHONE: ${user.phone}</p></div>`;
      });

      // let output = `<ul><li>ID: ${user.id}</li><li>NAME: ${user.name}</li><li>EMAIL:${user.email}</li><li>PHONE: ${user.phone}</li></ul>`;

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}

document.querySelector("#btn4").addEventListener("click", loadAPI);

function loadAPI() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users");

  xhr.onload = function () {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);
      let output = "";
      users.data.forEach(function (user) {
        let re = /(\w+)@(\w+\.(\w+))/;
        let domainName = user.email.match(re);
        console.log(domainName);
        output += `<div class="profile"><h1>${user.id}</h1><p><img src = "${
          user.avatar
        }" id="pic"/></p><p>${user.first_name.toUpperCase()}</p> <p>Domain Name:${
          domainName[3]
        }</p></div>`;
      });
      document.querySelector("#output").innerHTML = output;
    }
  };
  xhr.send();
}

document.querySelector("#btn5").addEventListener("click", loadGithub);

function loadGithub() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users");

  xhr.onload = function () {
    var output = "";
    let users = JSON.parse(this.responseText);
    if (this.status === 200) {
      users.forEach(function (user) {
        output += `<div class="profile"><h1>${user.id}</h1><p><img src = "${user.avatar_url}" id="pic"/></p><p>${user.login}</p> <p> <a href="${user.html_url}">More..</a> </p></div>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}