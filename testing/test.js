var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })
// nightmare function to test login
nightmare
  .goto('http://localhost:3000/signin')
  .type('input#username.form-control', 'Matt')
  .type('input#password.form-control.alert','1234')
  .click('input#login.form-control.btn')
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });