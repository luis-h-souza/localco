import main from "./main";

main.event.init();

const login = document.getElementById('login');
login.addEventListener('login', () => {
  console.log('chamei o método')
})

main.method.login();

// const criarLogin = document.getElementById('criarLogin');
// criarLogin = addEventListener('click', () => {
  
// })
