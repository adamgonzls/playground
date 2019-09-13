let contacts = {
  "name":"Timothy",
  "age":35,
  "address":{
    "street":"1 Main St",
    "city":"Montreal"
  },
  "interests":["cooking", "biking"]
}

let s = JSON.stringify(contacts);

// let users = [
//   {
//     name: "Timothy",
//     age: 35
//   },
//   {
//     name: "Georgette",
//     age: 29
//   },
//   {
//     name: "Craig",
//     age: 54
//   }
// ];

// let output = '';
// for (var i = 0; i < users.length; i++) {
//   // console.log(users[i].name);
//   output += '<li>' + users[i].name + '</li>';
// }
// document.getElementById('users').innerHTML = output;

let request = new XMLHttpRequest();
request.open('GET', 'users.json', true);
request.onload = function () {
  let users = JSON.parse(this.response);

  let output = '';
  for (var i = 0; i < users.length; i++) {
    output += '<li>' + users[i].name + ' is ' + users[i].age + ' years old.' + '</li>';
  }
  document.getElementById('users').innerHTML = output;
}

request.send();

console.log('here');

var xhr = new XMLHttpRequest();
var url = "https://cl.s10.exct.net/subscribe.aspx?lid=1267";
var params = "MID=100001873&Initial Source=Air Direct Opt-in&First Name=Adam&Last Name=Gonzales&Email Address=adamgonzales1@gmail.com&Country=United States";
xhr.open("POST", url, true);

xhr.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    alert(http.responseText);
  }
}
xhr.send(params);