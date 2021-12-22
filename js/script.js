let erro = document.querySelector('#erro');
document.querySelector('#email').addEventListener('blur', event => {
       if(!email.event){
              erro.innerHTML = "Email Inválido";
       }
});
