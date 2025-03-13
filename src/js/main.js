import axios from 'axios';


document.addEventListener("DOMContentLoaded", function (event) {
  main.event.init();
})

let main = {};


main.event = {
  
  init: () => {
    
    AOS.init();

  }
}
const login = document.getElementById('login');
login.addEventListener('login', () => {
  console.log('chamei o método')
})

main.method = {

  login: () => {

  }
}

export default main;