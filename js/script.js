let validator = {
       handleSubmit: (event) => {
              event.preventDefault(); // não enviar formulário
              
              let send = true;
              let input = form.querySelector('input');
              let check = validator.checkInput(input);
              if (check !== true) {
                     send = false;
                     validator.showError(input, check);          
              }
              else if (send) {
                     form.submit();
              }
        },
        checkInput: (input) => {
              
        }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
